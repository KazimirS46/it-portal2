import Image from 'next/image';
import heroImage from '../../public/image/headerImage.png';
import styles from './index.module.css';
import Link from 'next/link';

export function Hero() {
  return (
    <>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Портал цифровых решений <br></br>и инициатив Самарской области
        </h1>
        <button className={styles.btnSearch}>
          <Link href={'/'}>Найти решение</Link>
        </button>
        <p className={styles.description}>
          Инвестору поможем подобрать проект, разработчикам поможем рассказать о
          себе
        </p>
        <p className={styles.contactInfo}>
          Проектный офис цифрового развития ------ Info@mailmailmailm.ru, +9
          (999) 999-99-99
        </p>
      </div>
      <div className={styles.image}>
        <Image src={heroImage} alt='' />
      </div>
    </>
  );
}
