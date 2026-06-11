import Hero from '@/components/Hero';
import BrandStrip from '@/components/BrandStrip';
import TrustStrip from '@/components/TrustStrip';
import Platform from '@/components/Platform';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandStrip />
      <TrustStrip />
      <ScrollReveal><Platform /></ScrollReveal>
    </main>
  );
}
