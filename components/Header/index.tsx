import NavTop from './components/NavTop';
import styles from './index.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <NavTop />
      </div>
    </header>
  );
}
