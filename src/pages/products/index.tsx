import * as React from 'react';
import ItemList from 'src/components/DragAndDrop';
import { ElementFactor } from 'src/hooks/usePlaylist';

const Product: React.FC = () => {
  const [elements, setElements] = React.useState<ElementFactor[]>([
    { date: '1201', screenId: 1, items: [{ name: '要素1-1', duration: 10 }, { name: '要素1-2', duration: 30 }, { name: '要素1-3', duration: 15 }] },
    { date: '1201', screenId: 2, items: [{ name: '要素2-1', duration: 10 }, { name: '要素2-2', duration: 30 }, { name: '要素2-3', duration: 15 }] },
    { date: '1202', screenId: 1, items: [{ name: '要素3-1', duration: 10 }, { name: '要素3-2', duration: 30 }, { name: '要素3-3', duration: 15 }] },
    // { date: '1202', screenId: 2, items: [{ name: '要素4-1', duration: 10 }, { name: '要素4-2', duration: 30 }, { name: '要素4-3', duration: 15 }] },
    { date: '1202', screenId: 2, items: [{ name: '要素4-1', duration: 10 }, { name: '要素4-2', duration: 30 }, { name: '要素4-3', duration: 15 }, { name: '要素4-4', duration: 15 }] },
    { date: '1203', screenId: 1, items: [{ name: '要素5-1', duration: 10 }, { name: '要素5-2', duration: 30 }, { name: '要素5-3', duration: 15 }] },
    { date: '1203', screenId: 2, items: [{ name: '要素6-1', duration: 10 }, { name: '要素6-2', duration: 30 }, { name: '要素6-3', duration: 15 }] },
    { date: '1204', screenId: 1, items: [{ name: '要素7-1', duration: 10 }, { name: '要素7-2', duration: 30 }, { name: '要素7-3', duration: 15 }] },
    { date: '1204', screenId: 2, items: [{ name: '要素8-1', duration: 10 }, { name: '要素8-2', duration: 30 }, { name: '要素8-3', duration: 15 }] },
    { date: '1205', screenId: 1, items: [{ name: '要素9-1', duration: 10 }, { name: '要素9-2', duration: 30 }, { name: '要素9-3', duration: 15 }] },
    { date: '1205', screenId: 2, items: [{ name: '要素10-1', duration: 10 }, { name: '要素10-2', duration: 30 }, { name: '要素10-3', duration: 15 }] },
    { date: '1206', screenId: 1, items: [{ name: '要素11-1', duration: 10 }, { name: '要素11-2', duration: 30 }, { name: '要素11-3', duration: 15 }] },
    { date: '1206', screenId: 2, items: [{ name: '要素12-1', duration: 10 }, { name: '要素12-2', duration: 30 }, { name: '要素12-3', duration: 15 }] },
    { date: '1207', screenId: 1, items: [{ name: '要素13-1', duration: 10 }, { name: '要素13-2', duration: 30 }, { name: '要素13-3', duration: 15 }] },
    { date: '1207', screenId: 2, items: [{ name: '要素14-1', duration: 10 }, { name: '要素14-2', duration: 30 }, { name: '要素14-3', duration: 15 }] },
  ]);
  return (
    <>
      <ItemList
        allElements={elements}
        setElements={setElements}
      />
    </>
  );
};

export default Product;
