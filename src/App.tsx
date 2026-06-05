/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
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

export default function App() {
  const [selectedNicheId, setSelectedNicheId] = useState<string>('legal-finance');
  const [hasActiveBooking, setHasActiveBooking] = useState<boolean>(false);
  const [bookingFormOpen, setBookingFormOpen] = useState<boolean>(false);

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

  const handleOpenBookingWizard = () => {
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

        {/* Section 4: 3-step Delivery Timeline */}
        <div id="how-it-works">
          <HowItWorks onOpenBooking={handleOpenBookingWizard} />
        </div>

        {/* Real-time slider of client reviews social proofing our delivery */}
        <Testimonials />

        {/* Section 5: Standard pricing package spotlight card */}
        <div id="pricing">
          <Pricing onOpenBooking={handleOpenBookingWizard} />
        </div>

        {/* Grid highlighting ISO, SSL compliance and total delivery logs */}
        <TrustSection />

        {/* Section 6: Live Booking Scope Manager Wizard & Client Workspace */}
        <div id="booking-form">
          <BookingForm 
            selectedNicheId={selectedNicheId}
            onBookingSubmittedStatusChange={setHasActiveBooking}
            isOpen={bookingFormOpen}
            onClose={() => setBookingFormOpen(false)}
          />
        </div>

        {/* Section 7: FAQs Accordion Block */}
        <div id="faqs">
          <FaqSection />
        </div>

      </main>

      {/* Footer copyright, badges, and formal contact parameters */}
      <Footer 
        onScrollToSection={handleScrollToSection} 
        onOpenBooking={handleOpenBookingWizard} 
      />

      {/* Sticky, floating WhatsApp button at bottom-right corner of screen */}
      <a
        href="https://wa.me/9191696775989"
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

    </div>
  );
}

