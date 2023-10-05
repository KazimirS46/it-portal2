'use client';

import styles from './index.module.css';

interface IProps {
  navOpen: boolean;
  toggle: any;
}

export default function MenuButton({ navOpen, toggle }: IProps) {
  const open = navOpen && styles.buttonOpen;

  return (
    <button className={`${styles.button} ${open}`} onClick={toggle}>
      <span>Click</span>
    </button>
  );
}
