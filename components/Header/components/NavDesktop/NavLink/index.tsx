import Link from 'next/link';
import { NavItemType } from '@/types/types';
import styles from './index.module.css';

interface IProps {
  props: NavItemType;
}

export const NavLink = ({ props }: IProps) => {
  return (
    <Link
      href={props.path!}
      className={styles.navLink}>
      {props.title}
    </Link>
  );
};
