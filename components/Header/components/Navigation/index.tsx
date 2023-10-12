'use client';

import { NavDesktop } from '../NavDesktop';
import { NavMobile } from '../NavMobile';
import { useMatchMedia } from '@/hooks/use-match-media';
import { NavItemType } from '@/types/types';
import styles from './index.module.css';
import { useState } from 'react';

interface IProps {
  props: NavItemType[];
}

type DeviceList = { isMobile: boolean; isTablet: boolean; isDesktop: boolean };

export const Navigation = ({ props }: IProps) => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia() as DeviceList;
  const [open, setOpen] = useState(false);

  const overlayToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {(isDesktop || isTablet) && <NavDesktop props={props} />}
      {isMobile && <NavMobile props={props} toggle={overlayToggle} />}
      {open && <div className={styles.overlay}></div>}
    </>
  );
};
