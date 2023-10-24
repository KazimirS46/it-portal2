'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Service } from '@/types/types';
import Slide from '../Slide';
import { useResize } from '@/hooks/useResize';

interface IProps {
  services: Service[];
}

export default function ServicesSlider({ services }: IProps) {
  const perView: number = useResize() ? 1 : 4;
  return (
    <>
      <Swiper
        slidesPerView={perView}
        spaceBetween={8}>
        {services.map(service => (
          <SwiperSlide key={service.id}>{<Slide data={service} />}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
