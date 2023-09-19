'use client';

import Image from 'next/image';
import { useResize } from '../../../../hooks/useResize';
import styles from './index.module.css';
import NavBar from '../NavBar';
import navList from '../../navlist.json';

interface IProps {
  props: {
    isOpen: boolean;
    menuToggle: () => void;
  };
}

export default function Navigation({ props }: IProps) {
  const toggle = props.menuToggle;
  const width = useResize();

  return (
    <div
      className={
        !width
          ? styles.container
          : props.isOpen
          ? styles.containerOpen
          : styles.containerClose
      }>
      <div className={styles.separatop}></div>
      <NavBar props={{ toggle, navList }} />
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
