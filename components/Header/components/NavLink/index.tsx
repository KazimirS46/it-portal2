import Link from 'next/link';
import styles from './index.module.css';

interface IProps {
  path: string;
  title: string;
}

export default function NavLink({ path, title }: IProps) {
  return (
    <Link href={path} className={styles.navLink}>
      <span>{title}</span>
    </Link>
  );
}
