'use client';
import styles from './index.module.css';

interface IProps {
  state: boolean;
  toggle: any;
}

export default function MenuButton({ state, toggle }: IProps) {
  return (
    <button className={styles.button} onClick={toggle}>
      <span>Click</span>
    </button>
  );
}
