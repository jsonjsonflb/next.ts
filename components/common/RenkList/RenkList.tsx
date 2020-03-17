import React from 'react';
import style from './RenkList.scss';

const list: any[] = [
  {
    title: '内幕工作室',
    rate: '85%',
    win: '100',
    lose: '1',
    draw: '10'
  },
  {
    title: '内幕工作室',
    rate: '85%',
    win: '100',
    lose: '1',
    draw: '10'
  },
  {
    title: '内幕工作室',
    rate: '85%',
    win: '100',
    lose: '1',
    draw: '10'
  },
  {
    title: '内幕工作室',
    rate: '85%',
    win: '100',
    lose: '1',
    draw: '10'
  },
  {
    title: '内幕工作室',
    rate: '85%',
    win: '100',
    lose: '1',
    draw: '10'
  }
];

const RenkList = () => {
  return (
    <div className={style.renk_list}>
      <div className={style.renk_list_title}>高手风云榜</div>
      <ul className={style.list_wrap}>
        {list.map((item, index) => (
          <li key={index}>
            <div className={style.icon_wrap}>
              <span>{index + 1}</span>
            </div>
            <div className={style.head_wrap}>
              <img src="" className={style.head} alt="" />
              <div className={style.info}>
                <div className={style.info_u}>
                  <p className={style.title}>{item.title}</p>
                  <div className={style.arrow}>
                    <p>准确率</p>
                    <p>{item.rate}</p>
                  </div>
                </div>
                <div className={style.info_d}>
                  <p>
                    胜:
                    <span>{item.win}</span>
                  </p>
                  <p>
                    胜:
                    <span>{item.draw}</span>
                  </p>
                  <p>
                    胜:
                    <span>{item.lose}</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenkList;
