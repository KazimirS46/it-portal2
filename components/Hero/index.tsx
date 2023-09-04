import { ActionBtn } from './components/ActionBtn';
import { HeroTop } from './components/HeroTop';
import styles from './index.module.css';

export function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroContent}>
        <HeroTop />
        <ActionBtn />
      </div>
    </div>
  );
}
