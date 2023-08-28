import { ActionBtn } from './components/ActionBtn';
import { Hero } from './components/Hero';
import NavTop from './components/NavTop';
import styles from './index.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <NavTop />
        <div className={styles.heroContent}>
          <Hero />
          <ActionBtn />
        </div>
      </div>
    </header>
  );
}
