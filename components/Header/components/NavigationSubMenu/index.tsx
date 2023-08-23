import Link from 'next/link';
import { Submenu } from '../NavigationBar';
import styles from './index.module.css';

type Props = {
  submenu: Submenu[];
};

export function NavigationSubMenu({ submenu }: Props) {
  return (
    <ul className={styles.subList}>
      {submenu.map((sub: Submenu) => (
        <li key={sub.id} className={styles.subItem}>
          <Link href={sub.path}>{sub.title}</Link>
        </li>
      ))}
    </ul>
  );
}
