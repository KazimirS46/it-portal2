import styles from './index.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footerContainer}>
          <div className={styles.info}>
            <p>©</p>
            <p>IT-Портал Самара</p>
            <p>2020</p>
          </div>
          <div className={styles.logo}>Logo</div>
        </div>
      </div>
    </footer>
  );
}
