import * as React from 'react';

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
  return (
    <>
      <div
        style={boxStyle}
        draggable
        onDragStart={onDragStart}
        onDragLeave={onDragLeave}
        // onDragOver={onDragOver}
        onDragEnd={onDragEnd}>
        <p>{name}</p>
        <p>{date}</p>
        <p>{index}</p>
      </div>

    </>
  );
};

export default Element;
