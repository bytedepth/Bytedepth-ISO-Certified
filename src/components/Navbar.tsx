/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Phone, Mail, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenBooking: () => void;
  hasActiveBooking: boolean;
}

export default function Navbar({ onScrollToSection, onOpenBooking, hasActiveBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [queueStatus, setQueueStatus] = useState<'accepting' | 'high-demand'>(() => 
    Math.random() > 0.4 ? 'high-demand' : 'accepting'
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setQueueStatus(prev => prev === 'accepting' ? 'high-demand' : 'accepting');
    }, 6000); // toggle every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Cert Badges */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => onScrollToSection('hero')} 
              className="flex items-center space-x-2.5 group cursor-pointer text-left"
              id="nav-logo"
            >
              <div className="bg-blue-600 text-white w-9 h-9 rounded-lg font-bold flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition">
                BD
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-gray-950 block leading-none">
                  ByteDepth
                </span>
                <span className="text-[10px] text-gray-400 font-mono tracking-wider block mt-0.5">
                  CONSULTANCY GROWTH PARTNER
                </span>
              </div>
            </button>
            <div className="hidden sm:flex items-center space-x-1 bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 mr-0.5 text-blue-600" />
              <span>ISO 9001:2015</span>
            </div>

            {/* Build Queue urgency status */}
            <div className={`hidden lg:flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold border transition-colors duration-500 ${
              queueStatus === 'accepting' 
                ? 'bg-emerald-50 border-emerald-100 text-emerald-800' 
                : 'bg-amber-50 border-amber-100 text-amber-800'
            }`}>
              <span className="relative flex h-1.5 w-1.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  queueStatus === 'accepting' ? 'bg-emerald-400' : 'bg-amber-400'
                }`}></span>
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                  queueStatus === 'accepting' ? 'bg-emerald-500' : 'bg-amber-500'
                }`}></span>
              </span>
              <span className="font-mono tracking-wider">
                {queueStatus === 'accepting' ? 'QUEUE: ACCEPTING NEW SPRINT' : 'QUEUE: LIMITED SPREE slots'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <button 
              onClick={() => onScrollToSection('services')} 
              className="hover:text-blue-600 transition cursor-pointer"
              id="nav-link-services"
            >
              Niche Solutions
            </button>
            <button 
              onClick={() => onScrollToSection('calculator')} 
              className="hover:text-blue-600 transition cursor-pointer"
              id="nav-link-calculator"
            >
              ROI Calculator
            </button>
            <button 
              onClick={() => onScrollToSection('how-it-works')} 
              className="hover:text-blue-600 transition cursor-pointer"
              id="nav-link-how-it-works"
            >
              Process
            </button>
            <button 
              onClick={() => onScrollToSection('pricing')} 
              className="hover:text-blue-600 transition cursor-pointer"
              id="nav-link-pricing"
            >
              Costs
            </button>
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://wa.me/919696775989?text=Hi%20ByteDepth!%20I'm%20an%20MBBS%20Abroad%20Consultant.%20I%20would%20like%20to%20discuss%20a%20high-converting%20student%20recruitment%20web%20system%20and%20professional%20digital%20lead%20gen%20assets%20for%252520my%252520consultancy." 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 font-medium text-xs flex items-center gap-1.5 transition"
              id="nav-phone"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500 fill-emerald-500/10 animate-pulse" />
              <span>WhatsApp Chat</span>
            </a>
            
            {hasActiveBooking && (
              <button
                onClick={onOpenBooking}
                className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-200 transition cursor-pointer"
                id="nav-track-btn"
              >
                ● Live Brief
              </button>
            )}
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden flex items-center space-x-2">
            {hasActiveBooking && (
              <button
                onClick={onOpenBooking}
                className="bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2 py-1 rounded-full border border-emerald-200"
              >
                ● Brief
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-1.5 rounded-lg hover:bg-gray-50 focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col gap-2 p-2 bg-gray-50 rounded-xl mb-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-gray-500 font-medium">Standards Compliant</span>
              <span className="text-[10px] bg-blue-100 text-blue-700 rounded px-1.5 py-0.5 font-bold uppercase">ISO 9001 Approved</span>
            </div>
            <div className="flex items-center justify-between pt-1.5 border-t border-gray-200/60">
              <span className="text-[11px] text-gray-500 font-medium">System Queue Status</span>
              <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${
                queueStatus === 'accepting' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>
                {queueStatus === 'accepting' ? '🟢 Accepting Projects' : '🟡 Limited Slots'}
              </span>
            </div>
          </div>
          <button 
            onClick={() => { onScrollToSection('services'); setIsOpen(false); }} 
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Niche Solutions & Mockups
          </button>
          <button 
            onClick={() => { onScrollToSection('calculator'); setIsOpen(false); }} 
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            ROI Revenue Estimator
          </button>
          <button 
            onClick={() => { onScrollToSection('how-it-works'); setIsOpen(false); }} 
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Our 3-Step Process
          </button>
          <button 
            onClick={() => { onScrollToSection('pricing'); setIsOpen(false); }} 
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Pricing & Packages
          </button>
          
          <div className="h-px bg-gray-100 my-2"></div>
          
          <div className="flex flex-col gap-2.5 pt-2">
            <a 
              href="https://wa.me/919696775989?text=Hi%20ByteDepth!%20I'm%20an%20MBBS%20Abroad%20Consultant.%20I%20would%20like%20to%20discuss%20a%20high-converting%20student%20recruitment%20web%20system%20and%20professional%20digital%20lead%20gen%20assets%20for%2520my%2520consultancy." 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 border border-emerald-200 bg-emerald-50/50 rounded-lg text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
