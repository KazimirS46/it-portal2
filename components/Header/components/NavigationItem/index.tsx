'use client';

import Link from 'next/link';
import Image from 'next/image';
import openButton from '../../../../public/button/openButton.svg';
import styles from './index.module.css';
import { NavItem, Submenu } from '../NavigationBar';
import { useState } from 'react';
import { NavigationSubMenu } from '../NavigationSubMenu';

type IProps = {
  props: NavItem;
};

export function NavigationItem({ props }: IProps) {
  const [open, setOpen] = useState<boolean>(false);

  const enter = () => {
    setOpen(true);
  };
  const leave = () => {
    setOpen(false);
  };

  return (
    <li className={styles.navItem} onMouseEnter={enter} onMouseLeave={leave}>
      <Link href={props.path}>{props.title}</Link>
      {props.submenu.length > 0 ? (
        <>
          <button className={styles.button}>
            <span>Open</span>
            <Image src={openButton} alt='Open' />
          </button>
          {open && <NavigationSubMenu submenu={props.submenu} />}
        </>
      ) : null}
    </li>
  );
}
