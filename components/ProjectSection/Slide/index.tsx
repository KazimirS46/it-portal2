import Image from 'next/image';
import { ProjectData } from '@/types/types';
import styles from './index.module.css';

interface IProps {
  data: ProjectData;
}

export default function Slide({ data }: IProps) {
  return (
    <div className={styles.slide}>
      <div className={styles.top}>
        <h3>{data.title}</h3>

        <Image
          src={data.logoUrl}
          alt='Company Logo'
          width={36}
          height={36}
        />
      </div>

      <div className={styles.bottom}>
        <p className={styles.info}>{data.info}</p>

        <p className={styles.description}>{data.description}</p>
      </div>
    </div>
  );
}
