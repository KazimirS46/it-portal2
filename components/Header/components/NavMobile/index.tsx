import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { DropdownMenuButton } from './components/DropdownMenuButton';

import { NavItemType } from '@/types/types';

import styles from './index.module.css';
import { MobileNavBar } from './components/MobileNavBar';

interface IProps {
  props: NavItemType[];
}

export const NavMobile = ({ props }: IProps) => {
  const [navIsOpen, setIsOpen] = useState<boolean>(true);
  const navMenuToggle = () => {
    setIsOpen(!navIsOpen);
  };

  const navItem = props;

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
