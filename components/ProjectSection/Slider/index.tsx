'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide from '../Slide';
import { useResize } from '@/hooks/useResize';
import { ProjectData } from '@/types/types';

interface IProps {
  projects: ProjectData[];
}

export default function Slider({ projects }: IProps) {
  const perView: number = useResize() ? 1 : 4;
  return (
    <>
      <Swiper
        slidesPerView={perView}
        spaceBetween={8}>
        {projects.map(project => (
          <SwiperSlide key={project.id}>{<Slide data={project} />}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
