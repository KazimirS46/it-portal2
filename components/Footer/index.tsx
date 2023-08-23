import Image from 'next/image';
import styles from './index.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footerContainer}>
          <div className={styles.info}>
            <p className={styles.symbol}>©</p>
            <p className={styles.title}>IT-Портал Самара</p>
            <p className={styles.date}>2020</p>
          </div>
          <div className={styles.logo}>
            <Image
              src={'/icon/logoMain.svg'}
              width={32}
              height={32}
              alt='logo'></Image>
          </div>
        </div>
      </div>
    </footer>
  );
}
