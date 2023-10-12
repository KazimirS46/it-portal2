import { SubLink } from '../SubLink';
import { SubMenu } from '../SubMenu';
import { NavItemType } from '@/types/types';
import styles from './index.module.css';
import { LogIn } from '../LogIn';

interface IProps {
  props: {
    navItem: NavItemType[];
    navIsOpen: boolean;
    navMenuToggle: () => void;
  };
}

export const MobileNavBar = ({ props }: IProps) => {
  let menuOpen = props.navIsOpen && styles.active;

  return (
    <>
      <nav className={`${styles.menu} ${menuOpen}`}>
        <LogIn />
        <ul className={styles.navList}>
          {props.navItem.map((item) => (
            <li key={item.id} className={styles.navItem}>
              {item.path ? (
                <SubLink props={item} close={props.navMenuToggle} />
              ) : (
                <SubMenu props={item} close={props.navMenuToggle} />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
