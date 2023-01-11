import Head from 'next/head';
import Image from 'next/image';
import Herosection from '../components/Herosection/herosection';
// import styles from '../styles/Home.module.css';
// import Header from '../components/header/header';
import Layout from '../components/Layout/Layout';
import Potential from '../components/Potential/potential';
import Process from '../components/Process/process';
import Services from '../components/Services';
import ServiceExplain from '../components/Services/expain';
import Trust from '../components/Trust/trust';

export default function Home() {
  return (
    <Layout className="">
      <div className="bg-black mt-[60px] text-white">
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
