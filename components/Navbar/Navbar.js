import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { CartContext } from '../../contexts/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className={`card ${styles['container']}`}>
      <div className={styles['logo']}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </div>
      <div className={styles['navbar']}>Navbar</div>
      <div className={styles['social']}>Cart( {cart.length} )</div>
    </div>
  );
};

export default Navbar;
