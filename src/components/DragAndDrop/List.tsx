import * as React from 'react';
import Element from './Element';
import Image from 'next/image';

type ElementFactor = {
  name: string;
  date: string;
  index: number;
};

type Props = {
  list: ElementFactor[];
};

const dragLineStyle = {
  width: '120px',
  textAlign: 'center',
  heigt: '600px',
  backgroundColor: '#F7F7F7',
  border: '1px solid black',
  lineHeight: '16px',
  margin: '4px',
} as const;

// const getRandomInt = (max: number) => {
//   return Math.floor(Math.random() * Math.floor(max));
// };

const DragAndDrop: React.FC<Props> = ({ list }: Props) => {
  const onDragStart = React.useCallback((e: React.DragEvent) => {
    const nn = e.dataTransfer.getData('name');
    console.log(nn);
  }, []);
  const onListDragEnd = React.useCallback((e: React.DragEvent) => {
    console.log('drop', e.dataTransfer.getData('positions'));
  }, []);
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
  const [currenImgUrl, setImgUrl] = React.useState(imageUrls[0]);
  return (
    <>
      <div
        style={dragLineStyle}>
        {list.map((elm, idx) => {
          return (
            <React.Fragment key={elm.date + elm.index}>
              <Element
                key={elm.date + elm.index}
                name={elm.name}
                date={elm.date}
                index={idx}
                onListDragStart={onDragStart}
                onListDragEnd={onListDragEnd}
              />
              <Image
                src={currenImgUrl}
                layout={'intrinsic'}
                width={50}
                height={50}
              />
            </React.Fragment>
          );
        })}
      </div>
      <div>
        {imageUrls.map((url) => (
          <button
            style={{ width: '100px', height: '50px' }}
            onClick={() => setImgUrl(url)}
            key={url}>
            {url.split('https://media.dooh.geniee.jp/mediafiles-staging')[1]}
          </button>
        ))}
      </div>
    </>
  );
};

export default DragAndDrop;
