'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import newsButton from '../../public/button/newsButton.svg';
import news from '../../public/jsons/news.json';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './index.module.css';

interface INews {
  id: number;
  mainImage: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
}

export function News() {
  return (
    <div className={styles.container}>
      <div className={styles.slideContainer}>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
          {news.map((news: INews) => (
            <SwiperSlide key={news.id}>
              <div className={styles.slide}>
                <Image
                  src={news.mainImage.src}
                  width={440}
                  height={264}
                  alt={news.mainImage.alt}
                />
                <article className={styles.article}>
                  <h2>{news.title}</h2>
                  <p>{news.description}</p>
                  <Image src={newsButton} width={440} alt='button' />
                </article>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
