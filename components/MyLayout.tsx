import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout(props: any) {
  return (
    <div>
      <Header />
      <div className={'main_content'}>{props.children}</div>
      <Footer />
      <style jsx>
        {`
          .main_content {
            height: calc(100vh-120px);
          }
        `}
      </style>
    </div>
  );
}
