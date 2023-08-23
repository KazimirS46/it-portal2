import Image from 'next/image';
import styles from './index.module.css';
import logo from '../../public/icon/logoIcon.png';
import logInIcon from '../../public/icon/loginIcon.svg';
import { NavigationBar } from './components/NavigationBar';

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
              <NavigationBar />
            </div>
            <div>
              <Image src={logInIcon} alt='log in' />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
