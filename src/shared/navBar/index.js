import React from 'react';
import Link from 'next/link';
import { LinkedinIcon } from '../../assets/images/index.js';
import { styles } from './style.js';
import Button from '../Button/index.js';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className='flex items-center justify-center'>

        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <Link href="/">
              <LinkedinIcon />
            </Link>
          </div>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>HOME</Link>
            <Link href="/jobs" className={styles.link}>JOBS</Link>
          </div>
        </div>
          <div>
            <Link href="/signin" className={styles.link}> <Button className={styles.btn} text='SIGN IN' /> </Link>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;