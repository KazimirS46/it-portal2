import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import SubList from '../SubList';
import NavLink from '../NavLink';

interface IChildren {
  children: NavItem[];
}

export default function NavBar({ children }: IChildren) {
  return (
    <div className={styles.container}>
      <ul className={styles.navList}>
        {children.map((item) => (
          <li key={item.id} className={styles.navItem}>
            {item.path !== null ? (
              <NavLink path={item.path} title={item.title} />
            ) : (
              <>
                <div className={styles.navButton}>
                  <span>{item.title}</span>
                  <Image
                    alt=''
                    src={'/icons/arrowIcon.svg'}
                    width={20}
                    height={20}
                    className={styles.arrow}
                  />
                </div>
                <div className={styles.subList}>
                  {item.submenu !== null && <SubList props={item.submenu} />}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
