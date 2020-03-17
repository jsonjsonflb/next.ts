import React from 'react';
import style from './ComLayout.scss';

const ComLayout = (props: any) => {
  return (
    <div className={style.content_wrap}>
      <div className={style.left}>{props.rankList}</div>
      <div className={style.right}>
        <div>{props.content}</div>
      </div>
    </div>
  );
};

export default ComLayout;
