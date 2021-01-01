import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Index() {
  const [count, setCount] = React.useState(0);

  const onClickCount = React.useCallback(() => {
    setCount(c => c+1);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={onClickCount}>
          {count}
        </button>
        <Link
          href={`users/${count}`}>
          <a>Users</a>
        </Link>
        <Link
          href={`products`}>
          <a>Products</a>
        </Link>
        <Link
          href={`experiments`}>
          <a>Experiments</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};
