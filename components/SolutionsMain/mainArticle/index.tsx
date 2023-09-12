import Link from 'next/link';
import styles from './index.module.css';
import 'swiper/css';
import Slider from '../Slider';
import { SolutionsData } from '@/types/types';

interface IProps {
  props: SolutionsData;
}

export default function MainArticle({ props }: IProps) {
  return (
    <div className={styles.article}>
      <div className={styles.navContainer}>
        <h3>{props.title}</h3>
        <Link href={props.path}>
          <p className={styles.linkTitle}>{props.linkName}</p>
        </Link>
      </div>
      <div className={styles.sliderContainer}>
        <Slider data={props.slides} />
      </div>
    </div>
  );
}
