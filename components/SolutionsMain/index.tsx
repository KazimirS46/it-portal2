import Link from 'next/link';
import styles from './index.module.css';

export default function SolutionsMain() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.sectionTitle}>Решения</h1>
          <div className={styles.article}>
            <div className={styles.navContainer}>
              <h3>Covid-19</h3>
              <Link href='/solutions'></Link>
            </div>
            <div className={styles.sliderContainer}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
