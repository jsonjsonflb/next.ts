import { useEffect } from 'react';
import { getHome } from '@/redux/actions/homeActions';
import Layout from '../components/MyLayout';
import { useDispatch } from 'react-redux';

function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHome());
  }, []);
  return (
    <Layout>
      <p>This is the about page</p>
      <h1>This is the about page</h1>
    </Layout>
  );
}

About.getInitialProps = async function({ store }) {
  try {
    await store.dispatch(getHome());
  } catch (error) {
    console.error(error);
  }
};

export default About;
