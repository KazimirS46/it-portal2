import { Metadata } from 'next';
import styles from './index.module.css';

export const metadata: Metadata = {
  title: 'IT Компаниям',
  description: 'IT портал самарской области',
};

export default function Events() {
  return (
    <div className={styles.wrapper}>
      <h1>IT Компаниям</h1>
      <p>
        Портал – информационное пространство, которое объединяет инвесторов,
        разработчиков и IT компании.
      </p>
      <p>
        Зарегистрируйте компанию, чтобы привлёчь инвестиции, найти сотрудников
        или организовать мероприятие.
      </p>
      <h2>После регистрации вы сможете рассказать</h2>
      <div>
        <h3>О компании</h3>
        <p>Ваша миссия, история, направления деятельности, заказчики</p>
        <h3>Об услугах</h3>
        <p>Вашу компанию можно будет найти по услугам</p>
        <h3>О проектах</h3>
        <p>Вашу компанию можно будет найти по проектам</p>
        <h3>О мероприятиях</h3>
        <p>
          Найдёте и тех, кто хочет послушать, и тех, кто хочет поучаствовать
        </p>
      </div>
    </div>
  );
}
