import styles from './index.module.css';
import Link from 'next/link';
import Slider from './Slider';

interface IProps {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  description: string;
}

export default function EventsSection({ props }: { props: IProps[] }) {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h2 className={styles.sectionTitle}>Мероприятия</h2>

            <Link href='/events'>Показать все мероприятия</Link>
          </div>

          <div className={styles.sliderContainer}>
            <Slider events={props} />
          </div>
        </div>
      </div>
    </section>
  );
}
