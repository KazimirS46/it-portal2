import styles from './index.module.css';
import dataItems from './articlesData.json';
import MainArticle from './mainArticle';

export type Data = {
  id: number;
  title: string;
  linkName: string;
  path: string;
};

const arr = ['ekjrbv', 'wlsdjkfhv', 'skdfjhv'];

export default function SolutionsMain() {
  const articleList = dataItems.map((data) => (
    <li key={data.id}>
      <MainArticle props={data} />
    </li>
  ));
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.sectionTitle}>Решения</h1>
          <ul>{articleList}</ul>
        </div>
      </div>
    </section>
  );
}
