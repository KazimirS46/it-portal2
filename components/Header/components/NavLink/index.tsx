import Link from 'next/link';
import styles from './index.module.css';

interface IProps {
  path: string;
  title: string;
  toggle: () => void;
}

export default function NavLink({ path, title, toggle }: IProps) {
  return (
    <Link href={path} className={styles.navLink} onClick={toggle}>
      <span>{title}</span>
    </Link>
  );
}
