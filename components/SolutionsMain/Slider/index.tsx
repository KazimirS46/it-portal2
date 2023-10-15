'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide from '../Slide';
import { useResize } from '@/hooks/useResize';
import { SlidesSolutionsData } from '@/types/types';

interface IProps {
  data: SlidesSolutionsData[];
}

export default function Slider({ data }: IProps) {
  const slidesPerView: number = useResize() ? 1 : 3;
  // const between: number = useResize() ? 0 : 8;
  return (
    <>
      <Swiper slidesPerView={slidesPerView} spaceBetween={8}>
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>{<Slide props={slide} />}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
