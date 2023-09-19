'use client';
import styles from './index.module.css';

interface IProps {
  state: boolean;
  toggle: any;
}

export default function MenuButton({ state, toggle }: IProps) {
  const open = state && styles.buttonOpen;
  return (
    <button className={`${styles.button} ${open}`} onClick={toggle}>
      <span>Click</span>
    </button>
  );
}
