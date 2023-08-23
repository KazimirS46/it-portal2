'use client';

import { useState } from 'react';
import navItems from '../../navlist.json';
import { NavigationItem } from '../NavigationItem';
import styles from './index.module.css';
import { log } from 'console';

export type Submenu = {
  id: number;
  title: string;
  path: string;
};

export type NavItem = {
  id: number;
  title: string;
  path: string;
  submenu: Submenu[];
};

export function NavigationBar() {
  return (
    <ul className={styles.navList}>
      {navItems.map((item: NavItem) => (
        <NavigationItem key={item.id} props={item} />
      ))}
    </ul>
  );
}
