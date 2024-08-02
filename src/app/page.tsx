import Navbar from '@/Navbar/Navbar';
import HeroComponent from '@/components/Landing/HeroComponent';
import WhatComponent from '@/components/Landing/WhatComponent';
import TestmonialComponent from '@/components/Landing/TestmonialComponent';
import WhyComponent from '@/components/Landing/WhyComponent';
import UltimateComponent from '@/components/Landing/UltimateComponent';
import CardComponent from '@/components/Landing/CardComponent';
import UnderstandComponent from '@/components/Landing/UnderstandComponent';
import FaqComponent from '@/components/Landing/FaqComponent';
import Footer from '@/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <WhatComponent />
      <WhyComponent />
      <UltimateComponent />
      <TestmonialComponent />
      <CardComponent />
      <UnderstandComponent />
      <FaqComponent />
      <Footer />
    </>
  );
}
