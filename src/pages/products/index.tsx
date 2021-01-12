import * as React from 'react';
import ItemList from 'src/components/DragAndDrop';
import { ElementFactor } from 'src/hooks/usePlaylist';
import { playlistData } from 'src/mockdata/playlist';

const Product: React.FC = () => {
  const [elements, setElements] = React.useState<ElementFactor[]>(playlistData);
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
