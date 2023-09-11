import { News } from '@/components/News';
import styles from './main.module.css';
import { Hero } from '@/components/Hero';
import Section from '@/components/Section';
import SolutionsMain from '@/components/SolutionsMain';

export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <SolutionsMain />
    </>
  );
}
