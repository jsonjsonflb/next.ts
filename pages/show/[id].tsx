import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import style from './id.scss';
import './id.module.css';

const Show = (props: any) => (
  <Layout>
    <div className={style.wrap}>
      <img src={'/static/image/slider2.jpg'} alt="" />
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img src={props.show.image.medium} />
    </div>
  </Layout>
);

Show.getInitialProps = async function(context: any) {
  // 获取路由参数
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Show;
