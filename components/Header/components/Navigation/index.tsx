'use client';

import { useState } from 'react';
import { NavDesktop } from '../NavDesktop';
import { NavMobile } from '../NavMobile';
import { NavItemType } from '@/types/types';
import { Overlay } from '../Overlay';

interface IProps {
  props: NavItemType[];
}

export const Navigation = ({ props }: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavMobile
        props={props}
        overOpen={() => setOpen(true)}
        overClose={() => setOpen(false)}
      />

      <NavDesktop props={props} />

      {open && (
        <Overlay
          overOpen={() => setOpen(true)}
          overClose={() => setOpen(false)}
        />
      )}
    </>
  );
};
