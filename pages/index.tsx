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
  useEffect(() => {
    dispatch(getHomeList());
  }, []);

  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
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
