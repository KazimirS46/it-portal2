import Image from 'next/image';
import { NavigationBar } from '../NavigationBar';

import logo from '../../../../public/icon/logoIcon.png';
import logInIcon from '../../../../public/icon/loginIcon.svg';
import styles from './index.module.css';

export default function NavTop() {
  return (
    <nav className={styles.navbar}>
      <Image
        className={styles.logo}
        priority={true}
        src={logo}
        width={41}
        height={45}
        alt='logo'
      />
      <NavigationBar />
      <Image src={logInIcon} alt='log in' />
    </nav>
  );
}
