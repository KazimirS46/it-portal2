'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { DeveloperData } from '@/types/types';
import Slide from '../Slide';

interface IProps {
  props: DeveloperData;
}

export default function Slider({ props }: IProps) {
  const company = props.company;

  return (
    <>
      <Swiper slidesPerView={4} spaceBetween={8}>
        {company.map((slide) => (
          <SwiperSlide key={slide.id}>{<Slide data={slide} />}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
