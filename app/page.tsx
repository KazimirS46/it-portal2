import DeveloperSection from '@/components/DevelopersSection';
import Hero from '@/components/Hero';
import News from '@/components/News';
import SolutionsMain from '@/components/SolutionsMain';

export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <SolutionsMain />
      <DeveloperSection />
    </>
  );
}
