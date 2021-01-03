import * as React from 'react';
import DragAndDrop from '../../components/DragAndDrop';

type ElementFactor = {
  name: string;
  date: string;
  index: number;
};

const Product: React.FC = () => {
  const [elements, setElements] = React.useState<ElementFactor[][]>([
    [{ name: '要素1-1', date: '1205', index: 1 }, { name: '要素1-2', date: '1205', index: 2 }, { name: '要素1-3', date: '1205', index: 3 }],
    [{ name: '要素2-1', date: '1206', index: 1 }, { name: '要素2-2', date: '1206', index: 2 }, { name: '要素2-3', date: '1206', index: 3 }],
    [{ name: '要素3-1', date: '1207', index: 1 }, { name: '要素3-2', date: '1207', index: 2 }, { name: '要素3-3', date: '1207', index: 3 }],
  ]);
  return (
    <>
      <DragAndDrop
        allElements={elements}
        setElements={setElements}
      />
    </>
  );
};

export default Product;
