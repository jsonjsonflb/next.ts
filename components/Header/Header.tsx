import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navList: any[] = [
  { title: '网站首页', url: '/' },
  { title: 'VIP推手', url: '/vippush' },
  { title: '实力推手', url: '/spush' },
  { title: '今日赛程', url: '/1' },
  { title: '盘口分析', url: '/2' },
  { title: '新闻详情', url: '/3' }
];

export default function Header(props: any) {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
                    <a
                      className={item.url === router.pathname ? 'a_active' : ''}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className={'login_wrap'}>
              <div className={'login_inner'}>
                <div>
                  <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="账号"
                  />
                </div>
                <div>
                  <input
                    value={password}
                    type={'password'}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="密码"
                  />
                  <span>忘记？</span>
                </div>
                <div className={'btn_wrap'}>
                  <button className={'login_btn'}>登录</button>
                  <button className={'register_btn'}>注册</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header_wrap {
          position: relative;
        }

        .inner_wrap {
          position: fixed;
          top: 0;
          width: 100%;
          height: 120px;
          z-index: 99;
        }
        .opacity_bg {
          position: absolute;
          height: 100%;
          width: 100%;
          opacity: 0.8;
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
          font-size: 16px;
          font-weight: bold;
        }
        .nav_r_ul li .a_active {
          color: #d11d19;
        }
        .login_wrap {
          flex: 1;
          padding-left: 20px;
        }

        .login_inner {
          display: flex;
          align-items: center;
          height: 120px;
        }

        .login_inner > div {
          position: relative;
          border-radius: 3px;
          margin-left: 10px;
          background: #fff url('./static/home/zhanghu.png') no-repeat 6px center;
        }

        .login_inner > div > span {
          font-size: 12px;
          position: absolute;
          top: 4px;
          right: 0;
          cursor: pointer;
        }

        .login_inner input {
          width: 75px;
          height: 25px;
          border: none;
          outline: none;
          background-color: transparent;
          padding-left: 25px;
          font-size: 12px;
        }
        .login_inner > .btn_wrap {
          background: transparent;
        }

        .btn_wrap button {
          width: 50px;
          height: 25px;
          border-radius: 3px;
          border: 1px solid #cc0601;
          outline: none;
          font-size: 12px;
          cursor: pointer;
        }
        .login_btn {
          background-color: #cc0601;
          color: #fff;
        }
        .register_btn {
          color: #cc0601;
          margin-left: 10px;
          background: transparent;
        }
      `}</style>
    </div>
  );
}
