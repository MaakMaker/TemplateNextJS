import Head from 'next/head';
import asyncComponent from "../../util/asyncComponent";
import React from "react";

const Todo = asyncComponent(() => import('../../routes/inbuiltApps/Todo'));

const TodoPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Todos</title>
      </Head>
      <Todo/>
    </React.Fragment>
  );
}

export default TodoPage;
