'use client';
import { useEffect } from 'react';
import styles from './index.module.css';

interface IProps {
  state: boolean;
  toggle: any;
}

export default function MenuButton({ state, toggle }: IProps) {
  const open = state && styles.buttonOpen;

  useEffect(() => {
    console.log('buttonOpen', open);
  }, [open]);

  return (
    <button className={`${styles.button} ${open}`} onClick={toggle}>
      <span>Click</span>
    </button>
  );
}
