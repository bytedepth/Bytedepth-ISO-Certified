/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ClipboardList, Eye, Rocket, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export default function HowItWorks({ onOpenBooking }: HowItWorksProps) {
  const steps = [
    {
      number: '1',
      title: 'Pay Booking Amount (₹500)',
      icon: ClipboardList,
      colorClass: 'bg-blue-600 text-white',
      borderClass: 'border-blue-100',
      description: 'Fill out our lightweight project scope manager and secure your development queue slots with a minor ₹500 booking deposit processed securely through Razorpay.'
    },
    {
      number: '2',
      title: 'Authorize & Edit Your Prototype',
      icon: Eye,
      colorClass: 'bg-indigo-600 text-white',
      borderClass: 'border-indigo-100',
      description: 'Our engineering lab builds your active, responsive live mockup under 24 to 72 hours. Review the prototype page on your mobile/tablet and suggest tweaks. We cover up to 2 rounds of custom modifications.'
    },
    {
      number: '3',
      title: 'Deploy Live On Your Domain',
      icon: Rocket,
      colorClass: 'bg-emerald-600 text-white',
      borderClass: 'border-emerald-100',
      description: 'Only once you absolutely fall in love with the layout and authorize go-live, settle the final balance of ₹9,499. We link your custom web domain and launch the site live!'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white font-sans border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Our Delivery Formula
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            How We Get You Live in 3 Steps
          </h2>
          <p className="text-slate-500 text-base">
            We eliminated long agency consultation pitches and unpredictable costs. Pay a minor queue-holder, review your custom live framework, and buy only if you love it.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Decorative horizontal joining line for desktop */}
          <div className="hidden md:block absolute top-14 left-1/6 right-1/6 h-0.5 bg-slate-100 z-0"></div>

          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div 
                key={step.number}
                className="bg-slate-50/70 border border-slate-100 rounded-2xl p-6 md:p-8 text-center relative z-10 hover:shadow-lg transition-transform duration-200 group"
              >
                {/* Step number badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 bg-white border-2 border-slate-200 rounded-full text-xs font-bold text-slate-500 flex items-center justify-center">
                  {step.number}
                </div>

                {/* Step Icon */}
                <div className={`w-14 h-14 rounded-full ${step.colorClass} flex items-center justify-center mx-auto mb-6 shadow-md transition-transform duration-300 group-hover:scale-110`}>
                  <IconComp className="w-6 h-6" />
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing conversion banner */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 mt-16 text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-base font-bold text-slate-800 tracking-tight">
              Ready to claim your professional digital storefront?
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Takes fewer than 3 minutes to submit your details. Our queue slots are active.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="hover-pulse-btn bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Start Your Interactive Draft Setup</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
