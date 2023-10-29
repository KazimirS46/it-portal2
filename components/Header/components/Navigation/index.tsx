'use client';

import { useState } from 'react';
import { NavDesktop } from '../NavDesktop';
import { NavMobile } from '../NavMobile';
import { Overlay } from '../Overlay';

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const openOverlay = () => {
    setOpen(true);
  };

  const closeOverlay = () => {
    setOpen(false);
  };

  return (
    <>
      <NavMobile
        overOpen={openOverlay}
        overClose={closeOverlay}
      />

      <NavDesktop />

      {open && (
        <Overlay
          overOpen={openOverlay}
          overClose={closeOverlay}
        />
      )}
    </>
  );
};
