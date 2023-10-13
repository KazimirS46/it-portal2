'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EventData } from '@/types/types';
import Slide from '../Slide';

interface IProps {
  events: EventData[];
}

export default function Slider({ events }: IProps) {
  return (
    <>
      <Swiper slidesPerView={3} spaceBetween={8}>
        {events.map((event) => (
          <SwiperSlide key={event.id}>{<Slide data={event} />}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
