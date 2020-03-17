import Link from 'next/link';
import style from '@/scss/home.scss';

interface propsType {
  item: any;
  [random: string]: any;
}

const ListItem = (props: propsType) => {
  const { item } = props;
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
            <a>
              更多
              <img src={'./static/home/arror-right.png'} alt="" />
            </a>
          </Link>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default ListItem;
