import Link from 'next/link';
import { Button } from 'antd';

const navList: any[] = [
  { title: '网站首页', url: '/' },
  { title: 'VIP推手', url: '/about' },
  { title: '实力推手', url: '/' },
  { title: '今日赛程', url: '/' },
  { title: '盘口分析', url: '/' },
  { title: '新闻详情', url: '/' }
];

export default function Header() {
  return (
    <div className={'header_wrap'}>
      <div className={'inner_wrap'}>
        <div className={'opacity_bg'} />
        <div className={'nav_wrap'}>
          <div className={'logo'}>logo</div>
          <div className={'nav_r'}>
            <ul className={'nav_r_ul'}>
              {navList.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} as={item.url}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className={'login_wrap'}>
              <Button>llll</Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header_wrap {
          height: 120px;
          position: relative;
        }

        .inner_wrap {
          position: fixed;
          top: 0;
          width: 100%;
          height: 120px;
        }
        .opacity_bg {
          position: absolute;
          height: 100%;
          width: 100%;
          opacity: 0.3;
          z-index: -1;
          background-color: #fff;
        }
        .nav_wrap {
          display: flex;
          height: 120px;
          width: 1440px;
          margin: 0 auto;
        }
        .logo {
          width: 260px;
          height: 120px;
        }
        .nav_r {
          flex: 1;
          display: flex;
        }
        .nav_r_ul {
          width: 800px;
          height: 120px;
          display: flex;
          justify-content: space-around;
        }
        .nav_r_ul li {
          line-height: 120px;
        }
        .nav_r_ul li a {
          color: #222;
          display: block;
          width: 100%;
          height: 100%;
          line-height: 120px;
          text-decoration: none;
          padding: 0 15px;
          text-align: center;
        }
        .login_wrap {
          flex: 1;
          height: 120px;
        }
      `}</style>
    </div>
  );
}

// 设置别名
// config.resolve.alias['@pages'] = resolve('pages');
// config.resolve.alias['@'] = resolve('./');
// config.resolve.alias['@static'] = resolve('public/static');
