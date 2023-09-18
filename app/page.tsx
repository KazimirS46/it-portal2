import DeveloperSection from '@/components/DevelopersSection';
import EventsSection from '@/components/EventsSection';
import Hero from '@/components/HeroSection';
import News from '@/components/NewsSection';
import ProjectsSection from '@/components/ProjectSection';
import ServicesSection from '@/components/ServicesSection';
import SolutionsMain from '@/components/SolutionsMain';

export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <SolutionsMain />
      <DeveloperSection />
      <ServicesSection />
      <EventsSection />
      <ProjectsSection />
    </>
  );
}
