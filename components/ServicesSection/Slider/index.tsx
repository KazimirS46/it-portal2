'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Service } from '@/types/types';
import Slide from '../Slide';

interface IProps {
  services: Service[];
}

export default function ServicesSlider({ services }: IProps) {
  return (
    <>
      <Swiper slidesPerView={4} spaceBetween={8}>
        {services.map((service) => (
          <SwiperSlide key={service.id}>{<Slide data={service} />}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
