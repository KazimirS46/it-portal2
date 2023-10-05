'use client';

import Image from 'next/image';
import { useResize } from '../../../../hooks/useResize';
import styles from './index.module.css';
import NavBar from '../NavBar';
import navList from '../../navlist.json';
import { MenuToggleContext } from '../..';
import { useContext } from 'react';

export default function Navigation() {
  const isMobile = useResize();
  const { navIsOpen } = useContext<any>(MenuToggleContext);

  return (
    <div
      className={
        !isMobile
          ? styles.container
          : navIsOpen
          ? styles.containerOpen
          : styles.containerClose
      }>
      <div className={styles.separatop}></div>
      <NavBar navList={navList} />
      <button type='button' className={styles.loginBtn}>
        <span>Log In</span>
        <Image
          alt=''
          src={'/icons/loginIcon.svg'}
          width={25}
          height={25}
          className={styles.loginImg}
        />
      </button>
    </div>
  );
}
