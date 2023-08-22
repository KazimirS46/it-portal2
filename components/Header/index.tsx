import Image from 'next/image';
import styles from './index.module.css';
import logo from '../../public/icon/logoIcon.png';
import logInIcon from '../../public/icon/loginIcon.svg';
import navItems from './navlist.json';
import Link from 'next/link';

type Submenu = {
  id: number;
  title: string;
};

type NavItem = {
  id: number;
  title: string;
  path: string;
  submenu: Submenu[];
};

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <nav className={styles.navbar}>
            <div>
              <Image
                className={styles.logo}
                src={logo}
                width={41}
                height={45}
                alt='logo'
              />
            </div>
            <div className={styles.navigation}>
              <ul>
                {navItems.map((navItem: NavItem) => (
                  <li key={navItem.id}>
                    <Link href={navItem.path}>{navItem.title}</Link>
                    {navItem.submenu.length > 0 ? (
                      <button className={styles.navButton}>open</button>
                    ) : null}
                    <div className={styles.navSubmenu}>
                      <ul>
                        {navItem.submenu.map((sub: Submenu) => (
                          <li key={sub.id}>{sub.title}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image src={logInIcon} alt='log in' />
            </div>
          </nav>
        </div>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            Портал цифровых решений <span>и инициатив Самарской области</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
