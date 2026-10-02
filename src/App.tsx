import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { TaxCalculator } from './components/TaxCalculator';
import { ServicesSection } from './components/ServicesSection';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { ProcessSection } from './components/ProcessSection';
import { CraHubSection } from './components/CraHubSection';
import { ArticlesSection } from './components/ArticlesSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('hero');

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-cyan-500 selection:text-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        <Hero 
          onScrollToCalculator={() => scrollToSection('calculator')}
          onScrollToServices={() => scrollToSection('services')}
        />
        <StatsBar />
        <TaxCalculator />
        <ServicesSection />
        <ComparisonMatrix />
        <ProcessSection />
        <CraHubSection />
        <ArticlesSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer setActiveTab={setActiveTab} />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
