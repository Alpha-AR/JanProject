import React from 'react';
import Link from 'next/link';
import { linkedinIcon } from '../../assets/images';
import { styles } from './style.js';
import Button from '../Button/index.js';
import Image from '../Image/index.js';
import { logout } from '../../assets/images';

const Header = ({ text }) => {
  return (
    <nav className={styles.navbar}>
      <div className='flex items-center justify-center'>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <Link href="/">
              <Image
                image={linkedinIcon}
                className='w-28 h-10 object-contain'
                imageText='Company Icon'
              />
            </Link>
          </div>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>HOME</Link>
            <Link href="/jobs" className={styles.link}>JOBS</Link>
          </div>
        </div>
        <div>
          { text ? (
            <Link href="/SignIn">
              <img src={logout} />
              {/* <Button className={`${styles.btn} flex flex-row-reverse`} text={text} image= {{logout}} /> */}
            </Link>
          ) : (
            <Link href="/SignIn" className={styles.link}>
              <Button className={`${styles.btn} flex flex-row-reverse`} text="SIGN IN" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
