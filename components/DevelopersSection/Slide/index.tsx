import Image from 'next/image';
import { DeveloperCompany } from '@/types/types';
import styles from './index.module.css';

interface IProps {
  data: DeveloperCompany;
}

export default function Slide({ data }: IProps) {
  return (
    <div className={styles.slide}>
      <div className={styles.top}>
        <Image
          src={data.logoUrl}
          alt='logoCompany'
          width={36}
          height={36}
        />
      </div>

      <div className={styles.bottom}>
        <h3>{data.title}</h3>

        <p className={styles.description}>{data.description}</p>

        <ul>
          {data.tags.map(tag => (
            <li key={tag.id}>{tag.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
