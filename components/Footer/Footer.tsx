import Link from 'next/link';

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
    <div className={'footer_wrap'}>
      <div className={'footer_inner'}></div>

      <style jsx>{`
        .footer_wrap {
          height: 371px;
          position: relative;
          background-color: #fff;
        }
        .footer_inner {
          width: 1440px;
          height: 100%;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
