import { useEffect } from 'react';
import Layout from '../components/MyLayout';
import Link from 'next/link';
import { getHomeList } from '@/redux/actions/homeActions';
import style from '@/scss/home.scss';

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

const Index = props => {
  // 信息栏
  const itemList = (item: any) => {
    return (
      <div className={style.section_wrap}>
        <div className={style.section_title}>
          <div className={style.title_l}>
            <div className={style.icon}>
              <img src={item.icon} alt="" />
              <p>{item.title}</p>
            </div>

            <p>{item.desc}</p>
          </div>
          <div className={style.title_r}>
            <Link href={item.url} as={item.url}>
              <a>更多></a>
            </Link>
          </div>
        </div>
        <ul className={style.section_list}>
          {[1, 1, 1, 1, 1, 1].map((item, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Layout>
      <div className={style.warp}>
        <div className={style.banner}>
          <img src={'./static/home/banner1.png'} alt="" />
        </div>
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
            {itemList(infoList[0])}
            {itemList(infoList[1])}
            {itemList(infoList[2])}
          </div>
        </section>
      </div>
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
