import Link from 'next/link';
import MainArticle from './mainArticle';
import dataItems from './articlesData.json';
import styles from './index.module.css';

export default function SolutionsMain() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Решения</h2>

          <ul>
            {dataItems.map((data) => (
              <li key={data.id}>
                <MainArticle props={data} />
              </li>
            ))}
          </ul>

          <div className={styles.sectionFooter}>
            <p className={styles.footerText}>Не нашли подходящее решение?</p>

            <div className={styles.line}></div>

            <Link href='/solutions' className={styles.link}>
              <span>Подобрать решение</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
