'use client';

import Link from 'next/link';
import Image from 'next/image';
import { createContext, useState } from 'react';
import styles from './index.module.css';
import MenuButton from './components/menuButton';
import Navigation from './components/Navigation';

export const MenuToggleContext = createContext({});

export function Header() {
  const [navIsOpen, setIsOpen] = useState(false);
  const navMenuToggle = () => {
    setIsOpen(!navIsOpen);
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
          <MenuButton navOpen={navIsOpen} toggle={navMenuToggle} />
        </div>

        <MenuToggleContext.Provider value={{ navIsOpen, setIsOpen }}>
          <Navigation
            props={{ navIsOpen: navIsOpen, navMenuToggle: navMenuToggle }}
          />
        </MenuToggleContext.Provider>
      </div>
      <div
        className={navIsOpen ? styles.overlayOpen : styles.overlayClose}></div>
    </header>
  );
}
