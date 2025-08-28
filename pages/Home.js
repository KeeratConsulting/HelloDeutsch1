import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import OurStorySection from '../components/OurStorySection';
import PhotoGallery from '../components/PhotoGallery';
import TestimonialSection from '../components/TestimonialSection';
import GraduatesSection from '../components/GraduatesSection';
import CTASection from '../components/CTASection';
import HowWeWorkSection from '../components/HowWeWorkSection';
import FAQSection from '../components/FAQSection';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <Header />
      <main>
        <div id="home"><HeroSection /></div>
        <FeaturesSection />
        <div id="our-story"><OurStorySection /></div>
        <PhotoGallery />
        <TestimonialSection />
        <GraduatesSection />
        <div id="waiting-list"><CTASection /></div>
        <div id="how-we-work"><HowWeWorkSection /></div>
        <FAQSection />
        <div id="news"><NewsSection /></div>
      </main>
      <Footer />
    </div>
  );
}
