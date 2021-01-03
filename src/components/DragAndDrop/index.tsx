import * as React from 'react';
import DropZone from './DropZone';
// import Element from './Element';

import List from './List';

type ElementFactor = {
  name: string;
  date: string;
  index: number;
};

type Props = {
  allElements: ElementFactor[][];
  setElements: React.Dispatch<React.SetStateAction<ElementFactor[][]>>;
};

const DragAndDrop: React.FC<Props> = ({ allElements }: Props) => {
  // console.log(elements.length)
  return (
    <div style={{ display: 'block' }}>
      <div style={{ display: 'flex' }}>
        {allElements.map((list, ii) => {
          return (
            <List
              key={ii}
              list={list}
            />
          );
        })}
      </div>
      <DropZone />
    </div>
  );

};

export default DragAndDrop;
