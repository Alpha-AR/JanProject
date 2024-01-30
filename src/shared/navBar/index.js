import React from 'react';
import Link from 'next/link';
import {LinkedinIcon} from '../../assets/images/index.js';
import {styles} from './style.js';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Link href="/">
          <LinkedinIcon/>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>HOME</Link>
          <Link href="/jobs" className={styles.link}>JOBS</Link>
        </div>
        <div>
        <Link href="/login" className={styles.link}> <button className={styles.btn}>SIGN IN</button> </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
