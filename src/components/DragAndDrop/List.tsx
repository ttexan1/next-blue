import * as React from 'react';
import Element from './Element';

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
    console.log('drag end', e.dataTransfer.getData('positions'));
  }, []);

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
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default DragAndDrop;
