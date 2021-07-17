import * as React from 'react';

const heavyProcess = () => {
  for(let i =0; i<10000; i++) { continue; }
};

const GrandChild = ({ id }: {id:number}) => {
  console.log('GrandChild');
  return <p>childchild{id}</p>;
};
// const GrandChildM = React.memo(GrandChild);

const Child1 = React.memo(({ count, setCount }: {count:number, setCount: () => void}) => {
  console.log('render Child');
  heavyProcess();
  return (
    <>
      <button onClick={setCount}>button</button>
      <p>Child: {count}</p>
      <GrandChild id={1} />
    </>
  );
});

const Child2 = ({ count, setCount }: {count:number, setCount: () => void}) => {
  console.log('render Child2');
  heavyProcess();
  return (
    <>
      <button onClick={setCount}>button</button>
      <p>Child: {count}</p>
      <GrandChild id={2} />
    </>
  );
};

const Child3 = React.memo(({ count, setCount }: {count:number, setCount: () => void}) => {
  console.log('render Child3');
  heavyProcess();
  return (
    <>
      <button onClick={setCount}>button</button>
      <p>Child: {count}</p>
      <GrandChild id={3} />
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
        <button onClick={() => setCount1(count1 + 1)}>countup Parent count</button>
        <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
        <p>Parent: {count1}</p>
        <div className="child-box"><Child1 count={count2} setCount={setPlusCount} /></div>
        <div className="child-box"><Child2 count={count2} setCount={setPlusCount} /></div>
        <div className="child-box"><Child3 count={count2} setCount={() => setCount2(c => c+1)} /></div>
        <p>{counters.count1}</p>
        <p>{counters.count2}</p>
      </div>
      <style jsx>{`
        .child-box {
          border: 1px solid black;
          margin: 8px 0;
          padding: 8px;
        }
      `}</style>
    </>
  );
});

Parent.whyDidYouRender = true;

const Experiment = (): React.ReactElement => {
  const [objState, setObjState] = React.useState({ name: 'World' });
  React.useEffect(() => {
    setObjState({ name: 'World' });
  }, []);

  const [rootCounters, setRootCounters] = React.useState({ count1: 1, count2: 2 });

  return (
    <>
      <p>{objState.name}</p>
      <button onClick={() => setRootCounters({ count1: 1, count2: 2 })}>
        {'ボタン'}
      </button>
      <Parent
        counters={rootCounters}
      />
    </>
  );
};
Experiment.whyDidYouRender= true;

export default Experiment;
