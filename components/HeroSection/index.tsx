import { ActionBtn } from './components/ActionBtn';
import { HeroTop } from './components/HeroTop';
import styles from './index.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <HeroTop />

            <ActionBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
