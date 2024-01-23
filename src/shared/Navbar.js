import React from 'react';
import Link from 'next/link';
import logo from '../assets/images/linkedin.png';

import {styles} from './style.js';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <img src={logo.src} alt="Company Logo" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/listing" className={styles.link}>Jobs</Link>
        </div>
        <div className={styles.actions}>
        <Link href="/login" className={styles.link}> <button className={styles.btn}>Sign In / Register</button> </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
