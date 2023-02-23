import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutInfo from '../components/AboutInfo/AboutInfo';

const about = () => {
  const elPapu = {
    name: "Lautaro Hudson",
    age: 24,
    year: 4,
    teacher: "Leandro Amaro",
    university: "Maimonides",
    message: "Exijo aprobación, la exijo, démela, AHORA"
  }
  return (
    <>
      <Navbar />
      <AboutInfo elPapu={elPapu} />
    </>
  );
};

export default about;
