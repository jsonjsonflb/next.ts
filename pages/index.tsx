import { NextPage } from 'next';
import Layout from '../components/MyLayout';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store';

const Home: NextPage = (props: any) => {
  const { Component, pageProps, store } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

Home.getInitialProps = async function(context: any) {
  const { Component, ctx } = context;
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  //Anything returned here can be accessed by the client
  return { pageProps };
};

export default Home;
