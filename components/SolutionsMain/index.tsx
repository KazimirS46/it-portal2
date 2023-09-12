import styles from './index.module.css';
import dataItems from './articlesData.json';
import MainArticle from './mainArticle';

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
        </div>
      </div>
    </section>
  );
}
