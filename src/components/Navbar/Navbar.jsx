import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav}>
        <a href="#" className={styles.link}>Home</a>
        <a href="#" className={styles.link}>Twitter</a>
        <a href="#" className={styles.link}>Instagram</a>
        <a href="#" className={styles.link}>Contact</a>
        <a href="#" className={styles.bookCall}>Book a Call</a>
      </div>
    </nav>
  );
};

export default Navbar; 