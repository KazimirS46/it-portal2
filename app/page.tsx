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
      <section className={styles.news}></section>
      <section className={styles.solution}></section>
      <section className={styles.devekjgthc}></section>
      <section className={styles.services}></section>
      <section className={styles.events}></section>
      <section className={styles.projeсts}></section>
    </main>
  );
}
