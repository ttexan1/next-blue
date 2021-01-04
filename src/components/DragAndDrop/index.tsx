import * as React from 'react';

import Element from './Element';

type ElementFactor = {
  name: string;
  date: string;
  index: number;
};

type Props = {
  allElements: ElementFactor[][];
  setElements: React.Dispatch<React.SetStateAction<ElementFactor[][]>>;
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

const DragAndDrop: React.FC<Props> = ({ allElements, setElements }: Props) => {
  return (
    <div style={{ display: 'block' }}>
      <Demo />
      <div style={{ display: 'flex' }}>
        {allElements.map((list, ii) => {
          return (
            <div
              key={ii}
              style={dragLineStyle}>
              {list.map((elm, idx) => {
                return (
                  <React.Fragment key={elm.date + idx}>
                    <Element
                      key={elm.date + idx}
                      name={elm.name}
                      date={elm.date}
                      index={elm.index}
                      allElements={allElements}
                      setElements={setElements}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );

};

export default DragAndDrop;

import { useDefault } from 'react-use';

const Demo = () => {
  const initialUser = { name: 'Marshall' };
  const defaultUser = { name: 'Mathers' };
  const [user, setUser] = useDefault(defaultUser, initialUser);

  return (
    <div>
      <div>User: {user.name}</div>
      <input onChange={e => setUser({ name: e.target.value })} />
      <button onClick={() => setUser(null)}>set to null</button>
    </div>
  );
};
