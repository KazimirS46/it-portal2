import { News } from '@/components/News';
import styles from './main.module.css';
import { Hero } from '@/components/Hero';
import Section from '@/components/Section';

export default function Home() {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <News />
      </Section>
    </>
  );
}
