'use client';

import { useEffect } from 'react';
import styles from './index.module.css';

export default function NavOverlay() {
  useEffect(() => {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  return <div className={styles.overlayOpen}></div>;
}
