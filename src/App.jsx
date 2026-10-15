import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import PainPointsSection from './components/sections/PainPointsSection';
import SolutionSection from './components/sections/SolutionSection';
import CoreFeaturesSection from './components/sections/CoreFeaturesSection';
import SimpleProcessSection from './components/sections/SimpleProcessSection';
import AppPreviewSection from './components/sections/AppPreviewSection';
import TrustSafetySection from './components/sections/TrustSafetySection';
import RealStoriesSection from './components/sections/RealStoriesSection';
import PricingSection from './components/sections/PricingSection';
import BlogSection from './components/sections/BlogSection';
import NodalySection from './components/sections/NodalySection';
import TherapistBannerSection from './components/sections/TherapistBannerSection';
import FinalCtaSection from './components/sections/FinalCtaSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <CoreFeaturesSection />
        <SimpleProcessSection />
        <AppPreviewSection />
        <TrustSafetySection />
        <RealStoriesSection />
        <PricingSection />
        <BlogSection />
        <NodalySection />
        <TherapistBannerSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}