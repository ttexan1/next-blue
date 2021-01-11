import * as React from 'react';

import Element from './Element';
import { ElementFactor } from 'src/hooks/usePlaylist';

type Props = {
  allElements: ElementFactor[];
  list: ElementFactor;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  setElements: React.Dispatch<React.SetStateAction<ElementFactor[]>>;
};

const Playlist = ({
  onDrop,
  list,
  allElements,
  setElements,
}: Props) => {
  const [color, setColor] = React.useState('#FFFFFF');
  const onDragOver = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setColor('#99FFFF');
  }, []);
  const onDragLeave = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setColor('#FFFFFF');
  }, []);
  const onDrop_ = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    onDrop(e);
    setColor('#FFFFFF');
  }, [onDrop]);
  return (
    <div
      data-date={list.date}
      data-screenid={list.screenId}
      onDrop={onDrop_}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      className="playlist">
      <div className="title">
        <p>{list.date}</p>
        <p>スクリーン{list.screenId}</p>
      </div>
      <div
        className="contents">
        {list.items.map((elm, idx) => {
          return (
            <React.Fragment key={idx}>
              <Element
                key={elm.name + idx}
                name={elm.name}
                date={list.date}
                screenId={list.screenId}
                index={idx}
                allElements={allElements}
                setElements={setElements}
              />
            </React.Fragment>
          );
        })}
      </div>
      <style jsx>{`
        .playlist {
          border: 1px solid #777777;
          border-right: none;
          background: ${color};
        }
        .title {
          text-align: center;
          color: black;
          border: 1px solid black;
          line-height: 16px;
          margin: 8px;
          border-radius: 4px;
          border: 1px solid #AAAAAA;
          margin: 8px;
          height: 80px;
          padding: 8px;
        }
        .contents {
          width: 160px;
          text-align: center;
          heigt: 600px;
          line-height: 16px;
          margin: 4px;
        }
      `}</style>
    </div>
  );
};

export default Playlist;
