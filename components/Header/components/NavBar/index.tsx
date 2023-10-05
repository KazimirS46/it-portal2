import styles from './index.module.css';
import { NavItemType } from '@/types/types';
import NavItem from '../NavItem';

interface IProps {
  navList: NavItemType[];
}

export default function NavBar({ navList }: IProps) {
  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        {navList.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
