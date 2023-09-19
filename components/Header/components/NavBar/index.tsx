'use client';

import Image from 'next/image';
import styles from './index.module.css';
import SubList from '../SubList';
import NavLink from '../NavLink';
import { NavItem } from '@/types/types';
import { useEffect, useState } from 'react';
import { useResize } from '@/hooks/useResize';

interface IProps {
  props: {
    toggle: () => void;
    navList: NavItem[];
  };
}

export default function NavBar({ props }: IProps) {
  const width = useResize();
  const [isOpenNav, setIsOpenNav] = useState(false);

  const navClickHandler = () => {
    !width ? null : setIsOpenNav(!isOpenNav);
  };

  const subListClickHandler = () => {
    props.toggle();
    setIsOpenNav(!isOpenNav);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        {props.navList.map((item) => (
          <li key={item.id} className={styles.navItem}>
            {item.path !== null ? (
              <NavLink
                path={item.path}
                title={item.title}
                toggle={props.toggle}
              />
            ) : (
              <>
                <div className={styles.navButton} onClick={navClickHandler}>
                  <span>{item.title}</span>
                  <Image
                    alt=''
                    src={'/icons/arrowIcon.svg'}
                    width={20}
                    height={20}
                    className={styles.arrow}
                  />
                </div>
                {isOpenNav && (
                  <div className={styles.subList} onClick={subListClickHandler}>
                    {item.submenu !== null && <SubList props={item.submenu} />}
                  </div>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
