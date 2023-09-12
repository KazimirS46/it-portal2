import styles from './index.module.css';
import events from './events.json';
import Link from 'next/link';
import Slider from './Slider';

export default function EventsSection() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h2 className={styles.sectionTitle}>Мероприятия</h2>
            <Link href='/events'>Показать все мероприятия</Link>
          </div>
          <Slider events={events} />
        </div>
      </div>
    </section>
  );
}
