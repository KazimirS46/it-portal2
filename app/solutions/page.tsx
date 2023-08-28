import { Metadata } from 'next';
import styles from './index.module.css';
import { DropMenu } from '@/components/DropMenu';

export const metadata: Metadata = {
  title: 'IT-Решения',
  description: 'IT портал самарской области',
};

export default function Solutions() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.headContainer}>
        <h2>IT-Решения</h2>
        <div className={styles.dropDownMenu}>
          <DropMenu props={[]} />
        </div>
      </div>
    </section>
  );
}
