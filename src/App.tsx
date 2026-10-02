import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsQuicTaxSection } from './components/WhatIsQuicTaxSection';
import { AwardsRecognitionSection } from './components/AwardsRecognitionSection';
import { StatsBar } from './components/StatsBar';
import { PricingSection } from './components/PricingSection';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { FeaturesDeepDiveSection } from './components/FeaturesDeepDiveSection';
import { ProcessSection } from './components/ProcessSection';
import { TaxCalculator } from './components/TaxCalculator';
import { CraHubSection } from './components/CraHubSection';
import { ArticlesSection } from './components/ArticlesSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DemoCenterModal } from './components/DemoCenterModal';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* Sticky Main Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenCalculator={() => scrollToSection('calculator')}
      />
      
      {/* Main Page Layout Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero 
          onOpenDemo={() => setIsDemoModalOpen(true)}
          onOpenCalculator={() => scrollToSection('calculator')}
        />

        {/* 2. What is QuicTax.ca? (Core Pillars Grid) */}
        <WhatIsQuicTaxSection 
          onOpenDemo={() => setIsDemoModalOpen(true)}
          onOpenCalculator={() => scrollToSection('calculator')}
        />

        {/* 3. Recognized by Industry Experts & Awards */}
        <AwardsRecognitionSection />

        {/* 4. Stats & Social Proof Bar */}
        <StatsBar />

        {/* 5. Flat Annual Pricing Plans & Volume Cost Calculator */}
        <PricingSection 
          onOpenDemo={() => setIsDemoModalOpen(true)}
          onOpenCalculator={() => scrollToSection('calculator')}
        />

        {/* 6. Side-by-Side Comparison Matrix */}
        <ComparisonMatrix 
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 7. Features Deep Dive */}
        <FeaturesDeepDiveSection 
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 8. Process Section */}
        <ProcessSection />

        {/* 9. Interactive Canadian Tax Estimator */}
        <TaxCalculator />

        {/* 10. CRA Resource Hub */}
        <CraHubSection />

        {/* 11. Canadian Tax Articles Hub */}
        <ArticlesSection />

        {/* 12. About QuicTax.ca */}
        <AboutSection />

        {/* 13. Frequently Asked Questions */}
        <FaqSection />

        {/* 14. Contact & Support Center */}
        <ContactSection />
      </main>

      {/* Enterprise Multi-Column Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Floating Action WhatsApp Trigger */}
      <FloatingWhatsApp />

      {/* Interactive Demo Center Modal */}
      <DemoCenterModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
};

export default App;
