/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { View } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ScienceSection from './components/ScienceSection';
import ProtocolSection from './components/ProtocolSection';
import MagazineSection from './components/MagazineSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import NewsletterModal from './components/NewsletterModal';
import ComparisonDrawer from './components/ComparisonDrawer';
import NewsletterPage from './components/NewsletterPage';
import SettleNewsletterBanner from './components/SettleNewsletterBanner';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [activeView, setActiveView] = useState<View>(() => {
    return window.location.pathname === '/newsletter' ? View.NEWSLETTER : View.CIENCIA;
  });
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Handle route navigation back/forth inside SPA
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path);
      if (path === '/newsletter') {
        setActiveView(View.NEWSLETTER);
      } else {
        setActiveView(View.CIENCIA);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle auto-detection of current section while scrolling (only if not on newsletter page)
  useEffect(() => {
    if (activeView === View.NEWSLETTER) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const sections = [
        { key: View.CIENCIA, id: 'ciencia' },
        { key: View.PROTOCOLOS, id: 'protocolos' },
        { key: View.REVISTA, id: 'revista' },
        { key: View.NOSOTROS, id: 'nosotros' }
      ];

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveView(section.key);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeView]);

  const handleOpenComparison = (category: string) => {
    setSelectedCategory(category);
    setComparisonOpen(true);
  };

  const handleOpenNewsletter = () => {
    setNewsletterOpen(true);
  };

  const handleScrollToId = (id: string, view: View) => {
    setActiveView(view);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewChange = (view: View) => {
    setActiveView(view);
    if (view === View.NEWSLETTER) {
      if (window.location.pathname !== '/newsletter') {
        window.history.pushState({}, '', '/newsletter');
        setCurrentPath('/newsletter');
      }
    } else {
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
      }
      handleScrollToId(view.toLowerCase(), view);
    }
  };

  const isNewsletterView = activeView === View.NEWSLETTER || currentPath === '/newsletter';

  return (
    <div 
      id="longevity-app" 
      className={`min-h-screen transition-all duration-300 ${
        isNewsletterView 
          ? 'bg-[#0a0a0a] text-zinc-100 selection:bg-white selection:text-black' 
          : 'bg-zinc-50 text-zinc-900 selection:bg-zinc-900 selection:text-white'
      }`}
    >
      {/* Background Ambience Spot */}
      {!isNewsletterView && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.03)_0%,transparent_60%)] pointer-events-none" />
      )}

      {/* Header and Floating Navigation */}
      <Header 
        activeView={activeView}
        onViewChange={handleViewChange}
        onOpenNewsletter={handleOpenNewsletter}
      />

      {/* Main Flow Layout */}
      {isNewsletterView ? (
        <NewsletterPage onBackToHome={() => handleViewChange(View.CIENCIA)} />
      ) : (
        <main className="relative min-h-screen">
          
          {/* HERO: Vive más. Vive mejor. */}
          <Hero 
            onScrollToScience={() => handleScrollToId('ciencia', View.CIENCIA)}
            onOpenNewsletter={handleOpenNewsletter}
          />

          {/* 1. CIENCIA SECTION */}
          <ScienceSection />

          {/* 2. PROTOCOLOS SECTION (previously TIENDA, reordered to be educational, non-commercial) */}
          <ProtocolSection />

          {/* 3. REVISTA SECTION */}
          <MagazineSection />

          {/* 4. NOSOTROS SECTION (+ PREGUNTAS / FAQS as sub-section) */}
          <AboutSection />

        </main>
      )}

      {/* FOOTER: Premium hairline layout with FAQs shortcuts and affiliate disclaimers */}
      <Footer 
        onNavClick={handleViewChange}
        onOpenNewsletter={handleOpenNewsletter}
      />

      {/* Subtle bottom newsletter banner (pops up after 60 seconds) */}
      <SettleNewsletterBanner />

      {/* MODAL: Newsletter email capture capture details */}
      <NewsletterModal 
        isOpen={newsletterOpen}
        onClose={() => setNewsletterOpen(false)}
      />

      {/* DRAWER: Affiliate comparisons for recommended compounds and HPLC certificates */}
      <ComparisonDrawer 
        isOpen={comparisonOpen}
        onClose={() => setComparisonOpen(false)}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
