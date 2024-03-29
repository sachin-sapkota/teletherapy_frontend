import Head from 'next/head';
import Herosection from '../components/Herosection/herosection';
import Layout from '../components/Layout/Layout';
import Potential from '../components/Potential/potential';
import Process from '../components/Process/process';
import Services from '../components/Services';
import ServiceExplain from '../components/Services/expain';
import Trust from '../components/Trust/trust';

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-black mt-[60px] text-white flex flex-col ">
        <Herosection />
        <Potential />
        <Trust />
        <Process />
        <Services />
        <ServiceExplain />
      </div>
    </Layout>
  );
}
