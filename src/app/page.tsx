import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Hero';
import BrandStrip from '@/components/BrandStrip';
import TrustStrip from '@/components/TrustStrip';
import Company from '@/components/Company';
import Platform from '@/components/Platform';
import Quality from '@/components/Quality';
import Partners from '@/components/Partners';
import MedicalEducation from '@/components/MedicalEducation';
import Newsroom from '@/components/Newsroom';
import ContactForm from '@/components/ContactForm';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStrip />
        <TrustStrip />
        <ScrollReveal><Company /></ScrollReveal>
        <ScrollReveal><Platform /></ScrollReveal>
        <ScrollReveal><Quality /></ScrollReveal>
        <ScrollReveal><Partners /></ScrollReveal>
        <ScrollReveal><MedicalEducation /></ScrollReveal>
        <ScrollReveal><Newsroom /></ScrollReveal>
        <ScrollReveal><ContactForm /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
