import Hero from '@/components/home/Hero';
import Skills from '@/components/home/Skills';
import Experience from '@/components/home/Experience';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Services from '@/components/home/Services';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Services />
      <Contact />
    </>
  );
}