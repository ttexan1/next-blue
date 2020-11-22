import * as React from 'react';
import { GetServerSideProps } from 'next';


export const getServerSideProps: GetServerSideProps<{ name: string, userId: number }> = async ctx => {
  const name = "AAA"
  const userId = Number(ctx.query.userId);
  return { props: { name, userId } };
};


export default ({ name, userId }: { name: string, userId: number }) => {
  return <>{userId}{name}</>
}