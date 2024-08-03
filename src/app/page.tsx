"use client";
import { useRef } from 'react';
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

  const faqRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const whatRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar faqRef={faqRef} priceRef={priceRef} whatRef={whatRef} />
      <HeroComponent />
      <div ref={whatRef}>
        <WhatComponent />
      </div>
      <WhyComponent />
      <UltimateComponent />
      <TestmonialComponent />
      <div ref={priceRef}>
        <CardComponent />
      </div>
      <UnderstandComponent />
      <div ref={faqRef}>
        <FaqComponent />
      </div>
      <Footer />
    </>
  );
}
