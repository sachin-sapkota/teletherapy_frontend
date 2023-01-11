import Header from '../Header/header';
import Footer from '../Footer/footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sachin Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full flex flex-col">
        <Header />
        <main className="   ">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
