import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DragAndDrop from 'src/components/DragAndDrop';

type ElementFactor = {
  name: string;
  date: string;
  index: number;
};

const Wrapper = () => {
  const [elements, setElements] = React.useState<ElementFactor[][]>([
    [{ name: '要素1-1', date: '1201', index: 1 }, { name: '要素1-2', date: '1201', index: 2 }, { name: '要素1-3', date: '1201', index: 3 }],
    [{ name: '要素2-1', date: '1202', index: 1 }, { name: '要素2-2', date: '1202', index: 2 }, { name: '要素2-3', date: '1202', index: 3 }],
    [{ name: '要素3-1', date: '1203', index: 1 }, { name: '要素3-2', date: '1203', index: 2 }, { name: '要素3-3', date: '1203', index: 3 }],
    [{ name: '要素4-1', date: '1204', index: 1 }, { name: '要素4-2', date: '1204', index: 2 }, { name: '要素4-3', date: '1204', index: 3 }],
    [{ name: '要素5-1', date: '1205', index: 1 }, { name: '要素5-2', date: '1205', index: 2 }, { name: '要素5-3', date: '1205', index: 3 }],
    [{ name: '要素6-1', date: '1206', index: 1 }, { name: '要素6-2', date: '1206', index: 2 }, { name: '要素6-3', date: '1206', index: 3 }],
    [{ name: '要素7-1', date: '1207', index: 1 }, { name: '要素7-2', date: '1207', index: 2 }, { name: '要素7-3', date: '1207', index: 3 }],
    [{ name: '要素8-1', date: '1208', index: 1 }, { name: '要素8-2', date: '1208', index: 2 }, { name: '要素8-3', date: '1208', index: 3 }],
    [{ name: '要素9-1', date: '1209', index: 1 }, { name: '要素9-2', date: '1209', index: 2 }, { name: '要素9-3', date: '1209', index: 3 }],
    [{ name: '要素10-1', date: '1210', index: 1 }, { name: '要素10-2', date: '1210', index: 2 }, { name: '要素10-3', date: '1210', index: 3 }],
    [{ name: '要素11-1', date: '1211', index: 1 }, { name: '要素11-2', date: '1211', index: 2 }, { name: '要素11-3', date: '1211', index: 3 }],
    [{ name: '要素12-1', date: '1212', index: 1 }, { name: '要素12-2', date: '1212', index: 2 }, { name: '要素12-3', date: '1212', index: 3 }],
    [{ name: '要素13-1', date: '1213', index: 1 }, { name: '要素13-2', date: '1213', index: 2 }, { name: '要素13-3', date: '1213', index: 3 }],
    [{ name: '要素14-1', date: '1214', index: 1 }, { name: '要素14-2', date: '1214', index: 2 }, { name: '要素14-3', date: '1214', index: 3 }],
    [{ name: '要素15-1', date: '1215', index: 1 }, { name: '要素15-2', date: '1215', index: 2 }, { name: '要素15-3', date: '1215', index: 3 }],
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

describe('DragAndDrop Component test', () => {
  it('can drag', () => {
    // const allElements = [
    //   [{ name: '要素1-1', date: '1205', index: 1 }, { name: '要素1-2', date: '1205', index: 2 }, { name: '要素1-3', date: '1205', index: 3 }],
    //   [{ name: '要素2-1', date: '1206', index: 1 }, { name: '要素2-2', date: '1206', index: 2 }, { name: '要素2-3', date: '1206', index: 3 }],
    //   [{ name: '要素3-1', date: '1207', index: 1 }, { name: '要素3-2', date: '1207', index: 2 }, { name: '要素3-3', date: '1207', index: 3 }],
    // ];
    // render(<DragAndDrop allElements={allElements} setElements={() => {}} />);
    render(<Wrapper />);
    expect(screen.getByText('要素1-12')).toBeInTheDocument();
  });
});
