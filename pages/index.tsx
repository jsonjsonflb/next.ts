import Layout from '../components/MyLayout';
import { getHomeList } from '@/redux/actions/homeActions';
import ListItem from '@/components/Home/ListItem';
import PushHand from '@/components/Home/PushHand';
import Schedule from '@/components/Home/Schedule';
import Banner from '@/components/common/Banner/Banner';
import style from '@/scss/home.scss';
import { useEffect } from 'react';

// 排行榜
const rangking: any[] = [
  { title: '英格兰山羊', icon: '/static/home/rangking.png', num: '20%' },
  { title: '英格兰山羊', icon: '/static/home/rangking.png', num: '20%' },
  { title: '英格兰山羊', icon: '/static/home/rangking.png', num: '20%' },
  { title: '英格兰山羊', icon: '/static/home/rangking.png', num: '20%' }
];

// 信息栏
const infoList: any = [
  {
    title: 'VIP新手推荐',
    icon: '/static/home/shenqingchengweiVIP.png',
    desc: '不知道买什么？找我啊！VIP对1专业服务',
    url: '/'
  },
  {
    title: '实力推荐',
    icon: '/static/home/shili.png',
    desc: '买什么尽在我手，扫一扫就有',
    url: '/'
  },
  {
    title: '今日赛程',
    icon: '/static/home/saicheng.png',
    desc: '不知道买什么？找我啊！VIP对1专业服务',
    url: '/'
  }
];

const Index = (props: any) => {
  useEffect(() => {
    if (props.errors) {
      console.error(props.errors);
    }
  }, []);
  return (
    <Layout>
      <div className={style.warp}>
        <Banner />
        <section className={style.content_wrap}>
          <div className={style.ranking_wrap}>
            <div className={style.inner_wrap}>
              <div className={style.title}>人气胜率总榜</div>
              <ul className={style.content}>
                {rangking.map((item, index) => (
                  <li key={index}>
                    <div
                      style={{ backgroundImage: `url(${item.icon})` }}
                      className={style.position}
                    />
                    <div className={style.detail}>{item.title}</div>
                    <div className={style.num}>{item.num}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={style.content_r}>
            <ListItem item={infoList[0]}>
              <PushHand />
            </ListItem>
            <ListItem item={infoList[1]}>
              <PushHand />
            </ListItem>
            <ListItem item={infoList[2]}>
              <Schedule />
            </ListItem>
          </div>
        </section>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function({ store }) {
  let errors: any[] = [];
  try {
    await store.dispatch(getHomeList());
  } catch (error) {
    const errorItem = {
      message: error.message,
      url: error.config.url ? error.config.url : ''
    };
    errors.push(errorItem);
  }
  return { errors };
};

export default Index;
