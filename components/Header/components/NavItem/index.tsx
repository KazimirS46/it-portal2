import Image from 'next/image';
import NavLink from '../NavLink';
import styles from './inde.module.css';
import SubList from '../SubList';
import { NavItemType } from '@/types/types';
import { useResize } from '@/hooks/useResize';
import { useContext, useEffect, useState } from 'react';
import { MenuToggleContext } from '../..';

interface IProps {
  props: {
    data: NavItemType;
    navMenuToggle: () => void;
  };
}

export default function NavItem({ props }: IProps) {
  const isMobile = useResize();
  const [isOpenNavItem, setIsOpenNavItem] = useState(false);
  const { setIsOpen } = useContext<any>(MenuToggleContext);
  const { data, navMenuToggle } = props;

  const navItemClickHandler = () => {
    !isMobile ? null : setIsOpenNavItem(!isOpenNavItem);
  };

  const subListClickHandler = () => {
    !isMobile ? null : navMenuToggle();
    !isMobile ? null : setIsOpenNavItem(!isOpenNavItem);
    console.log('sub Item open', isOpenNavItem);
  };

  useEffect(() => {
    console.log('is mobile ', isMobile);
  }, [isMobile]);

  return (
    <li key={data.id} className={styles.navItem}>
      {data.path !== null ? (
        <NavLink
          path={data.path}
          title={data.title}
          toggle={() => setIsOpen(false)}
        />
      ) : (
        <>
          <div className={styles.navButton} onClick={navItemClickHandler}>
            <span>{data.title}</span>
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
            {data.submenu !== null && <SubList props={data.submenu} />}
          </div>
        </>
      )}
    </li>
  );
}
