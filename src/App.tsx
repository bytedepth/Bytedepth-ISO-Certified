/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Niches from './components/Niches';
import CaseStudies from './components/CaseStudies';
import ValueCalculator from './components/ValueCalculator';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import TrustSection from './components/TrustSection';
import BookingForm from './components/BookingForm';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import ToastContainer from './components/Toast';
import SeoHealthDashboard from './components/SeoHealthDashboard';
import PartnersIntegrations from './components/PartnersIntegrations';
import AgencyComparison from './components/AgencyComparison';
import GlobalReach from './components/GlobalReach';
import ConsultantSpotlight from './components/ConsultantSpotlight';

export default function App() {
  const [selectedNicheId, setSelectedNicheId] = useState<string>('legal-finance');
  const [hasActiveBooking, setHasActiveBooking] = useState<boolean>(false);
  const [bookingFormOpen, setBookingFormOpen] = useState<boolean>(false);
  const [selectedPlanId, setSelectedPlanId] = useState<'complete' | 'basic' | 'onetime'>('complete');

  // Dynamic SEO and OpenGraph meta tags for MBBS Abroad Consultants
  useEffect(() => {
    // Set Document Title
    document.title = "ByteDepth | Premium Web Assets for MBBS Abroad Consultants & Student Recruitment";

    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Update SEO meta descriptions and keywords
    setMetaTag('name', 'description', 'ByteDepth designs premium, high-converting MBBS Abroad recruitment websites and digital marketing student acquisition funnels. Double your MBBS student intake with audited standards compliance, live mockups, and WhatsApp CRM integrations.');
    setMetaTag('name', 'keywords', 'MBBS abroad consultants, student recruitment, MBBS abroad marketing, MBBS consultant website, MBBS student recruitment, digital student acquisition, medical college admission portal, MBBS admission leads');
    
    // Update OpenGraph details
    setMetaTag('property', 'og:title', 'ByteDepth | High-Converting Student Recruitment Systems for MBBS Abroad Consultants');
    setMetaTag('property', 'og:description', 'Deploy compliance-certified portals, NEET-score calculators, and direct WhatsApp routing built specifically for MBBS abroad student recruiters.');
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', window.location.href);
    setMetaTag('property', 'og:image', 'https://bytedepth.com/og-image-mbbs.jpg');
  }, []);

  // Smooth scroll handler targeting sections on-page
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scrolling slightly to account for the sticky header
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectNicheFromLanding = (nicheId: string) => {
    setSelectedNicheId(nicheId);
    handleScrollToSection('booking-form');
  };

  const handleOpenBookingWizard = (planId?: 'complete' | 'basic' | 'onetime') => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    setBookingFormOpen(true);
    handleScrollToSection('booking-form');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* Sticky Header Navigation Component */}
      <Navbar 
        onScrollToSection={handleScrollToSection} 
        onOpenBooking={handleOpenBookingWizard} 
        hasActiveBooking={hasActiveBooking}
      />

      {/* Main landing sections wrapper */}
      <main>
        
        {/* Section 1: Attention Grabber Hero Area */}
        <div id="hero">
          <Hero 
            onOpenBooking={handleOpenBookingWizard} 
            onScrollToSection={handleScrollToSection} 
          />
        </div>

        {/* Section 2: Niches Categorizer and Live Interactive Simulator */}
        <div id="services">
          <Niches onSelectNicheForBooking={handleSelectNicheFromLanding} />
        </div>

        {/* Section 2b: Real-world Success Sprints Before vs After metrics */}
        <CaseStudies />

        {/* Section 3: Interactive Value Calculator */}
        <div id="calculator">
          <ValueCalculator />
        </div>

        {/* Section 3.5: Agency Build Comparison (ROI & conversion delta) */}
        <AgencyComparison />

        {/* Section 3b: Interactive SEO Health Dashboard & SERP Simulator */}
        <SeoHealthDashboard />

        {/* Section 4: 3-step Delivery Timeline */}
        <div id="how-it-works">
          <HowItWorks onOpenBooking={handleOpenBookingWizard} />
        </div>

        {/* Real-time slider of client reviews social proofing our delivery */}
        <Testimonials />

        {/* Short high-quality auto-looping background clip showcasing premium consultancy */}
        <ConsultantSpotlight />

        {/* Section 5: Standard pricing package spotlight card */}
        <div id="pricing">
          <Pricing onOpenBooking={(planId) => handleOpenBookingWizard(planId)} />
        </div>

        {/* Grid highlighting ISO, SSL compliance and total delivery logs */}
        <TrustSection />

        {/* Section 5c: Partners & Integrations System */}
        <PartnersIntegrations />

        {/* Section 6: Live Booking Scope Manager Wizard & Client Workspace */}
        <div id="booking-form">
          <BookingForm 
            selectedNicheId={selectedNicheId}
            selectedPlanId={selectedPlanId}
            onPlanChange={setSelectedPlanId}
            onBookingSubmittedStatusChange={setHasActiveBooking}
            isOpen={bookingFormOpen}
            onClose={() => setBookingFormOpen(false)}
          />
        </div>

        {/* Section 7: FAQs Accordion Block */}
        <div id="faqs">
          <FaqSection />
        </div>

        {/* Section 7.5: Global Reach trust indicators stats bar */}
        <GlobalReach />

      </main>

      {/* Footer copyright, badges, and formal contact parameters */}
      <Footer 
        onScrollToSection={handleScrollToSection} 
        onOpenBooking={handleOpenBookingWizard} 
      />

      {/* Sticky, floating WhatsApp button at bottom-right corner of screen */}
      <a
        href="https://wa.me/919696775989?text=Hi%20ByteDepth!%20I'm%20an%20MBBS%20Abroad%20Consultant.%20I%20would%20like%20to%20discuss%20a%20high-converting%20student%20recruitment%20web%20system%20and%20professional%20digital%20lead%20gen%20assets%20for%2520my%2520consultancy."
        target="_blank"
        rel="noopener noreferrer"
        className="hover-pulse-btn fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-xl shadow-emerald-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 group border border-emerald-400"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp with ByteDepth"
      >
        <MessageSquare className="w-5 h-5 fill-white/10 text-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-300 ease-out text-[11px] font-bold tracking-wider uppercase whitespace-nowrap block">
          Chat With Us
        </span>
      </a>

      {/* Exit Intent Recovery Popup */}
      <ExitIntentPopup onOpenBooking={handleOpenBookingWizard} />

      {/* Global Toast Notification System */}
      <ToastContainer />

    </div>
  );
}

