import React from 'react';
import Image from 'next/image';
import styles from './SingleShowInfo.module.css';
import parse from 'html-react-parser';

const SingleShowInfo = ({ show }) => {
  return (
    <section className={styles.singleShowInfoContainer}>
      {show.image && (
        <div className={styles.imageContainer}>
          <Image src={show.image.original} width={200} height={200} />
        </div>
      )}
      <h1>{show.name}</h1>
      <div className={styles.infoSingleShow}>
        <p>Status: {show.status}</p>
        <p>Language: {show.language}</p>
        {show.rating && <p>Rating: {show.rating.average}</p>}
      </div>
      Summary: {parse(show.summary)}
    </section>
  );
};

export default SingleShowInfo;
