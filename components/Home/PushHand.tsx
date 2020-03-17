import QRCode from 'qrcode.react';
import style from '@/scss/home.scss';

const PushHand = () => {
  return (
    <ul className={style.section_list}>
      {[1, 1, 1, 1, 1, 1].map((item, index) => (
        <li key={index}>
          <div className={style.item_u}>
            <div className={style.awater_wrap}>
              <img className={style.avatar} src={''} alt="" />
              <div className={style.info_wrap}>
                <p className={style.name}>英格兰记者</p>
                <p className={style.detail}>
                  最近战绩：<span>DASD</span>
                </p>
              </div>
            </div>
            <div className={style.q_code}>
              <QRCode size={40} value={'http://baidu.com'} />
              <p>扫码了解更多</p>
            </div>
          </div>
          <div className={style.item_d}>
            <div className={style.time}>
              <span />
              18小时前来过
            </div>
            <div className={style.fat}>
              <img src={'./static/home/weibiaoti1.png'} alt="" />
              <span>命中率：80%</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PushHand;
