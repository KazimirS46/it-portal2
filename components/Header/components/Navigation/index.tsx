'use client';

import { useEffect, useState } from 'react';
import { NavDesktop } from '../NavDesktop';
import { NavMobile } from '../NavMobile';
import { NavItemType } from '@/types/types';
import blockBody from '@/utils/blockBody';
import styles from './index.module.css';

interface IProps {
  props: NavItemType[];
}

export const Navigation = ({ props }: IProps) => {
  const [open, setOpen] = useState(false);

  const overlayToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    blockBody();
  }, []);

  return (
    <>
      <NavMobile props={props} toggle={overlayToggle} />

      <NavDesktop props={props} />

      {open && <div className={styles.overlay}></div>}
    </>
  );
};
