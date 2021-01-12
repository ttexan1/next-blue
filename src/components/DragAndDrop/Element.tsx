import * as React from 'react';
import Image from 'next/image';

import { ElementFactor, CELLHEIGHT, CELLMARGIN } from 'src/hooks/usePlaylist';

type Props = {
  name: string;
  date: string;
  index: number;
  screenId: number;
  allElements: ElementFactor[];
  setElements: React.Dispatch<React.SetStateAction<ElementFactor[]>>;
};

const imageUrls = [
  'https://media.dooh.geniee.jp/mediafiles-staging/natives/01EH1PD60FCC3TF40ZMRT5P8JV',
  'https://media.dooh.geniee.jp/mediafiles-staging/natives/01EGFW774W1WPH3SB9SNQ182T0',
  'https://media.dooh.geniee.jp/mediafiles-staging/natives/01EHBM2RRYY4V2VVCMW57BC6B9',
  'https://media.dooh.geniee.jp/mediafiles-staging/natives/01EKCGENHM7K07XM6PKG5GANVT',
  'https://media.dooh.geniee.jp/mediafiles-staging/natives/01ER3T4791H7K5118J2M220F33',
  'https://media.dooh.geniee.jp/mediafiles-staging/thumbnails/01EG0DSTHTJKZJHW0FH1Q6AK57',
  'https://media.dooh.geniee.jp/mediafiles-staging/thumbnails/01EH6QNMKD8C9WGGZ2QZVNDC7Y',
  'https://media.dooh.geniee.jp/mediafiles-staging/thumbnails/01EM3RS2QG20F7DK2588G61HTY',
  'https://media.dooh.geniee.jp/mediafiles-staging/thumbnails/01EN2PX4S8YSFR1QQE2TF8MJ0F',
  'https://media.dooh.geniee.jp/mediafiles-staging/thumbnails/187',
];

const Element = React.memo(({
  name,
  date,
  index,
  screenId,
}: Props) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const onDragStart = React.useCallback((e: React.DragEvent) => {
    e.dataTransfer.setData('date', date);
    e.dataTransfer.setData('screenId', String(screenId));
    e.dataTransfer.setData('index', String(index));
    setIsDragging(true);
  }, [date, index, screenId]);

  const onDragEnd = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);
  // const [currenImgUrl, setImgUrl] = React.useState(imageUrls[0]);
  return (
    <>
      <div
        className="element-cell"
        data-name={name}
        data-date={date}
        draggable
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}>
        <p>{name}</p>
        <Image
          src={imageUrls[0]}
          layout={'intrinsic'}
          width={80}
          height={80}
        />
      </div>

      <style jsx>{`
        .element-cell {
          color: black;
          border: 1px solid black;
          line-height: 12px;
          margin: 8px;
          border-radius: 4px;
          border: 1px solid #AAAAAA;
          margin: ${CELLMARGIN}px;
          padding: 8px;
          height: ${CELLHEIGHT}px;
          opacity: ${isDragging ? 0.01 : 1};
        }
        p {
          margin: 8px;
        }
      `}</style>
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
});

export default Element;
