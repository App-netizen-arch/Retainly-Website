import { Hero } from '@/components/sections/Hero';
import { WhyDifferent } from '@/components/sections/WhyDifferent';
import { Features } from '@/components/sections/Features';
import { WhyUs } from '@/components/sections/WhyUs';
import { Journey } from '@/components/sections/Journey';
import { Screenshots } from '@/components/sections/Screenshots';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Roadmap } from '@/components/sections/Roadmap';
import { CTA } from '@/components/sections/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <WhyDifferent />
      <Features />
      <WhyUs />
      <Journey />
      <Screenshots />
      <Stats />
      <Testimonials />
      <FAQ />
      <Roadmap />
      <CTA />
    </>
  );
}
