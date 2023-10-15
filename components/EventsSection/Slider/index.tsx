'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EventData } from '@/types/types';
import Slide from '../Slide';
import { useResize } from '@/hooks/useResize';

interface IProps {
  events: EventData[];
}

export default function Slider({ events }: IProps) {
  const perView: number = useResize() ? 1 : 3;
  return (
    <>
      <Swiper slidesPerView={perView} spaceBetween={8}>
        {events.map((event) => (
          <SwiperSlide key={event.id}>{<Slide data={event} />}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
