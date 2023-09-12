import { slidesData } from '@/types/types';
import styles from './index.module.css';
import Image from 'next/image';

interface IProps {
  props: slidesData;
}

export default function Slide({ props }: IProps) {
  console.log(props);

  return (
    <>
      <div className={styles.slide}>
        <div className={styles.top}>
          <Image src={props.imageUrl} width={440} height={184} alt='image' />
        </div>
        <div className={styles.bottom}>
          <div className={styles.head}>
            <h3>{props.title}</h3>
            <Image alt='Logo' src={props.logoUrl} width={36} height={36} />
          </div>
          <p className={styles.description}>{props.description}</p>
          <p className={styles.info}>{props.info}</p>
        </div>
      </div>
    </>
  );
}
