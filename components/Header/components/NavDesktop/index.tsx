import Link from 'next/link';
import Image from 'next/image';
import { NavLink } from './NavLink';
import { NavSubMenu } from './NavSubMenu';
import { routes } from '../../routes';
import styles from './index.module.css';

export const NavDesktop = () => {
  return (
    <div className={styles.navDesktopWrapper}>
      <Link
        href={'/'}
        className={styles.logoLink}>
        <Image
          alt=''
          src={'/logo/mainLogo.png'}
          width={41}
          height={45}
          className={styles.mainLogo}
        />
      </Link>

      <nav>
        <ul className={styles.navList}>
          {routes.map(item => (
            <li
              key={item.id}
              className={styles.navItem}>
              {item.path ? (
                <NavLink props={item} />
              ) : (
                <NavSubMenu props={item} />
              )}
            </li>
          ))}
        </ul>
      </nav>

      <button
        type='button'
        className={styles.logInBtn}>
        <span>logIn</span>

        <Image
          src={'/icons/loginIcon.svg'}
          alt='LogIn Icon'
          width={25}
          height={25}
          className={styles.btnImg}
        />
      </button>
    </div>
  );
};
