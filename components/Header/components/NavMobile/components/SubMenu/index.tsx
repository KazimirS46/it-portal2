import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { NavItemType } from '@/types/types';
import styles from './index.module.css';

interface IProps {
  props: NavItemType;
  close: () => void;
}

export const SubMenu = ({ props, close }: IProps) => {
  const pathname = usePathname();
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  return (
    <div className={styles.navLink} onClick={() => setMenuIsOpen(!menuIsOpen)}>
      <div className={styles.title}>
        <span>{props.title}</span>
        <Image
          alt='Open Menu'
          src={'/icons/arrowIcon.svg'}
          width={20}
          height={20}
          className={styles.menuArrow}
        />
      </div>
      {menuIsOpen && (
        <ul className={styles.subList}>
          {props.submenu!.map((subItem) => (
            <li key={subItem.id} className={styles.subItem}>
              <Link
                href={subItem.path}
                className={`${styles.sublink} ${
                  pathname !== subItem.path ? null : styles.active
                }`}
                onClick={close}>
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
