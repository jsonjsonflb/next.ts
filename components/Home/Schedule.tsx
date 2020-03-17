import React, { useState } from 'react';
import style from '@/scss/home.scss';

const list: any[] = [
  { title: '全部' },
  { title: '足球' },
  { title: '篮球' },
  { title: 'NBA' }
];

const data: any[] = [
  {
    time: '03-12 04:00',
    typeIcon: '/static/home/football.png',
    cup: '阿根廷呗',
    cupIcon: '/static/home/cupIcon.png',
    team1: '发射点发射点',
    team1Icon: '/static/home/bs.png',
    team2: '受到广泛豆腐干就',
    team2Icon: '/static/home/bs.png'
  },
  {
    time: '03-12 04:00',
    typeIcon: '/static/home/football.png',
    cup: '阿根廷呗',
    cupIcon: '/static/home/cupIcon.png',
    team1: '发射点发射点',
    team1Icon: '/static/home/bs.png',
    team2: '受到广泛豆腐干就',
    team2Icon: '/static/home/bs.png'
  },
  {
    time: '03-12 04:00',
    typeIcon: '/static/home/football.png',
    cup: '阿根廷呗',
    cupIcon: '/static/home/cupIcon.png',
    team1: '发射点发射点',
    team1Icon: '/static/home/bs.png',
    team2: '受到广泛豆腐干就',
    team2Icon: '/static/home/bs.png'
  },
  {
    time: '03-12 04:00',
    typeIcon: '/static/home/football.png',
    cup: '阿根廷呗',
    cupIcon: '/static/home/cupIcon.png',
    team1: '发射点发射点',
    team1Icon: '/static/home/bs.png',
    team2: '受到广泛豆腐干就',
    team2Icon: '/static/home/bs.png'
  },
  {
    time: '03-12 04:00',
    typeIcon: '/static/home/football.png',
    cup: '阿根廷呗',
    cupIcon: '/static/home/cupIcon.png',
    team1: '发射点发射点',
    team1Icon: '/static/home/bs.png',
    team2: '受到广泛豆腐干就',
    team2Icon: '/static/home/bs.png'
  },
  {
    time: '03-12 04:00',
    typeIcon: '/static/home/football.png',
    cup: '阿根廷呗',
    cupIcon: '/static/home/cupIcon.png',
    team1: '发射点发射点',
    team1Icon: '/static/home/bs.png',
    team2: '受到广泛豆腐干就',
    team2Icon: '/static/home/bs.png'
  },
  {
    time: '03-12 04:00',
    typeIcon: '/static/home/football.png',
    cup: '阿根廷呗',
    cupIcon: '/static/home/cupIcon.png',
    team1: '发射点发射点',
    team1Icon: '/static/home/bs.png',
    team2: '受到广泛豆腐干就',
    team2Icon: '/static/home/bs.png'
  }
];

const Schedule = (props: any) => {
  const [index, setIndex] = useState(0);

  const handleTime = (str: string): string[] => {
    return str.split(/\s/);
  };

  return (
    <div className={style.schedule_wrap}>
      <ul className={style.nav_wrap}>
        {list.map((item, i) => (
          <li
            onClick={() => setIndex(i)}
            className={index === i ? style.active : ''}
            key={i}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className={style.content}>
        <ul className={style.content_list}>
          {data.map((item, index) => (
            <li key={index}>
              <div className={style.time}>
                <img src={item.typeIcon} alt="" />
                <div>
                  <p>{handleTime(item.time)[0]}</p>
                  <p>{handleTime(item.time)[1]}</p>
                </div>
              </div>
              <div className={style.team}>
                <img src={item.cupIcon} alt="" />
                <p>{item.cup}</p>
              </div>
              <div className={style.line}>
                <div className={style.team1}>
                  <img src={item.team1Icon} alt="" />
                  {item.team1}
                </div>
                <p className={style.vs}>VS</p>
                <div className={style.team2}>
                  {item.team2}
                  <img src={item.team2Icon} alt="" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
