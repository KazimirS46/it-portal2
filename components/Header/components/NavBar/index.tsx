import styles from './index.module.css';
import { NavItemType } from '@/types/types';
import NavItem from '../NavItem';

interface IProps {
  props: {
    navMenuToggle: () => void;
    navList: NavItemType[];
  };
}

export default function NavBar({ props }: IProps) {
  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        {props.navList.map((item, index) => (
          <>
            <NavItem
              key={index}
              props={{
                data: item,
                navMenuToggle: props.navMenuToggle,
              }}
            />
          </>
        ))}
      </ul>
    </div>
  );
}
