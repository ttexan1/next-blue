import * as React from 'react';
import Image from 'next/image';
type Props = {
  name: string;
  date: string;
  index: number;
  onListDragStart: (e: React.DragEvent) => void;
  onListDragEnd: (e: React.DragEvent) => void;
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
  onListDragStart,
  onListDragEnd,
}: Props) => {
  const onDragStart = React.useCallback((e: React.DragEvent) => {
    e.dataTransfer.setData('name', name);
    onListDragStart(e);
    // console.log(name)
  }, [onListDragStart, name]);
  const onDragLeave = React.useCallback((e: React.DragEvent) => {
    console.log('leave', e.dataTransfer.getData('name'));
  }, []);
  // const onDragOver = React.useCallback((e: React.DragEvent) => {
  //   console.log("over", e)
  // }, [])
  const onDragEnd = React.useCallback((e: React.DragEvent) => {
    e.dataTransfer.setData('name', 'aaaa');
    console.log('直接', e.dataTransfer.getData('name'));
    onListDragEnd(e);
  }, [onListDragEnd]);

  const onDrop = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    console.log('drop area', e.dataTransfer);
  }, []);

  // const [currenImgUrl, setImgUrl] = React.useState(imageUrls[0]);
  return (
    <>
      <div
        onDrop={onDrop}>
        testarea
      </div>
      <div
        style={boxStyle}
        draggable
        onDrop={onDrop}
        onDragStart={onDragStart}
        onDragLeave={onDragLeave}
        // onDragOver={onDragOver}
        onDragEnd={onDragEnd}>
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
