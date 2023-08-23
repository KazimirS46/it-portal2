import { Hero } from '@/components/Hero';
import styles from './main.module.css';
import { ActionBtn } from '@/components/ActionBtn';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.wrapper}>
          <div className={styles.heroContent}>
            <Hero />
            <ActionBtn />
          </div>
        </div>
      </section>
    </main>
  );
}
