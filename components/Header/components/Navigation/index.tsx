'use client';

import Image from 'next/image';
import { useResize } from '../../../../hooks/useResize';
import styles from './index.module.css';
import NavBar from '../NavBar';
import navList from '../../navlist.json';

interface IProps {
  state: boolean;
}

export default function Navigation({ state }: IProps) {
  const width = useResize();

  const mobileWidth = width < 426;

  return (
    <div
      className={
        !mobileWidth
          ? styles.container
          : state
          ? styles.containerOpen
          : styles.containerClose
      }>
      <div className={styles.separatop}></div>
      <NavBar>{navList}</NavBar>
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
