import NavTop from './components/NavTop';
import styles from './index.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <NavTop />
      </div>
    </header>
  );
}
