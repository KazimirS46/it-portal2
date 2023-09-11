import styles from './index.module.css';

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
}
