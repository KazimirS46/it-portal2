import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Submenu } from '../NavigationBar';
import styles from './index.module.css';

type Props = {
  submenu: Submenu[];
};

export function NavigationSubMenu({ submenu }: Props) {
  const pathname = usePathname();

  return (
    <ul className={styles.subList}>
      {submenu.map((sub: Submenu) => {
        const isActive = pathname === sub.path;

        return (
          <li
            key={sub.id}
            className={isActive ? styles.subItemActive : styles.subItem}>
            <Link href={sub.path}>{sub.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
