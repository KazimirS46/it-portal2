import Link from 'next/link';
import styles from './index.module.css';
import servicesList from './services.json';
import ServicesSlider from './Slider';

export default function ServicesSection() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h2>Услуги</h2>
            <Link href='/services'>Показать все услуги</Link>
          </div>
          <ServicesSlider services={servicesList} />
        </div>
      </div>
    </section>
  );
}
