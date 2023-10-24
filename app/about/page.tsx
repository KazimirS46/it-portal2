import { Metadata } from 'next';
import styles from './index.module.css';

export const metadata: Metadata = {
  title: 'О Регионе',
  description: 'IT портал самарской области',
};

export default function About() {
  return (
    <div className={styles.wrapper}>
      <h1>Информация о регионе</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        aperiam debitis voluptatum ex eius recusandae distinctio cum ratione
        inventore, explicabo eveniet. Laboriosam cupiditate blanditiis non, in
        labore porro quos dolorem ad minus dolore magnam provident tempore saepe
        sapiente accusantium omnis odit iusto neque, autem veritatis harum
        molestias illum hic. At, ipsa deleniti pariatur veniam repellendus
        laboriosam ex! Iste blanditiis impedit nobis inventore asperiores quod
        delectus accusantium eveniet, repellendus nemo illo voluptatibus amet
        officiis, iure vero voluptatum praesentium libero earum! Error placeat
        aperiam iste enim ullam quaerat repudiandae eaque explicabo dolor odio
        suscipit possimus quae aspernatur laborum culpa rem, quidem deserunt!
      </p>
    </div>
  );
  
}
