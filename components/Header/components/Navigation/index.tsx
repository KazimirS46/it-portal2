'use client';

import { NavDesktop } from '../NavDesktop';
import { useMatchMedia } from '@/hooks/use-match-media';
import { NavMobile } from '../NavMobile';
import { NavItemType } from '@/types/types';

interface IProps {
  props: NavItemType[];
}

type DeviceList = { isMobile: boolean; isTablet: boolean; isDesktop: boolean };

export const Navigation = ({ props }: IProps) => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia() as DeviceList;

  return (
    <>
      {(isDesktop || isTablet) && <NavDesktop props={props} />}
      {isMobile && <NavMobile />}
    </>
  );
};
