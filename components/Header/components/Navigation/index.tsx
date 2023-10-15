'use client';

import { useEffect, useState } from 'react';
import { NavDesktop } from '../NavDesktop';
import { NavMobile } from '../NavMobile';
import { NavItemType } from '@/types/types';
import styles from './index.module.css';
import blockBody from '@/utils/blockBody';

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
    // document.body.style.position = 'fixed';
    // document.body.style.top = `-${window.scrollY}px`;

    // return () => {
    //   const scrollY = document.body.style.top;
    //   document.body.style.position = '';
    //   document.body.style.top = '';
    //   window.scrollTo(0, parseInt(scrollY || '0') * -1);
    // };
  }, []);

  return (
    <>
      <NavMobile props={props} toggle={overlayToggle} />

      <NavDesktop props={props} />

      {open && <div className={styles.overlay}></div>}
    </>
  );
};
