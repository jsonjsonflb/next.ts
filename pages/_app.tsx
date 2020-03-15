import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '@/redux/store';
import { AppProps } from 'next/app';
import './show/id.module.css';

function MyApp(props: AppProps) {
  //Page props that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
  const { Component, pageProps, store } = props as any;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async function(context: any) {
  const { Component, ctx } = context;
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  //Anything returned here can be accessed by the client
  return { pageProps };
};

// //makeStore function that returns a new store for every request
// const makeStore = () => store;

// //withRedux wrapper that passes the store to the App Component
export default withRedux(store)(MyApp);
