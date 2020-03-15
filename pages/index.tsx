import { useEffect } from 'react';
import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { useSelector, useDispatch } from 'react-redux';
import { getHomeList } from '@/redux/actions/homeActions';

const Index = props => {
  const { homeState } = useSelector((state: any) => ({
    homeState: state.home
  }));
  const dispatch = useDispatch();
  const { list = [] } = homeState;

  return (
    <Layout>
      <div className={'banner_warp'}></div>
    </Layout>
  );
};

Index.getInitialProps = async function({ store }) {
  try {
    await store.dispatch(getHomeList());
  } catch (error) {
    console.error(error);
  }
};

export default Index;
