import { Navigation } from './components/Navigation';
import styles from './index.module.css';

export function Header() {
  return (
    <header>
      <div className={styles.container}>
        <Navigation />
      </div>
    </header>
  );
}
