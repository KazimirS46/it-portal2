import Link from 'next/link';
import ServicesSlider from './Slider';
import servicesList from './services.json';
import styles from './index.module.css';

export default function ServicesSection() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h2>Услуги</h2>

            <Link href='/services'>Показать все услуги</Link>
          </div>
          <div className={styles.sliderContainer}>
            <ServicesSlider services={servicesList} />
          </div>
        </div>
      </div>
    </section>
  );
}
