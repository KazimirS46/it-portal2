import { Service } from '@/types/types';
import styles from './index.module.css';

interface IProps {
  data: Service;
}

export default function Slide({ data }: IProps) {
  return (
    <div className={styles.slide}>
      <div className={styles.top}>
        <span>{data.serviceName}</span>
      </div>

      <h3>{data.title}</h3>

      <div className={styles.bottom}>
        <div className={styles.companies}>
          <span className={styles.number}>10</span>
          <span className={styles.title}>Companies</span>
        </div>
        <div className={styles.fte}>
          <span className={styles.quantity}>40+</span>
          <span className={styles.title}>FTE</span>
        </div>
        <div className={styles.rate}>
          <span className={styles.price}>35$</span>
          <span className={styles.title}>Average rate</span>
        </div>
      </div>
    </div>
  );
}
