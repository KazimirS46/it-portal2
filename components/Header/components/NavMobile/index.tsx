import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import styles from './index.module.css';

export const NavMobile = () => {
  const [navIsOpen, setIsOpen] = useState<boolean>(false);
  const navMenuToggle = () => {
    setIsOpen(!navIsOpen);
  };
  return (
    <>
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
      <h1>Mobile</h1>
    </>
  );
};
