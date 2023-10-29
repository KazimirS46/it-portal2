import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { DropdownMenuButton } from './components/DropdownMenuButton';
import { MobileNavBar } from './components/MobileNavBar';
import styles from './index.module.css';

interface IProps {
  overOpen: () => void;
  overClose: () => void;
}

export const NavMobile = ({ overClose, overOpen }: IProps) => {
  const [navIsOpen, setIsOpen] = useState<boolean>(false);

  const navMenuToggle = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    navIsOpen && overOpen();
    !navIsOpen && overClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navIsOpen]);

  return (
    <>
      <div className={styles.mobile}>
        <Link
          href={'/'}
          className={styles.logoLink}>
          <Image
            alt=''
            src={'/logo/mainLogo.png'}
            priority={false}
            width={41}
            height={45}
            className={styles.mainLogo}
          />
        </Link>

        <DropdownMenuButton
          isOpen={navIsOpen}
          toggle={navMenuToggle}
        />
      </div>

      <div className={styles.dropdownMenu}>
        <MobileNavBar props={{ navIsOpen, navMenuToggle }} />
      </div>
    </>
  );
};
