import styles from './index.module.css';
import data from './data.json';
import Slider from './Slider';

export default function DeveloperSection() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{data.title}</h2>
          <div className={styles.sliderContainer}>
            <Slider props={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
