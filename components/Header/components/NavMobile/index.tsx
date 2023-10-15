import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { DropdownMenuButton } from './components/DropdownMenuButton';
import { MobileNavBar } from './components/MobileNavBar';
import { NavItemType } from '@/types/types';
import styles from './index.module.css';

interface IProps {
  props: NavItemType[];
  overOpen: () => void;
  overClose: () => void;
}

export const NavMobile = ({ props, overClose, overOpen }: IProps) => {
  const [navIsOpen, setIsOpen] = useState<boolean>(false);
  const navItem = props;

  const navMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  let startTouchY: number = 0;
  let endTouchY: number = 0;
  let startTouchX: number = 0;
  let endTouchX: number = 0;

  const touchStart = (event: TouchEvent) => {
    startTouchY = event.changedTouches[0].pageY;
    startTouchX = event.changedTouches[0].pageX;
  };

  const touchEnd = (event: TouchEvent) => {
    endTouchY = event.changedTouches[0].pageY;
    endTouchX = event.changedTouches[0].pageX;

    if (
      startTouchY < 200 &&
      Math.abs(endTouchX - startTouchX) < 40 &&
      endTouchY > startTouchY
    ) {
      setIsOpen((prev) => !prev);
    }

    if (
      startTouchY < 450 &&
      Math.abs(endTouchX - startTouchX) < 60 &&
      endTouchY < startTouchY
    ) {
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    navIsOpen && overOpen();
    !navIsOpen && overClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navIsOpen]);

  useEffect(() => {
    document.addEventListener('touchstart', touchStart);
    document.addEventListener('touchend', touchEnd);

    return () => {
      document.removeEventListener('touchstart', touchStart);
      document.removeEventListener('touchend', touchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.mobile}>
        <Link href={'/'} className={styles.logoLink}>
          <Image
            alt=''
            src={'/logo/mainLogo.png'}
            priority={false}
            width={41}
            height={45}
            className={styles.mainLogo}
          />
        </Link>

        <DropdownMenuButton isOpen={navIsOpen} toggle={navMenuToggle} />
      </div>

      <div className={styles.dropdownMenu}>
        <MobileNavBar props={{ navItem, navIsOpen, navMenuToggle }} />
      </div>
    </>
  );
};
