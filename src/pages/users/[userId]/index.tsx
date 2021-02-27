import * as React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps<{ name: string, userId: number }> = async ctx => {
  const name = 'AAA';
  const userId = Number(ctx.query.userId);
  return { props: { name, userId } };
};

const User = ({ name, userId }: { name: string, userId: number }): React.ReactElement => {
  const router = useRouter();
  const callback = React.useCallback(() => {
  }, []);
  return (
    <>
      !AAAAAAAAA
      <Child ss={'SS文字列'} />
      <button onClick={() => router.back()}>戻る</button>
      {userId}{name}
      <button onClick={callback}>!!!</button>
    </>
  );
};

export default User;

const Child = ({ ss }: { ss: string }) => {
  return (
    <>
      <p>{ss}</p>
    </>
  );
};
