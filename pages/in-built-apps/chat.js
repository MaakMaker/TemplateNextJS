import Head from 'next/head';
import asyncComponent from "../../util/asyncComponent";
import "../../routes/inbuiltApps/Chat/index.css";
import React from "react";

const Chat = asyncComponent(() => import('../../routes/inbuiltApps/Chat'));

const ChatPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Chat</title>
      </Head>
      <Chat/>
    </React.Fragment>
  );
}

export default ChatPage;
