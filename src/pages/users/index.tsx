import * as React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import ReactDOM from 'react-dom';
import { GetServerSideProps } from 'next';

type Props = {
  name: string;
};

let now = 10;
export const getServerSideProps: GetServerSideProps<{ name: string }> = async () => {
  const name = 'AAA';
  // console.log('ToString      ', ReactDOMServer.renderToString(<Users name={name} />));
  // console.log('ToStaticMarkup', ReactDOMServer.renderToStaticMarkup(<Users name={name} />));
  // console.log('ToNodeStream  ', ReactDOMServer.renderToNodeStream(<Users name={name} />));
  // console.log('ToString      ', ReactDOMServer.renderToString(Users));
  // console.log('ToStaticMarkup', ReactDOMServer.renderToStaticMarkup(Users));
  // console.log('ToNodeStream  ', ReactDOMServer.renderToNodeStream(Users));
  // console.log('ToString      ', ReactDOM.render(<Users name={name} />, document.getElementById('root')));
  // console.log('ToStaticMarkup', ReactDOM.hydrate(<Users name={name} />));
  // console.log('ToNodeStream  ', ReactDOM.renderToNodeStream(<Users name={name} />));
  // now = 1;
  now = new Date().getTime();
  // console.log(now);
  // console.log('ToString      ', ReactDOMServer.renderToString(<Users name={name} />));
  return { props: { name } };
};

const Users = ({ name }: Props) => {
  const [count, setCount] = React.useState(10);
  // now = 0;
  return (
    <>
      <button onClick={() => setCount(c => c+1)}>CountUp</button>
      <p data-reactroot="ReactRoot">{count}</p>
      <p style={{ color: 'red' }}>{name}</p>
      <b>aaaaaaa</b>
      {(now % 2 === 0) && (
        <>
          <p>ABC</p>
          <p><a>DEF</a></p>
          <p><a>DEsF</a></p>
        </>
      )}
      {(now % 2 === 1) && (
        <>
          <p>ABC</p>
          <p><a>DEF</a></p>
          <p><a>DEqF</a></p>
          <p><a>DEF</a></p>
          <p><a>DEF</a></p>
          <p><a>DEF</a></p>
        </>
      )}
      <p>{now}</p>
    </>
  );
};

export default Users;
