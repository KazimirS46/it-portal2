import Link from 'next/link';
import styles from './index.module.css';

export function ActionBtn() {
  const svg = {
    solution: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='21'
        height='21'
        viewBox='0 0 21 21'
        fill='none'>
        <path
          d='M10.4732 19.9465C15.7052 19.9465 19.9465 15.7052 19.9465 10.4732C19.9465 5.24131 15.7052 1 10.4732 1C5.24131 1 1 5.24131 1 10.4732C1 15.7052 5.24131 19.9465 10.4732 19.9465Z'
          stroke='#0097FF'
          strokeWidth='1.5'
          strokeMiterlimit='10'
        />
        <path
          d='M6.91992 10.4731L9.88031 12.8414L14.6169 7.5127'
          stroke='#0097FF'
          strokeWidth='1.5'
        />
      </svg>
    ),

    services: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'>
        <path
          d='M11.8418 20.1309C16.4197 20.1309 20.1309 16.4197 20.1309 11.8418C20.1309 7.26388 16.4197 3.55273 11.8418 3.55273C7.26388 3.55273 3.55273 7.26388 3.55273 11.8418C3.55273 16.4197 7.26388 20.1309 11.8418 20.1309Z'
          stroke='#0097FF'
          strokeWidth='1.5'
          strokeMiterlimit='10'
        />
        <path
          d='M11.8415 15.394C13.8035 15.394 15.394 13.8035 15.394 11.8415C15.394 9.87955 13.8035 8.28906 11.8415 8.28906C9.87955 8.28906 8.28906 9.87955 8.28906 11.8415C8.28906 13.8035 9.87955 15.394 11.8415 15.394Z'
          stroke='#0097FF'
          strokeWidth='1.5'
          strokeMiterlimit='10'
        />
        <path d='M11.8418 3.55246V0' stroke='#0097FF' strokeWidth='1.5' />
        <path d='M11.8418 23.6833V20.1309' stroke='#0097FF' strokeWidth='1.5' />
        <path
          d='M3.55246 11.8418L0 11.8418'
          stroke='#0097FF'
          strokeWidth='1.5'
        />
        <path
          d='M23.6833 11.8418L20.1309 11.8418'
          stroke='#0097FF'
          strokeWidth='1.5'
        />
        <path
          d='M6.0647 17.7029L3.55273 20.2148'
          stroke='#0097FF'
          strokeWidth='1.5'
        />
        <path
          d='M20.3001 3.4685L17.7881 5.98047'
          stroke='#0097FF'
          strokeWidth='1.5'
        />
        <path
          d='M17.7878 17.7029L20.2998 20.2148'
          stroke='#0097FF'
          strokeWidth='1.5'
        />
        <path
          d='M3.55346 3.4685L6.06543 5.98047'
          stroke='#0097FF'
          strokeWidth='1.5'
        />
      </svg>
    ),

    contacts: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='21'
        height='21'
        viewBox='0 0 21 21'
        fill='none'>
        <path
          d='M10.4732 19.9465C15.7052 19.9465 19.9465 15.7052 19.9465 10.4732C19.9465 5.24131 15.7052 1 10.4732 1C5.24131 1 1 5.24131 1 10.4732C1 15.7052 5.24131 19.9465 10.4732 19.9465Z'
          stroke='#0097FF'
          strokeWidth='1.5'
          strokeMiterlimit='10'
        />
        <path
          d='M10.4727 4.55273V6.52633'
          stroke='#0097FF'
          strokeWidth='1.5'
          strokeMiterlimit='10'
        />
        <path
          d='M10.4727 14.4209V16.3945'
          stroke='#0097FF'
          strokeWidth='1.5'
          strokeMiterlimit='10'
        />
        <path
          d='M12.4446 8.43084C12.4446 7.34871 11.5102 6.47668 10.3779 6.52857C9.34919 6.57413 8.5131 7.41073 8.5 8.40553C8.5 8.44603 8.5 8.48526 8.50262 8.5245C8.53276 9.13834 8.92329 9.68257 9.4868 9.96987L11.4604 10.9773C12.0226 11.2646 12.4131 11.8089 12.4446 12.4227C12.4459 12.4619 12.4472 12.5012 12.4472 12.5417C12.4341 13.5365 11.598 14.3718 10.5693 14.4186C9.437 14.4693 8.50262 13.5985 8.50262 12.5164'
          stroke='#0097FF'
          strokeWidth='1.5'
          strokeMiterlimit='10'
        />
      </svg>
    ),

    about: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='21'
        height='21'
        viewBox='0 0 21 21'
        fill='none'>
        <path
          d='M10.4732 19.9465C15.7052 19.9465 19.9465 15.7052 19.9465 10.4732C19.9465 5.24131 15.7052 1 10.4732 1C5.24131 1 1 5.24131 1 10.4732C1 15.7052 5.24131 19.9465 10.4732 19.9465Z'
          stroke='#0097FF'
          strokeWidth='1.5'
          strokeMiterlimit='10'
        />
        <path d='M10.4736 9.28906V15.2098' stroke='#0097FF' strokeWidth='1.5' />
        <path d='M10.4736 7.51256V5.73633' stroke='#0097FF' strokeWidth='1.5' />
      </svg>
    ),

    events: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='19'
        height='19'
        viewBox='0 0 19 19'
        fill='none'>
        <rect
          x='0.75'
          y='3.11816'
          width='17.4465'
          height='15.0782'
          rx='2.25'
          stroke='#0097FF'
          strokeWidth='1.5'
        />
        <path d='M1.18457 8.28906H17.7627' stroke='#0097FF' strokeWidth='1.5' />
        <path d='M5 0V3' stroke='#0097FF' strokeWidth='1.5' />
        <path d='M14 0V3' stroke='#0097FF' strokeWidth='1.5' />
      </svg>
    ),
  };

  return (
    <div className={styles.actionContainer}>
      <ul className={styles.actionBtnList}>
        <li className={styles.actionBtnItem}>
          <div className={styles.background}></div>

          <Link href={'/solutions'} className={styles.actionBtn}>
            {svg.solution}

            <span>
              Подобрать<br className={styles.br}></br> готовое решение
            </span>

            <div className={styles.divider}></div>
          </Link>
        </li>

        <li className={styles.actionBtnItem}>
          <div className={styles.background}></div>

          <Link href={'/services'} className={styles.actionBtn}>
            {svg.services}

            <span>Заказать разработку</span>

            <div className={styles.divider}></div>
          </Link>
        </li>

        <li className={styles.actionBtnItem}>
          <div className={styles.background}></div>

          <Link href={'/contacts'} className={styles.actionBtn}>
            {svg.contacts}

            <span>Инвестировать</span>

            <div className={styles.divider}></div>
          </Link>
        </li>

        <li className={styles.actionBtnItem}>
          <div className={styles.background}></div>

          <Link href={'/about'} className={styles.actionBtn}>
            {svg.about}

            <span>Получить информацию о Регионе</span>

            <div className={styles.divider}></div>
          </Link>
        </li>

        <li className={styles.actionBtnItem}>
          <div className={styles.background}></div>

          <Link href={'/events'} className={styles.actionBtn}>
            {svg.events}

            <span>Участвовать в IT-мероприятиях</span>

            <div className={styles.divider}></div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
