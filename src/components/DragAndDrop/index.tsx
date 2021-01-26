import * as React from 'react';

import Playlist from './Playlist';
import { ElementFactor, CELLMARGIN, CELLHEIGHT, TITLEHEIGHT } from 'src/hooks/usePlaylist';

type Props = {
  allElements: ElementFactor[];
  setElements: React.Dispatch<React.SetStateAction<ElementFactor[]>>;
};

// findIndex calculates the index of dropped item
export const findIndex = (
  dropPointY: number,
  netOffset: number,
  itemCount: number,
):number => {
  const i = Math.trunc((dropPointY + netOffset) / (CELLHEIGHT+CELLMARGIN));
  if (i <= 0){ return 0; }
  if (i > itemCount-1) { return itemCount; }
  return i;
};

export const reOrderElements = <T extends unknown>(arr: T[], current: number, newIndex: number): T[] => {
  if (current === newIndex || current < 0 || newIndex > arr.length) {
    return arr;
  }
  const target = arr[current];
  return current < newIndex
    ? arr.slice(0, current)
      .concat(arr.slice(current+1, newIndex+1))
      .concat(target)
      .concat(arr.slice(newIndex+1, arr.length))
    : arr.slice(0, newIndex)
      .concat(target)
      .concat(arr.slice(newIndex, current))
      .concat(arr.slice(current+1, arr.length));
};

const newLists = { date: '', screenId: 0, items: [{ duration: 15, name: '新しいアイテム' }] };

const DragAndDrop: React.FC<Props> = ({ allElements, setElements }: Props) => {
  const playlistRef = React.useRef<HTMLDivElement>(null);
  const onDragOverTrash = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);
  const onDrop = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!playlistRef.current) { return; }
    const targetScreenId = e.currentTarget.getAttribute('data-screenid');
    const targetDate = e.currentTarget.getAttribute('data-date');
    const scrollAmount = playlistRef.current.scrollTop;
    const playlistOffset = playlistRef.current.offsetTop;
    const netOffset = scrollAmount - (playlistOffset + TITLEHEIGHT + 32);
    const itemCount = allElements.find((e) => {
      return e.date === targetDate && e.screenId === Number(targetScreenId);
    })?.items?.length ?? 0;
    const targetIndex = findIndex(e.pageY, netOffset, itemCount);
    const srcScreenId = e.dataTransfer.getData('screenId');
    const srcDate = e.dataTransfer.getData('date');
    const srcIndex = Number(e.dataTransfer.getData('index'));
    const dragType = e.dataTransfer.getData('dragType');

    const original = allElements.map(e => e);
    const newState = original.map((list) => {
      if (srcDate === targetDate && srcScreenId === targetScreenId) {
        const newIndex = targetIndex === itemCount ? targetIndex-1 : targetIndex;
        if (srcIndex === newIndex) { return list; }
        if (list.date === targetDate && list.screenId === Number(targetScreenId)) {
          const newItems = reOrderElements(list.items, Number(srcIndex), newIndex);
          return { ...list, items: newItems };
        }
        return list;
      }
      if (list.date === targetDate && list.screenId === Number(targetScreenId)) {
        let src = allElements.find(ef => ef.date === srcDate && ef.screenId === Number(srcScreenId));
        if (!src && dragType === 'new') {
          src = newLists;
        }
        const newItems = src ?
          list.items.slice(0, targetIndex)
            .concat({ ...src.items[srcIndex] })
            .concat(list.items.slice(targetIndex, list.items.length))
          : list.items;
        return { ...list, items: newItems };
      }
      if (list.date === srcDate && list.screenId === Number(srcScreenId)) {
        const newItems = list.items.filter((_, i) => i !== srcIndex);
        return { ...list, items: newItems };
      }
      return list;
    });
    setElements(newState);
  }, [allElements, setElements]);

  const onDragStartNew = React.useCallback((e: React.DragEvent) => {
    e.dataTransfer.setData('date', '');
    e.dataTransfer.setData('screenId', '');
    e.dataTransfer.setData('index', '0');
    e.dataTransfer.setData('dragType', 'new');
  }, []);

  const onDragEnd = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);
  return (
    <div className="flex">
      <div ref={playlistRef} className="outside-wrapper">
        <div
          className="inner-wrapper">
          {allElements.map((list, ii) => {
            return (
              <Playlist
                key={ii}
                list={list}
                onDrop={onDrop}
                allElements={allElements}
                setElements={setElements}
              />
            );
          })}
        </div>
      </div>
      <div className="new-elements">
        <div
          className="element-cell"
          style={{ background: 'blue' }}
          data-name={'newData'}
          draggable
          onDragEnd={onDragEnd}
          onDragStart={onDragStartNew}>
          <p>{'newDate'}</p>
        </div>
      </div>
      <div
        onDragOver={onDragOverTrash}
        onDrop={onDrop}
        onDragEnter={() => { console.log('SS'); }}
        className="trashbox">
        Trash
      </div>
      <style jsx>{`
        .flex{
          display: flex;
        }
        .outside-wrapper {
          margin: 32px;
          padding: 16px;
          box-shadow:0px 0px 8px 3px #ccc inset;
          overflow: scroll;
          width: 80%;
          height: 700px;
        }
        .inner-wrapper {
          display: flex;
          height: 1000px;
        }
        .trashbox {
          width: 150px;
          height: 150px;
          line-height: 150px;
          margin: 32px;
          background: rgba(255, 0, 0, .3);
          text-align: center;
        }
      `}</style>
    </div>
  );

};

export default DragAndDrop;

// import { useDefault } from 'react-use';

// const Demo = () => {
//   const initialUser = { name: 'Marshall' };
//   const defaultUser = { name: 'Mathers' };
//   const [user, setUser] = useDefault(defaultUser, initialUser);

//   return (
//     <div>
//       <div>User: {user.name}</div>
//       <input onChange={e => setUser({ name: e.target.value })} />
//       <button onClick={() => setUser(null)}>set to null</button>
//     </div>
//   );
// };
