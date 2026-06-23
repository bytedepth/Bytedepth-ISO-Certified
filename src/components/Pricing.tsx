/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Info, ShieldCheck, ArrowRight, Sparkles, Award, Shield } from 'lucide-react';

interface PricingProps {
  onOpenBooking: (plan: 'complete' | 'basic' | 'onetime') => void;
}

export default function Pricing({ onOpenBooking }: PricingProps) {
  const plans = [
    {
      id: 'basic' as const,
      name: 'Basic Plan',
      tagline: 'Establish your local digital presence and map footprint.',
      price: '₹300',
      period: 'day',
      subtitle: 'Billed monthly (₹9,000/mo)',
      badge: 'Startup Identity',
      badgeColor: 'bg-slate-700 text-slate-200',
      borderColor: 'border-slate-700 hover:border-slate-600',
      bgColor: 'bg-slate-800/60',
      isPopular: false,
      features: [
        'Custom Conversion-Ready Sales Website',
        'Social Media Profile Branding Layouts',
        'Google Business Profile (Maps) Optimization',
        'Frictionless Mobile & Responsive Layout',
        'Direct WhatsApp Counseling Widgets',
        'SEO Basics & Google Maps Citation Setup',
        '30 Days Post-Launch Maintenance'
      ],
      ctaText: 'Start Basic Plan'
    },
    {
      id: 'complete' as const,
      name: 'Complete Package',
      tagline: 'Fill your 2026 batches with automated qualified leads.',
      price: '₹600',
      period: 'day',
      subtitle: 'Special Monthly Retainer: ₹15,000 (Hire Us! 🚀)',
      badge: 'Most Popular / Complete Suite',
      badgeColor: 'bg-blue-500 text-white animate-pulse',
      borderColor: 'border-blue-500 ring-4 ring-blue-500/10',
      bgColor: 'bg-slate-900 border-2',
      isPopular: true,
      features: [
        'Premium Sales Website & Admission Portal',
        'Social Media Management (Facebook & Instagram)',
        'Full Lead Generation through Digital Campaigns',
        'Bulk WhatsApp & Email Services integration',
        'Complete Meta Ads (FB & Insta) & Google Ads support',
        'NEET-Qualification Filters (No more cold calling junk)',
        'Real-time Lead CRM & WhatsApp Alerts Sync',
        'Daily Optimization & Competitor Ad Monitoring'
      ],
      ctaText: 'Hire Us (₹15k Retainer)'
    },
    {
      id: 'onetime' as const,
      name: 'One Time Identity',
      tagline: 'Get elite, self-managed systems with zero ongoing fees.',
      price: '₹20,000',
      period: 'one-time',
      subtitle: 'Flat payment. 100% Ownership.',
      badge: 'Lifetime Handover',
      badgeColor: 'bg-amber-600/35 text-amber-300 border border-amber-500/30',
      borderColor: 'border-slate-700 hover:border-slate-600',
      bgColor: 'bg-slate-800/60',
      isPopular: false,
      features: [
        'Custom MBBS Abroad Admission Portal Build',
        'Complete Google Maps & Local SEO Setup',
        'Social Media Graphic templates & asset kit',
        'Meta Pixel, Google Tag Manager & Analytics setup',
        'Zero monthly subscription fees or retainers',
        'Full Source Code & Hosting Account Transfer',
        '1 Year Free Domain & Static Hosting guide'
      ],
      ctaText: 'Get One-Time Setup'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Decorative background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-900 text-xs font-semibold text-blue-400 mb-4 tracking-wide uppercase">
            <Shield className="w-3.5 h-3.5" />
            <span>Trusted Partner: MSME Registered & ISO 9001:2015 Process Certified</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-1 mb-5">
            Simple, High-ROI Subscription Plans
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Choose a plan that fits your consultancy size. Start your chosen package with a risk-free ₹500 queue deposit, or lock in our full retainer service.
          </p>
        </div>

        {/* Pricing Layout cards grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl ${plan.bgColor} ${plan.borderColor}`}
              id={`pricing-card-${plan.id}`}
            >
              <div>
                {/* Plan Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full ${plan.badgeColor}`}>
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl font-black tracking-tight text-white mt-3 flex items-center gap-1.5">
                      {plan.name}
                      {plan.isPopular && <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-400 text-xs leading-normal mb-6">
                  {plan.tagline}
                </p>

                {/* Plan Price */}
                <div className="mb-6 border-b border-slate-800 pb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">{plan.price}</span>
                    <span className="text-xs text-slate-400 font-semibold font-mono">/{plan.period}</span>
                  </div>
                  <span className="text-xs font-medium text-blue-400 block mt-1.5">
                    {plan.subtitle}
                  </span>
                </div>

                {/* Plan Features */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-300 leading-relaxed">
                      <Check className="w-4.5 h-4.5 text-blue-400 mr-2.5 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer CTA */}
              <div>
                <button
                  onClick={() => onOpenBooking(plan.id)}
                  className={`w-full text-center py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase active:scale-95 transition-all shadow-lg inline-flex items-center justify-center gap-1.5 cursor-pointer ${
                    plan.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20' 
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                  id={`pricing-cta-book-${plan.id}`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[10px] text-slate-500 text-center block mt-3 font-normal">
                  Requires ₹500 booking deposit to launch drafting process
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Footer Block */}
        <div className="mt-16 max-w-4xl mx-auto bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-amber-500 shrink-0" />
            <div>
              <span className="text-xs font-extrabold text-slate-200 block uppercase tracking-wider">MSME registered & ISO 9001:2015 agency partner</span>
              <span className="text-xs text-slate-400 block mt-0.5 leading-normal">
                ByteDepth delivers enterprise-grade code compliance, secure lead integrations, and certified delivery processes.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 shrink-0 font-medium">
            <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
            <span>Secured Deposit via Razorpay</span>
          </div>
        </div>

      </div>
    </section>
  );
}
