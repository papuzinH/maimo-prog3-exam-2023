import React from 'react';
import Image from 'next/image';
import styles from './ImgWrapper.module.css';

const ImgWrapper = () => {
  return (
    <div className={styles['imgContainer']}>
      <Image
        src="/assets/alfjav.jpg"
        alt="Picture of the author"
        width={400}
        height={533}
      />
    </div>
  );
};

export default ImgWrapper;
