import React from 'react';
import styles from './AboutInfo.module.css';

const AboutInfo = ({ elPapu }) => {
  return (
    <section className={styles.aboutusContainer}>
      <h1>{elPapu.name}</h1>
      <p>Edad: {elPapu.age}</p>
      <p>Año: {elPapu.year}</p>
      <p>Profesor: {elPapu.teacher}</p>
      <p>Universidad: {elPapu.university}</p>
      <p>Mensaje: {elPapu.message}</p>
    </section>
  );
};

export default AboutInfo;
