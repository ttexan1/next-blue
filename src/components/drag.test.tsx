import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DragAndDrop from 'src/components/DragAndDrop';
import { ElementFactor } from 'src/hooks/usePlaylist';

const Wrapper = () => {
  const [elements, setElements] = React.useState<ElementFactor[]>([
    { date: '1201', screenId: 1, items: [{ name: '要素1-1', duration: 1 }, { name: '要素1-2', duration: 30 }, { name: '要素1-3', duration: 15 }] },
    { date: '1202', screenId: 1, items: [{ name: '要素2-1', duration: 1 }, { name: '要素2-2', duration: 30 }, { name: '要素2-3', duration: 15 }] },
    { date: '1203', screenId: 1, items: [{ name: '要素3-1', duration: 1 }, { name: '要素3-2', duration: 30 }, { name: '要素3-3', duration: 15 }] },
    { date: '1204', screenId: 1, items: [{ name: '要素4-1', duration: 1 }, { name: '要素4-2', duration: 30 }, { name: '要素4-3', duration: 15 }] },
    { date: '1205', screenId: 1, items: [{ name: '要素5-1', duration: 1 }, { name: '要素5-2', duration: 30 }, { name: '要素5-3', duration: 15 }] },
    { date: '1206', screenId: 1, items: [{ name: '要素6-1', duration: 1 }, { name: '要素6-2', duration: 30 }, { name: '要素6-3', duration: 15 }] },
    { date: '1207', screenId: 1, items: [{ name: '要素7-1', duration: 1 }, { name: '要素7-2', duration: 30 }, { name: '要素7-3', duration: 15 }] },
    { date: '1208', screenId: 1, items: [{ name: '要素8-1', duration: 1 }, { name: '要素8-2', duration: 30 }, { name: '要素8-3', duration: 15 }] },
    { date: '1209', screenId: 1, items: [{ name: '要素9-1', duration: 1 }, { name: '要素9-2', duration: 30 }, { name: '要素9-3', duration: 15 }] },
    { date: '1210', screenId: 1, items: [{ name: '要素10-1', duration: 1 }, { name: '要素10-2', duration: 30 }, { name: '要素10-3', duration: 15 }] },
    { date: '1211', screenId: 1, items: [{ name: '要素11-1', duration: 1 }, { name: '要素11-2', duration: 30 }, { name: '要素11-3', duration: 15 }] },
    { date: '1212', screenId: 1, items: [{ name: '要素12-1', duration: 1 }, { name: '要素12-2', duration: 30 }, { name: '要素12-3', duration: 15 }] },
    { date: '1213', screenId: 1, items: [{ name: '要素13-1', duration: 1 }, { name: '要素13-2', duration: 30 }, { name: '要素13-3', duration: 15 }] },
    { date: '1214', screenId: 1, items: [{ name: '要素14-1', duration: 1 }, { name: '要素14-2', duration: 30 }, { name: '要素14-3', duration: 15 }] },
    { date: '1215', screenId: 1, items: [{ name: '要素15-1', duration: 1 }, { name: '要素15-2', duration: 30 }, { name: '要素15-3', duration: 15 }] },
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
    expect(screen.getByText('要素2-1')).toBeInTheDocument();
  });
});
