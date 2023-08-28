import { News } from '@/components/News';
import styles from './main.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.news}>
        <News />
      </section>
      <section className={styles.solution}></section>
      <section className={styles.devekjgthc}></section>
      <section className={styles.services}></section>
      <section className={styles.events}></section>
      <section className={styles.projeсts}></section>
    </>
  );
}
