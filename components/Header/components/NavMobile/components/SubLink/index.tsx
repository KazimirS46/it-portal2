import Link from 'next/link';
import { NavItemType } from '@/types/types';
import styles from './index.module.css';

interface IProps {
  props: NavItemType;
  close: () => void;
}

export const SubLink = ({ props, close }: IProps) => {
  const onClickBtn = () => {
    close();
  };

  return (
    <Link
      href={props.path!}
      className={styles.navLink}
      onClick={onClickBtn}>
      {props.title}
    </Link>
  );
};
