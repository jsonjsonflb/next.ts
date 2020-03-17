import Link from 'next/link';

// 友情链接
const navList: any[] = [
  { title: '网站首页', url: '/' },
  { title: 'VIP推手', url: '/about' },
  { title: '直播直播', url: '/' },
  { title: '今日赛程', url: '/' },
  { title: 'NBA直播吧', url: '/' },
  { title: '新闻详情', url: '/' },
  { title: '新闻详情', url: '/' },
  { title: '新闻详情', url: '/' },
  { title: 'NBA直播高清', url: '/' },
  { title: '新闻详情', url: '/' },
  { title: '新闻详情', url: '/' },
  { title: '新闻详情', url: '/' }
];

// 联系方式
const concatList: any[] = [
  { title: '用户服务：123123116324@fcom' },
  { title: '用户服务：123123116324@fcom' },
  { title: '用户服务：123123116324@fcom' }
];

export default function Header() {
  return (
    <div className={'footer_wrap'}>
      <div className={'footer_inner'}>
        <div className={'content_l'}>
          <div className={'title'}>友情链接</div>
          <ul className={'content_left'}>
            {navList.map((item, index) => (
              <li key={index}>
                <Link href={item.url} as={item.url}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={'content_r'}>
          <div className={'content_r_u'}>
            <div className={'title'}>网站地图</div>
            <ul className={'content_r_map'}>
              {navList.slice(0, 4).map((item, index) => (
                <li key={index}>
                  <Link href={item.url} as={item.url}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={'content_r_d'}>
            <div className={'title'}>联系方式</div>
            <ul className={'conccat_list'}>
              {concatList.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer_wrap {
          height: 371px;
          position: relative;
          background: url('./static/home/footer_bg.png') no-repeat center center;
          background-size: cover;
          padding: 55px 0;
          box-sizing: border-box;
        }
        .footer_inner {
          width: 900px;
          height: 100%;
          margin: 0 auto;
          display: flex;
        }
        .content_l {
          width: 510px;
        }
        .title {
          padding-left: 50px;
          height: 50px;
          line-height: 50px;
          background-position: 6px 6px;
          background-size: 38px 38px;
          background-repeat: no-repeat;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
        }
        .content_left {
          padding-left: 35px;
          display: flex;
          flex-wrap: wrap;
        }
        .content_left li {
          padding: 0 15px;
          height: 30px;
        }
        a {
          color: rgba(255, 255, 255, 0.9);
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          line-height: 30px;
        }
        .content_r {
          flex: 1;
        }

        .content_r_map {
          display: flex;
          justify-content: space-between;
          padding-left: 50px;
        }
        .content_r_map li {
          width: 80px;
          height: 30px;
          line-height: 30px;
          border: 1px solid #fff;
          text-align: center;
        }
        .content_r_d .title {
          margin-top: 40px;
        }

        .conccat_list {
          padding-left: 50px;
        }
        .conccat_list li {
          color: #fff;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
