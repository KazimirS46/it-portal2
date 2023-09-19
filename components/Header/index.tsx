'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './index.module.css';
import MenuButton from './components/menuButton';
import Navigation from './components/Navigation';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.controlBox}>
          <Link href={'/'} className={styles.logoLink}>
            <Image
              alt=''
              src={'/logo/mainLogo.png'}
              priority={false}
              width={41}
              height={45}
              className={styles.mainLogo}
            />
          </Link>
          <MenuButton state={isOpen} toggle={menuToggle} />
        </div>

        <Navigation props={{ isOpen: isOpen, menuToggle: menuToggle }} />
      </div>
      <div className={isOpen ? styles.overlayOpen : styles.overlayClose}></div>
    </header>
  );
}
