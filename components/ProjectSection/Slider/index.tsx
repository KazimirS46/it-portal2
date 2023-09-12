'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide from '../Slide';
import { ProjectData } from '@/types/types';

interface IProps {
  projects: ProjectData[];
}

export default function Slider({ projects }: IProps) {
  return (
    <>
      <Swiper slidesPerView={4} spaceBetween={8}>
        {projects.map((project) => (
          <SwiperSlide key={project.id}>{<Slide data={project} />}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
