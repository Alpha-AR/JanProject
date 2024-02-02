import React from 'react';
// import Link from 'next/link';
import { styles } from './style.js'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        Copyright LinkedIn {new Date().getFullYear()}. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
