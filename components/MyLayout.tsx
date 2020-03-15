import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout(props: any) {
  return (
    <div className={'main_content'}>
      <Header />
      <div>{props.children}</div>
      <Footer />
      <style jsx>
        {`
          .main_content {
            background: #fff url('./static/home/main_bg.png') no-repeat center
              top;
            background-size: contain;
          }
        `}
      </style>
    </div>
  );
}
