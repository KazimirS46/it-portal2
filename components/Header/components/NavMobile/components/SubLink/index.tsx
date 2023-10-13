import Link from 'next/link';
import styles from './index.module.css';
import { NavItemType } from '@/types/types';

interface IProps {
  props: NavItemType;
  close: () => void;
  overlayClose: () => void;
}

export const SubLink = ({ props, close, overlayClose }: IProps) => {
  const onClickBtn = () => {
    close();
    overlayClose();
  };

  return (
    <Link href={props.path!} className={styles.navLink} onClick={onClickBtn}>
      {props.title}
    </Link>
  );
};
