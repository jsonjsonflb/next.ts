import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '@/redux/store';
import { AppProps } from 'next/app';
// import 'antd/dist/antd.css';

function MyApp(props: AppProps) {
  //Page props that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
  const { Component, pageProps, store } = props as any;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body,
          div,
          dl,
          dt,
          dd,
          ul,
          ol,
          li,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          pre,
          code,
          form,
          fieldset,
          legend,
          input,
          button,
          textarea,
          p,
          blockquote,
          th,
          td {
            margin: 0;
            padding: 0;
          }
          html,
          body {
            height: 100%;
          }
          body {
            background-color: #999;
            color: #555;
            font-size: 14px;
            font-family: Verdana, Arial, Helvetica, sans-serif;
          }
          td,
          th,
          caption {
            font-size: 14px;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: normal;
            font-size: 100%;
          }
          address,
          caption,
          cite,
          code,
          dfn,
          em,
          strong,
          th,
          var {
            font-style: normal;
            font-weight: normal;
          }
          a {
            color: #555;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          img {
            border: none;
          }
          ol,
          ul,
          li {
            list-style: none;
          }
          input,
          textarea,
          select,
          button {
            font: 14px Verdana, Helvetica, Arial, sans-serif;
          }
          table {
            border-collapse: collapse;
          }
          html {
            overflow-y: scroll;
          }

          .clearfix:after {
            content: '.';
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
          .clearfix {
            *zoom: 1;
          }
        `}
      </style>
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
