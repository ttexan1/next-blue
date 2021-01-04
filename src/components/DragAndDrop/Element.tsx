import * as React from 'react';
import Image from 'next/image';

type ElementFactor = {
  name: string;
  date: string;
  index: number;
};

type Props = {
  name: string;
  date: string;
  index: number;
  allElements: ElementFactor[][];
  setElements: React.Dispatch<React.SetStateAction<ElementFactor[][]>>;
};

const boxStyle = {
  width: '100px',
  color: 'black',
  border: '1px solid black',
  lineHeight: '16px',
  margin: '8px',
};
const imageUrls = [
  'https://media.dooh.geniee.jp/mediafiles-staging/natives/01EGFW774W1WPH3SB9SNQ182T0',
  'https://media.dooh.geniee.jp/mediafiles-staging/natives/01EGG13GQFN1EH57Q134K40T3Y',
  'https://media.dooh.geniee.jp/mediafiles-staging/natives/01EH1PD60FCC3TF40ZMRT5P8JV',
  'https://media.dooh.geniee.jp/mediafiles-staging/natives/01EHBM2RRYY4V2VVCMW57BC6B9',
  'https://media.dooh.geniee.jp/mediafiles-staging/natives/01EKCGENHM7K07XM6PKG5GANVT',
  'https://media.dooh.geniee.jp/mediafiles-staging/natives/01ER3T4791H7K5118J2M220F33',
  'https://media.dooh.geniee.jp/mediafiles-staging/thumbnails/01EG0DSTHTJKZJHW0FH1Q6AK57',
  'https://media.dooh.geniee.jp/mediafiles-staging/thumbnails/01EH6QNMKD8C9WGGZ2QZVNDC7Y',
  'https://media.dooh.geniee.jp/mediafiles-staging/thumbnails/01EM3RS2QG20F7DK2588G61HTY',
  'https://media.dooh.geniee.jp/mediafiles-staging/thumbnails/01EN2PX4S8YSFR1QQE2TF8MJ0F',
  'https://media.dooh.geniee.jp/mediafiles-staging/thumbnails/187',
];

const Element = ({
  name,
  date,
  index,
  allElements,
  setElements,
}: Props) => {
  const onDragStart = React.useCallback((e: React.DragEvent) => {
    e.dataTransfer.setData('name', name);
    e.dataTransfer.setData('date', date);
    e.dataTransfer.setData('index', String(index));
  }, [name, date, index]);
  const onDragOver = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);
  const onDrop = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const targetDate = e.currentTarget.getAttribute('data-date');
    const targetIndex = e.currentTarget.getAttribute('data-index');
    const srcName = e.dataTransfer.getData('name');
    const srcIndex = e.dataTransfer.getData('index');
    const srcDate = e.dataTransfer.getData('date');
    if (srcDate === targetDate && srcIndex === targetIndex){
      return;
    }

    const original = allElements.map(e => e);
    const newState = original.map((lists) => {
      if (srcDate === targetDate) {
        if (lists[0]?.date === targetDate) {
          const s = lists[Number(srcIndex)-1];
          const t = lists[Number(targetIndex)-1];
          const editing = lists.map(e => e);
          editing[Number(targetIndex)-1] = { ...s, index: Number(targetIndex) };
          editing[Number(srcIndex)-1] = { ...t, index: Number(srcIndex) };
          return editing;
        }
        return lists;
      }
      return lists.reduce((acc, current) => {
        if (current.date ===  targetDate) {
          if (current.index === Number(targetIndex)){
            return [
              ...acc,
              { name: srcName, date: targetDate, index: current.index },
              { ...current, index: current.index+1 },
            ];
          }
          if (current.index > Number(targetIndex)) {
            return [...acc, { ...current, index: current.index+1 }];
          }
        }

        if (current.date === srcDate) {
          if (current.index === Number(srcIndex)){
            return acc;
          }
          if (current.index > Number(srcIndex)) {
            return [...acc, { ...current, index: current.index-1 }];
          }
        }
        return [...acc, current];
      }, [] as ElementFactor[]);
    });
    setElements(newState);
  }, [allElements, setElements]);

  // const [currenImgUrl, setImgUrl] = React.useState(imageUrls[0]);
  return (
    <>
      <div
        style={boxStyle}
        data-name={name}
        data-date={date}
        data-index={index}
        draggable
        onDrop={onDrop}
        onDragStart={onDragStart}
        onDragOver={onDragOver}>
        <p>{name}</p>
        <p>{date}</p>
        <p>{index}</p>
      </div>
      <Image
        src={imageUrls[0]}
        layout={'intrinsic'}
        width={100}
        height={100}
      />
      {/* <div>
        {imageUrls.map((url, i) => (
          <button
            style={{ width: '100px', height: '20px' }}
            onClick={() => setImgUrl(url)}
            key={url}>
            {i}
            {url.split('https://media.dooh.geniee.jp/mediafiles-staging')[1]}
          </button>
        ))}
      </div> */}
    </>
  );
};

export default Element;
