import styles from './index.module.css';
import developers from './developers.json';
import Slider from './Slider';

export default function DeveloperSection() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{developers.title}</h2>

          <div className={styles.sliderContainer}>
            <Slider props={developers} />
          </div>
        </div>
      </div>
    </section>
  );
}
