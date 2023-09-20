'use client';

import { createContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';
import MenuButton from './components/menuButton';
import Navigation from './components/Navigation';
import NavOverlay from './components/NavOverlay';

export const MenuToggleContext = createContext({});

export function Header() {
  const [navIsOpen, setIsOpen] = useState<boolean>(false);
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
          <Navigation />
        </MenuToggleContext.Provider>
      </div>
      {navIsOpen && <NavOverlay />}
    </header>
  );
}
