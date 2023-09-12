'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide from '../Slide';
import { slidesData } from '@/types/types';

interface IProps {
  data: slidesData[];
}

export default function Slider({ data }: IProps) {
  return (
    <>
      <Swiper slidesPerView={3} spaceBetween={8}>
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>{<Slide props={slide} />}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
