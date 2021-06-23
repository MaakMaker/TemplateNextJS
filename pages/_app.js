import React from 'react';
import Head from 'next/head'
import withRedux from 'next-redux-wrapper';
import 'react-notifications/lib/notifications.css';
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../public/vendors/style";
import "../styles/style.css"
import "../firebaseConfig/index"

import initStore from '../redux/store';
import {Provider} from "react-redux";
import LocaleProvider from "../app/core/LocaleProvider";
import AppLayout from "../app/core/Layout";
import {ProvideAuth} from "../util/use-auth";

const Page = ({Component, pageProps, store}) => {

  return (
    <React.Fragment>
      <Head>
        <title>Wieldy- Admin Dashboard</title>
      </Head>
      <Provider store={store}>
        <LocaleProvider>
          <ProvideAuth>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </ProvideAuth>
        </LocaleProvider>
      </Provider>
    </React.Fragment>
  );
};

export default withRedux(initStore)(Page);

Page.getInitialProps = async ({Component, ctx}) => {

  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};
