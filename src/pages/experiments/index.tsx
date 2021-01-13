import * as React from 'react';

const Experiment = (): React.ReactElement => {
  // const [objState, setObjState] = React.useState({ name: 'World' });
  // React.useEffect(() => {
  //   setObjState({ name: 'World' });
  // }, []);

  const [counters, ccc] = React.useState({
    count1: 1,
    count2: 2,
  });

  return (
    <>
      <button onClick={() => ccc({
        count1: 1,
        count2: 2,
      })}>ボタン</button>
      <Parent
        counters={counters}
      />
    </>
  );
};
Experiment.whyDidYouRender= true;

export default Experiment;

const ChildChild = React.memo(({ id }: {id:number}) => {
  console.log('ChildChild');
  return <p>childchild{id}</p>;
});
// const ChildChild = ({ id }: {id:number}) => {
//   console.log('ChildChild');
//   return <p>childchild{id}</p>;
// };

const Child = React.memo(({ count, setCount }: {count:number, setCount: () => void}) => {
  console.log('render Child');
  let i = 0;
  while (i<1000) i++;
  return (
    <>
      <button onClick={setCount}>button</button>
      <p>Child: {count}</p>
      <ChildChild id={1} />
    </>
  );
});

const Child2 = ({ count, setCount }: {count:number, setCount: () => void}) => {
  console.log('render Child2');
  let i = 0;
  while (i<10000) i++;
  return (
    <>
      <button onClick={setCount}>button</button>
      <p>Child: {count}</p>
      <ChildChild id={2} />
    </>
  );
};

const Child3 = React.memo(({ count, setCount }: {count:number, setCount: () => void}) => {
  console.log('render Child3');
  let i = 0;
  while (i<1000) i++;
  return (
    <>
      <button onClick={setCount}>button</button>
      <p>Child: {count}</p>
      <ChildChild id={3} />
    </>
  );
});

const Parent = React.memo(({ counters }: {counters: {count1: number, count2: number}}) => {
  console.log('render App');
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const setPlusCount = React.useCallback(() => {
    setCount2(c => c+1);
  }, [setCount2]);
  return (
    <>
      <div style={{ width: '80%', margin: '20px' }}>
        <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
        <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
        <p>App: {count1}</p>
        <div><Child count={count2} setCount={setPlusCount} /></div>
        <div><Child2 count={count2} setCount={setPlusCount} /></div>
        <div><Child3 count={count2} setCount={() => setCount2(c => c+1)} /></div>
        {/* <Child count={count2} setCount={() => setCount2(c => c+1)} />
      <Child2 count={count2} setCount={() => setCount2(c => c+1)} />
      <Child3 count={count2} setCount={() => setCount2(c => c+1)} /> */}
        <p>{counters.count1}</p>
        <p>{counters.count2}</p>
      </div>
    </>
  );
});

Parent.whyDidYouRender = true;
