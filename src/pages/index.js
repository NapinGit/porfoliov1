import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/navbar'
import Footer from '@/components/Footer/footer'
import About from './ambroise';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';



const Home = () => {
  return (
    <>
      <Head>
        <title>Ambroise's Portfolio</title>
        <meta name="description" content="Ambroise's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='home-container'>
      <h1>Welcome.</h1>
      </div>
      {/* <div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div> */}
    </>
  );
};

export default Home;

