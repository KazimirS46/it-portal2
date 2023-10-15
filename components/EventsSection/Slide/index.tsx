import Image from 'next/image';
import styles from './index.module.css';
import { EventData } from '@/types/types';

interface IProps {
  data: EventData;
}

export default function Slide({ data }: IProps) {
  return (
    <div className={styles.slide}>
      <div className={styles.top}>
        <Image
          src={data.imageUrl}
          alt='event foto'
          width={440}
          height={184}
          className={styles.image}
        />
      </div>

      <div className={styles.bottom}>
        <div className={styles.head}>
          <h3>{data.title}</h3>
          <span className={styles.date}>{data.date}</span>
        </div>
        <p className={styles.description}>{data.description}</p>
      </div>
    </div>
  );
}
