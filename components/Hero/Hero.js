import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles['container-hero']}>
      <div className={styles.txt_wrapper}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">the machine</a>
        </h1>
        <p>Get into the metaverse</p>
      </div>

      <div className={styles['overlay']}></div>
    </div>
  );
};

export default Hero;
