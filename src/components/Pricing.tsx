/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Info, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenBooking: () => void;
}

export default function Pricing({ onOpenBooking }: PricingProps) {
  const features = [
    'Premium Custom Visual Design (No generic templates)',
    'Secure Lead Capture & Contact Delivery Forms',
    'Full Mobile & Tablet Responsive Optimization',
    '30 Days of Dedicated Post-Launch Assistance',
    'Direct Interactive Widgets (WhatsApp API, Calendly triggers)',
    'SEO Foundations & Fast Page-Load CDN Setup',
    '2 Rounds of Custom Mockup Revisions',
    '100% Brand Ownership (Domain on client accounts)'
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-900 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-950 border border-blue-900 px-3 py-1 rounded-full">
            Uncomplicated Pricing Strategy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 mb-4">
            One Single Premium Package. Zero Hidden Fees.
          </h2>
          <p className="text-slate-400 text-base">
            Professional web engineering does not need to cost lakhs. Secure your active live demo with a risk-free ₹500 deposit today.
          </p>
        </div>

        {/* Pricing Layout card */}
        <div className="max-w-4xl mx-auto bg-slate-800 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
          
          {/* Tag highlight */}
          <div className="absolute top-5 right-5 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider hidden sm:block">
            ISO 9001 Process Certified
          </div>

          {/* Left Block: Inclusions */}
          <div className="p-8 md:p-10 md:w-2/3 border-b md:border-b-0 md:border-r border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span>Standard Professional Bundle</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-normal">
              A comprehensive single-page sales machine custom engineered for your specific consulting, medical, client advisory, or creative project portfolio.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3.5 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-xs text-slate-300">
                  <Check className="w-4.5 h-4.5 text-blue-400 mr-2 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 flex items-start gap-2.5">
              <Info className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold text-slate-200 block">Custom Work & E-Commerce</span>
                <span className="text-[11px] text-slate-400 block mt-0.5 leading-normal">
                  Need a full-scale portal, API synchronization, client billing vaults, or e-commerce storefronts? We deliver advanced custom web modules starting at custom budgets. Contact us directly at <a href="mailto:bytedepth@gmail.com" className="text-blue-400 hover:underline">bytedepth@gmail.com</a> for a formal custom quote.
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: Payments Highlight */}
          <div className="p-8 md:p-10 md:w-1/3 flex flex-col justify-between bg-slate-800/40 relative">
            <div className="text-center md:text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 block mb-1">
                Total Value
              </span>
              <div className="flex items-baseline justify-center md:justify-start gap-1 mb-2">
                <span className="text-5xl font-black text-white tracking-tight italic font-mono">₹9,999</span>
                <span className="text-xs text-slate-400 font-semibold font-mono">/total</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Tax-inclusive. Pay only a fraction today. No risk.
              </p>
            </div>

            <div className="my-8 border-y border-dashed border-slate-700 py-6 text-center">
              <span className="text-xs text-slate-400 block font-medium">Pay Only</span>
              <span className="text-3xl font-black text-emerald-400 font-mono tracking-tight block my-1">
                ₹500 Now
              </span>
              <span className="text-[10px] text-slate-400 uppercase font-bold block tracking-wider">
                To Start the Project
              </span>
            </div>

            <div className="space-y-3">
              <button
                onClick={onOpenBooking}
                className="hover-pulse-btn w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3.5 rounded-xl font-bold text-xs tracking-wide active:scale-95 transition-all shadow-lg shadow-blue-500/20 inline-flex items-center justify-center gap-1.5 cursor-pointer"
                id="pricing-cta-book"
              >
                <span>Pay ₹500 & Start</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Secured via Razorpay</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
