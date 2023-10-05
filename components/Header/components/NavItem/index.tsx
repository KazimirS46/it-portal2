import Image from 'next/image';
import { useContext, useState } from 'react';
import NavLink from '../NavLink';
import SubList from '../SubList';
import { useResize } from '@/hooks/useResize';
import { NavItemType } from '@/types/types';
import { MenuToggleContext } from '../..';
import styles from './inde.module.css';

interface IProps {
  item: NavItemType;
}

export default function NavItem({ item }: IProps) {
  const isMobile = useResize();
  const [isOpenNavItem, setIsOpenNavItem] = useState(false);
  const { navIsOpen, setIsOpen } = useContext<any>(MenuToggleContext);

  const navItemClickHandler = () => {
    !isMobile ? null : setIsOpenNavItem(!isOpenNavItem);
  };

  const subListClickHandler = () => {
    !isMobile ? null : setIsOpen(!navIsOpen);
    !isMobile ? null : setIsOpenNavItem(!isOpenNavItem);
  };

  return (
    <li key={item.id} className={styles.navItem}>
      {item.path !== null ? (
        <NavLink
          path={item.path}
          title={item.title}
          toggle={() => setIsOpen(false)}
        />
      ) : (
        <>
          <div className={styles.navButton} onClick={navItemClickHandler}>
            <span>{item.title}</span>
            <Image
              alt=''
              src={'/icons/arrowIcon.svg'}
              width={20}
              height={20}
              className={styles.arrow}
            />
          </div>
          <div
            className={
              !isMobile
                ? styles.subList
                : isOpenNavItem
                ? styles.subOpen
                : styles.subList
            }
            onClick={subListClickHandler}>
            {item.submenu !== null && <SubList props={item.submenu} />}
          </div>
        </>
      )}
    </li>
  );
}
