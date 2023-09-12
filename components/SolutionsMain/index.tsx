import styles from './index.module.css';
import dataItems from './articlesData.json';
import MainArticle from './mainArticle';
import Link from 'next/link';

export default function SolutionsMain() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.sectionTitle}>Решения</h1>
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
