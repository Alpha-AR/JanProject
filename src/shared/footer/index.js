import React from 'react';
// import Link from 'next/link';
import { styles } from './style.js'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        Copyright JobBox 2024. All rights reserved
      </div>
      <div className={styles.footerLinks}>
        <a href="#" className={styles.footerLink}>Privacy Policy</a>
        <a href="#" className={styles.footerLink}>Terms & Condition</a>
      </div>
    </footer>
  );
};

export default Footer;
