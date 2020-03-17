import React from 'react';
import style from './Banner.scss';

const Banner = () => {
  return (
    <div>
      <div className={style.banner}>
        <img src={'./static/home/banner1.png'} alt="" />
      </div>
    </div>
  );
};

export default Banner;
