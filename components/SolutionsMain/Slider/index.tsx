'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './index.module.css';

export default function Slider() {
  const slides = ['один', 'Два', 'Три', 'Четыре'];
  return (
    <>
      <Swiper slidesPerView={3} spaceBetween={30}>
        {slides.map((slide) => (
          <SwiperSlide key={0}>
            <div className={styles.slide}>
              <h3>{slide}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
