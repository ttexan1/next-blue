import React from 'react';

const DropZone: React.FC = () => {
  const onDragOver = React.useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);
  const onDrop = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    // console.log('dropped', e.dataTransfer);
  }, []);
  return (
    <div
      style={{ width: '200px', height: '200px', background: '#EEE' }}
      onDragOver={onDragOver}
      onDrop={onDrop}>
    DropArea
    </div>
  );
};

export default DropZone;
