'use client';

import styles from './index.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IProps {
  path: string;
  title: string;
}

export default function SubList({ path, title }: IProps) {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <Link href={path} className={styles.link}>
      <span className={isActive ? styles.active : ''}>{title}</span>
    </Link>
  );
}
