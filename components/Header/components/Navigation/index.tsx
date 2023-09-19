'use client';

import Image from 'next/image';
import { useResize } from '../../../../hooks/useResize';
import styles from './index.module.css';
import NavBar from '../NavBar';
import navList from '../../navlist.json';

interface IProps {
  props: {
    navIsOpen: boolean;
    navMenuToggle: () => void;
  };
}

export default function Navigation({ props }: IProps) {
  const navMenuToggle = props.navMenuToggle;
  const isMobile = useResize();

  return (
    <div
      className={
        !isMobile
          ? styles.container
          : props.navIsOpen
          ? styles.containerOpen
          : styles.containerClose
      }>
      <div className={styles.separatop}></div>
      <NavBar props={{ navMenuToggle, navList }} />
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
