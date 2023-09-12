import DeveloperSection from '@/components/DevelopersSection';
import Hero from '@/components/HeroSection';
import News from '@/components/NewsSection';
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
    </>
  );
}
