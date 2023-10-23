import DeveloperSection from '@/components/DevelopersSection';
import EventsSection from '@/components/EventsSection';
import Hero from '@/components/HeroSection';
import News from '@/components/NewsSection';
import ProjectsSection from '@/components/ProjectSection';
import ServicesSection from '@/components/ServicesSection';
import SolutionsMain from '@/components/SolutionsMain';
import { getAllData } from '@/lib/getAllData';

interface IProps {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  description: string;
}

type Data = {
  id: string;
  data: any;
}[];

export default async function Home() {
  const data: Data = await getAllData();

  return (
    <>
      <Hero />
      <News />
      <SolutionsMain />
      <DeveloperSection />
      <ServicesSection />
      <EventsSection
        props={data.find((i: any) => i.id === 'events')?.data as IProps[]}
      />
      <ProjectsSection />
    </>
  );
}
