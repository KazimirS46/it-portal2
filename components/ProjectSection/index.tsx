import Slider from './Slider';
import styles from './index.module.css';
import projects from './projects.json';

export default function ProjectsSection() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h2>Открытые проекты и инициативы</h2>
            <p>Проекты, в реализации которых можно принять участие</p>
          </div>
          <Slider projects={projects} />
        </div>
      </div>
    </section>
  );
}
