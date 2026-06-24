/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Phone, Mail, ArrowUpRight, MessageSquare } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export default function Footer({ onScrollToSection, onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-10 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid content */}
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          
          {/* Logo column */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="bg-blue-600 text-white w-9 h-9 rounded-lg font-bold flex items-center justify-center shadow-md">
                BD
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-slate-900 block leading-none">
                  ByteDepth
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider block mt-0.5 uppercase">
                  Consultancy Growth Partner
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              ByteDepth is an ISO 9001:2015 certified software development agency. We engineer ultra-responsive, standard-compliant single page sales frameworks that turn digital casual visitors into high-intent paying clients.
            </p>

            <div className="space-y-4 pt-2">
              <a 
                href="https://wa.me/919696775989?text=Hi%20ByteDepth!%20I'm%20an%20MBBS%20Abroad%20Consultant.%20I%20would%20like%20to%20discuss%20a%20high-converting%20student%20recruitment%20web%20system%20and%20professional%20digital%20lead%20gen%20assets%20for%2520my%2520consultancy." 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs font-semibold text-slate-705 text-emerald-800 hover:text-emerald-600 transition"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 mr-2 shrink-0 animate-pulse" />
                <span>WhatsApp: +91 96967 75989 (Chat Now)</span>
              </a>
              <a 
                href="mailto:bytedepth@gmail.com" 
                className="flex items-center text-xs font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                <Mail className="w-4 h-4 text-blue-600 mr-2 shrink-0" />
                <span>bytedepth@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-6">
              Core Navigation
            </h4>
            <ul className="space-y-3.5 text-xs font-semibold text-slate-600">
              <li>
                <button 
                  onClick={() => onScrollToSection('services')} 
                  className="hover:text-blue-600 transition cursor-pointer text-left"
                >
                  6 Target Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection('calculator')} 
                  className="hover:text-blue-600 transition cursor-pointer text-left"
                >
                  ROI Value Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection('how-it-works')} 
                  className="hover:text-blue-600 transition cursor-pointer text-left"
                >
                  Delivery Timeline
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection('pricing')} 
                  className="hover:text-blue-600 transition cursor-pointer text-left"
                >
                  Costs & Retainers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection('booking-form')} 
                  className="hover:text-blue-600 transition cursor-pointer text-left"
                >
                  Start Booking Form
                </button>
              </li>
            </ul>
          </div>

          {/* Referral Partner Block */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400">
              Agency Referral Program
            </h4>
            <div className="bg-indigo-50/40 border border-indigo-100 p-4 rounded-2xl space-y-2">
              <span className="text-[9px] font-bold text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded-full inline-block uppercase font-mono tracking-wider">
                Partnership Reward
              </span>
              <p className="text-xs font-bold text-slate-900 leading-snug">
                Earn ₹2,500 + 5% recurring retainer discount for referred agencies.
              </p>
              <p className="text-[11px] text-slate-500 leading-normal">
                Refer fellow MBBS consultants or local counseling agents. When they book a custom ByteDepth portal, we credit you directly or deduct it from your ongoing queue.
              </p>
              <button 
                onClick={onOpenBooking}
                className="text-xs font-bold text-indigo-650 hover:text-indigo-800 inline-flex items-center gap-1.5 mt-1 cursor-pointer"
              >
                Join Partner Program <ArrowUpRight className="w-3 h-3 text-indigo-500" />
              </button>
            </div>
          </div>

          {/* Corporate Badges & Disclaimers Column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-2">
              Quality Assurance
            </h4>

            {/* Quality Standard badge row */}
            <div className="bg-white border border-slate-250 p-4 rounded-xl flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-slate-900 block leading-tight">ISO 9001:2015 Approved</span>
                <span className="text-[10px] text-slate-500 block leading-normal mt-1">
                  Cert No: BD-QA-2023. Our web sprints, server latency tests, responsive frameworks, and client support checklists respect international ISO 9001 standardization guidelines.
                </span>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 leading-normal">
              Disclaimer: Bytedepth behaves as a direct service provider. Initial booking deposits of ₹500 queue your build. Domain purchase must be fulfilled directly on client cards to secure legal ownership.
            </div>
          </div>

        </div>

        {/* Lower Border / Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} ByteDepth Technologies Agency. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <span>ISO Certified Standards</span>
            <span>•</span>
            <a href="https://rzp.io/rzp/rhiCOcPi" target="_blank" className="hover:text-blue-650 flex items-center gap-0.5">
              <span>Razorpay link</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
