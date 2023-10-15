'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { DeveloperData } from '@/types/types';
import Slide from '../Slide';
import { useResize } from '@/hooks/useResize';

interface IProps {
  props: DeveloperData;
}

export default function Slider({ props }: IProps) {
  const company = props.company;
  const perView = useResize() ? 1 : 4;

  return (
    <>
      <Swiper slidesPerView={perView} spaceBetween={8}>
        {company.map((slide) => (
          <SwiperSlide key={slide.id}>{<Slide data={slide} />}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
