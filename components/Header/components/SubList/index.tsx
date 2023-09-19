import SubLink from '../SubLink';
import { SubNavItem } from '@/types/types';
import styles from './index.module.css';

interface IProps {
  props: SubNavItem[];
}

export default function SubList({ props }: IProps) {
  return (
    <ul className={styles.subList}>
      {props.map((submenu) => (
        <li key={submenu.id} className={styles.subItem}>
          <SubLink path={submenu.path} title={submenu.title} />
        </li>
      ))}
    </ul>
  );
}
