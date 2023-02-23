import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import FeaturedShows from '../components/FeaturedShows/FeaturedShows';
import Search from '../components/Search/Search';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Examen Prog 3</title>
        <meta name="description" content="Welcome to the machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <FeaturedShows />
        <Search />
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by UMAI
        </a>
      </footer>
    </div>
  );
}
