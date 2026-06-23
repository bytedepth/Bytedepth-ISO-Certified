/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Laptop, 
  Smartphone, 
  ExternalLink, 
  CreditCard, 
  Phone, 
  Mail, 
  User, 
  Briefcase, 
  CheckCircle2, 
  FileText,
  Clock,
  Trash2,
  Lock,
  ArrowRight,
  X
} from 'lucide-react';
import { NICHES_DATA } from '../data';
import { BookingRequest } from '../types';

interface BookingFormProps {
  selectedNicheId?: string;
  selectedPlanId: 'complete' | 'basic' | 'onetime';
  onPlanChange: (plan: 'complete' | 'basic' | 'onetime') => void;
  onBookingSubmittedStatusChange: (hasBooking: boolean) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingForm({ 
  selectedNicheId, 
  selectedPlanId,
  onPlanChange,
  onBookingSubmittedStatusChange,
  isOpen,
  onClose
}: BookingFormProps) {
  // Local state for multi-step form wizard
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [niche, setNiche] = useState<string>('website-redesign');
  const [businessName, setBusinessName] = useState<string>('');
  const [goals, setGoals] = useState<string>('');
  const [customDomainReq, setCustomDomainReq] = useState<boolean>(true);
  const [designStyle, setDesignStyle] = useState<'modern-dark' | 'clean-corporate' | 'warm-organic' | 'creative-bold'>('clean-corporate');

  const getPlanDetails = (planId: 'complete' | 'basic' | 'onetime') => {
    switch(planId) {
      case 'basic':
        return { name: 'Basic Plan', cost: '₹300/day', retainer: 'Billed monthly (₹9,000)' };
      case 'onetime':
        return { name: 'One Time Identity', cost: '₹20,000', retainer: 'One-time Payment' };
      case 'complete':
      default:
        return { name: 'Complete Package', cost: '₹600/day', retainer: 'Monthly Retainer: ₹15,000 (Hire Us!)' };
    }
  };

  const getPlanBalanceText = (planId: 'complete' | 'basic' | 'onetime') => {
    switch(planId) {
      case 'basic':
        return 'Balance of ₹8,500 settling only upon mockup approval.';
      case 'onetime':
        return 'Balance of ₹19,500 settling only upon mockup approval.';
      case 'complete':
      default:
        return 'Balance of ₹14,500 settling only upon mockup approval.';
    }
  };
  
  // Stored application brief state
  const [savedBooking, setSavedBooking] = useState<BookingRequest | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  // Check for existing booking on load
  useEffect(() => {
    const existing = localStorage.getItem('bytedepth_booking');
    if (existing) {
      try {
        const parsed = JSON.parse(existing) as BookingRequest;
        setSavedBooking(parsed);
        onBookingSubmittedStatusChange(true);
      } catch (e) {
        console.error('Failed to parse local stored brief:', e);
      }
    }
  }, [onBookingSubmittedStatusChange]);

  // Adjust chosen niche if user selected one from standard cards
  useEffect(() => {
    if (selectedNicheId) {
      setNiche(selectedNicheId);
    }
  }, [selectedNicheId]);

  const handleNextStep = () => {
    if (step === 1) {
      // Validate step 1 fields if needed
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !businessName) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    const newBooking: BookingRequest = {
      id: 'BD-PROCT-' + Math.floor(100000 + Math.random() * 900000),
      name,
      email,
      phone,
      niche,
      businessName,
      goals,
      customDomainReq,
      designStyle,
      selectedPlan: selectedPlanId,
      submittedAt: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    localStorage.setItem('bytedepth_booking', JSON.stringify(newBooking));
    setSavedBooking(newBooking);
    onBookingSubmittedStatusChange(true);
    setShowSuccessModal(true);
    setShowToast(true);
    
    // Auto-dismiss floating toast after 8 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 8000);

    // Transition directly to complete brief view
    setStep(3);
  };

  const handleResetBooking = () => {
    if (confirm('Are you sure you want to discard your draft project brief and start over?')) {
      localStorage.removeItem('bytedepth_booking');
      setSavedBooking(null);
      onBookingSubmittedStatusChange(false);
      setStep(1);
      
      // Clear inputs
      setName('');
      setEmail('');
      setPhone('');
      setBusinessName('');
      setGoals('');
    }
  };

  // Styles definitions matching user style preference
  const designStylesConfig = {
    'modern-dark': {
      bg: 'bg-slate-950 text-white',
      accent: 'border-blue-500 text-blue-400',
      heroGrad: 'from-blue-500 via-indigo-400 to-indigo-600',
      lbl: 'Modern Minimal Dark Theme'
    },
    'clean-corporate': {
      bg: 'bg-slate-50 text-slate-900',
      accent: 'border-blue-600 text-blue-700',
      heroGrad: 'from-blue-700 via-blue-800 to-indigo-900',
      lbl: 'Clean Professional Corporate'
    },
    'warm-organic': {
      bg: 'bg-stone-50 text-stone-900',
      accent: 'border-amber-600 text-amber-700',
      heroGrad: 'from-amber-700 via-amber-800 to-stone-900',
      lbl: 'Warm Editorial Organic'
    },
    'creative-bold': {
      bg: 'bg-violet-950 text-white',
      accent: 'border-pink-500 text-pink-400',
      heroGrad: 'from-pink-500 via-purple-400 to-violet-600',
      lbl: 'Vibrant Creative Bold'
    }
  };

  const activeStyleInfo = designStylesConfig[designStyle];

  return (
    <section id="booking-form" className="py-20 bg-slate-50 font-sans border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Workspace Hub display if they have already submitted */}
        {savedBooking ? (
          <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 md:p-10 text-left">
            
            {/* Header info bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-[10px] uppercase font-mono bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded font-bold tracking-wider inline-block">
                  ● ACTIVE WORKSPACE
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-2">
                  Project Ref: <span className="font-mono text-blue-600">{savedBooking.id}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Draft registered on {savedBooking.submittedAt}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleResetBooking}
                  className="bg-red-50 text-red-600 hover:bg-red-100 text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
                  title="Discard Draft Brief"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Start a New Draft</span>
                </button>
              </div>
            </div>

            {/* Tracker Step Indicators */}
            <div className="my-8 bg-slate-50 border border-slate-100 p-4 rounded-2xl">
              <span className="text-xs font-bold text-slate-700 block mb-3">
                Task Status Checkpoints
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-lg border border-emerald-100 flex items-center gap-2.5">
                  <div className="bg-emerald-500 text-white rounded-full p-0.5">
                    <Check className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block leading-tight">1. Scope Layout Filed</span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">Specifications completed</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-amber-200 flex items-center gap-2.5 animate-pulse">
                  <div className="w-5 h-5 bg-amber-500 text-white rounded-full text-[10px] font-black flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block leading-tight">2. Queue Deposit Check</span>
                    <span className="text-[9px] text-amber-600 font-medium block mt-0.5">Submit ₹500 booking</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-100 flex items-center gap-2.5 opacity-60">
                  <div className="w-5 h-5 bg-slate-300 text-white rounded-full text-[10px] font-black flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block leading-tight">3. Live Staging URL</span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">Delivery in 24-72 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Dynamic Draft Preview Box */}
            <div className="mb-8">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-widest block mb-2 px-1">
                Dynamic Design Wireframe Generator (Interactive)
              </span>
              
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow">
                <div className="bg-slate-100 px-3.5 py-2.5 border-b border-white/20 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">
                    Theme: {designStylesConfig[savedBooking.designStyle]?.lbl || savedBooking.designStyle}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>

                <div className={`p-6 ${designStylesConfig[savedBooking.designStyle]?.bg || 'bg-slate-50'} min-h-[180px] flex flex-col justify-between transition-colors`}>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">
                      {savedBooking.businessName || 'Your Premium Business'}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold tracking-tight mt-1 mb-2">
                       We are professional {NICHES_DATA.find(n=>n.id === savedBooking.niche)?.title} advisors.
                    </h4>
                    <p className="text-xs opacity-75 max-w-lg leading-relaxed">
                      {savedBooking.goals || "I want to attract more high-quality corporate inquiries and establish top tier confidence."}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/20 flex justify-between items-center">
                    <span className="text-[9px] max-w-xs opacity-50 block leading-tight">
                       ByteDepth live-gen preview pipeline. We customize real typography, shadows, icons, and layout in the actual staging link.
                    </span>
                    <div className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                      Book Now
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Razorpay Call to Action Box */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl">
              <h4 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <span>Next Step: Secure Development Slot</span>
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                To initiate active mock-up compilation on our development servers, please process the minor risk-free deposit of <strong className="text-slate-800">₹500</strong>. Bytedepth processes all secure transactions directly via our official verified Razorpay gateway.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a 
                  href="https://rzp.io/rzp/rhiCOcPi"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-center font-bold text-sm px-6 py-4 rounded-xl shadow-lg transition-transform duration-150 inline-flex items-center justify-center gap-1.5 cursor-pointer hover:scale-101"
                  id="workspace-razorpay-btn"
                >
                  <span>Processed Booking on Razorpay (₹500)</span>
                  <ExternalLink className="w-4.5 h-4.5 text-white/95" />
                </a>

                <div className="space-y-1 py-1 px-2">
                  <span className="text-xs font-semibold text-slate-800 block">✓ 100% Satisfaction or walk away</span>
                  <span className="text-[10px] text-slate-500 block leading-none">{getPlanBalanceText(selectedPlanId)}</span>
                </div>
              </div>

              {/* Verified badges */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Lock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-medium">100% Encrypted Gateway</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="text-[11px] font-medium">Auto Receipt Generation</span>
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-1.5 text-slate-500 h-full">
                  <span className="text-[10px] text-slate-400">Merchant Name: Bytedepth</span>
                </div>
              </div>
            </div>

          </div>
        ) : (
          
          /* Form wizard interface if no previous booking exists */
          <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-left font-sans">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 md:p-8 text-white">
              <span className="text-[10px] font-bold bg-white/20 px-2.5 py-1 rounded text-white uppercase tracking-wider">
                Frictionless Scope Manager
              </span>
              <h3 className="font-display text-2xl font-extrabold text-white mt-3">
                Reserve Your Custom Live Demo Room
              </h3>
              <p className="text-xs text-white/85 mt-2 leading-relaxed">
                Fill core instructions below. Secure booking for ₹500. Receive a complete responsive live review prototype inside 24 to 72 hours.
              </p>
            </div>

            {/* Stepper Progress bar */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 bg-slate-50 select-none">
              <div className="flex items-center space-x-7 text-xs font-semibold">
                <span className={`pb-1 ${step === 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}>
                  1. Brand & Aesthetic Goals
                </span>
                <span className={`pb-1 ${step === 2 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}>
                  2. Business Contact Specs
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-400">
                Step {step} of 2
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="p-6 md:p-8 space-y-6">
              
              {/* Step 1 Form */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in">
                  
                  {/* Business Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 tracking-wide uppercase flex justify-between">
                      <span>Consultancy / Practice Name *</span>
                      <span className="text-[10px] text-slate-400 font-normal">e.g. Royal MBBS Careers</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Apex Abroad Medical Consultant"
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none transition text-slate-800"
                        id="form-business-name"
                      />
                    </div>
                  </div>

                  {/* Package Plan selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 tracking-wide uppercase flex justify-between">
                      <span>Select Subscription Plan / Package *</span>
                      <span className="text-[10px] text-blue-600 font-bold">Starts with ₹500 deposit</span>
                    </label>
                    <select
                      value={selectedPlanId}
                      onChange={(e) => onPlanChange(e.target.value as 'complete' | 'basic' | 'onetime')}
                      className="w-full px-3.5 py-3 border border-slate-250 bg-slate-50/50 rounded-xl text-sm focus:border-blue-500 focus:outline-none bg-white text-slate-800 font-bold"
                      id="form-plan-select"
                    >
                      <option value="complete">Complete Package (₹600/day | ₹15,000 Monthly Retainer) - Recommended</option>
                      <option value="basic">Basic Plan (₹300/day | ₹9,000 Billed Monthly)</option>
                      <option value="onetime">One Time Digital Identity (₹20,000 One-time)</option>
                    </select>
                  </div>

                  {/* Niche Dropdown selector */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                        Select Target Practice *
                      </label>
                      <select 
                        value={niche}
                        onChange={(e) => setNiche(e.target.value)}
                        className="w-full px-3.5 py-3 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none bg-white text-slate-800"
                        id="form-niche-select"
                      >
                        {NICHES_DATA.map(n => (
                          <option key={n.id} value={n.id}>{n.title}</option>
                        ))}
                      </select>
                    </div>

                    {/* Style selector dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                        Layout Styling Flavor
                      </label>
                      <select 
                        value={designStyle}
                        onChange={(e) => setDesignStyle(e.target.value as any)}
                        className="w-full px-3.5 py-3 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none bg-white text-slate-800"
                        id="form-style-select"
                      >
                        <option value="clean-corporate">Clean Corporate (Highly Recommended)</option>
                        <option value="modern-dark">Modern Dark Minimalist</option>
                        <option value="warm-organic">Warm Organic Editorial</option>
                        <option value="creative-bold">Vibrant Creative Bold</option>
                      </select>
                    </div>
                  </div>

                  {/* Custom Domain scope */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="customDomainReq"
                      checked={customDomainReq}
                      onChange={(e) => setCustomDomainReq(e.target.checked)}
                      className="accent-blue-600 rounded mt-0.5"
                    />
                    <label htmlFor="customDomainReq" className="text-xs text-slate-600 select-none cursor-pointer">
                      <strong className="text-slate-800 font-semibold block">I already have or want a custom domain (e.g. myname.com)</strong>
                      We configure domain DNS mapping completely free of charge after satisfying the mockup approval.
                    </label>
                  </div>

                  {/* Pitch Objectives / Short brief details */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 tracking-wide uppercase flex justify-between">
                      <span>Primary Target Goals / Project Scope Notes</span>
                      <span className="text-[10px] text-slate-400 font-normal">Optional</span>
                    </label>
                    <textarea 
                      value={goals}
                      onChange={(e) => setGoals(e.target.value)}
                      placeholder="e.g. I want to highlight my study visa success rates, feature high resolution logos of partners, and have a clear consultation form that integrates with WhatsApp."
                      rows={3}
                      className="w-full px-3.5 py-3 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none transition leading-relaxed text-slate-800"
                      id="form-goals"
                    />
                  </div>

                  {/* Nav Step Controls */}
                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      disabled={!businessName}
                      className={`px-6 py-3.5 rounded-xl font-bold text-xs inline-flex items-center gap-1 cursor-pointer transition ${
                        businessName 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                      id="form-step1-next"
                    >
                      <span>Continue to Contact</span>
                      <ChevronRight className="w-4.5 h-4.5" />
                    </button>
                  </div>

                </div>
              )}

              {/* Step 2 Form */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  
                  {/* Dynamic Alert Banner about safety */}
                  <div className="bg-blue-50 border border-blue-100 text-blue-700 text-xs px-4 py-3.5 rounded-xl flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>ISO 9001:2015 Encrypted Intake Panel</strong>
                      <p className="mt-1 text-slate-600 leading-normal">
                        Your private data is secured. We only use this information to send you your private draft address link. Bytedepth NEVER shares coordinate credentials.
                      </p>
                    </div>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                      Contact Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Anoop Sharma"
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none transition text-slate-800"
                        id="form-name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. anoop@vermaaudit.com"
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none transition text-slate-800"
                          id="form-email"
                        />
                      </div>
                    </div>

                    {/* Phone field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                        WhatsApp Contact Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          type="tel" 
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none transition text-slate-800"
                          id="form-phone"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Summary recap block */}
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center justify-between text-xs">
                    <div>
                      <span className="text-slate-400 uppercase font-mono tracking-wider block">Scope review</span>
                      <strong className="text-slate-800 font-semibold mt-0.5 block">{businessName || 'Your Consultancy'} ({NICHES_DATA.find(n=>n.id === niche)?.title})</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 block font-mono">{getPlanDetails(selectedPlanId).name}</span>
                      <strong className="text-blue-600 font-bold mt-0.5 block text-xs">
                        {getPlanDetails(selectedPlanId).cost} / {selectedPlanId === 'onetime' ? 'one-time' : 'day'}
                      </strong>
                      <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">{getPlanDetails(selectedPlanId).retainer}</span>
                    </div>
                  </div>

                  {/* Navigation steps and action CTA buttons */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-4 py-3 border border-slate-250 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-xs inline-flex items-center gap-1 cursor-pointer transition text-left"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      disabled={!name || !email || !phone}
                      className={`px-7 py-3.5 rounded-xl font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer transition text-left shadow-lg ${
                        name && email && phone 
                          ? 'hover-pulse-btn bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/20 text-white' 
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed font-medium'
                      }`}
                      id="form-submit-btn"
                    >
                      <span>Create Project Workspace</span>
                      <ArrowRight className="w-4.5 h-4.5 text-white/90" />
                    </button>
                  </div>

                </div>
              )}

            </form>
          </div>
        )}

      </div>

      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <div 
            className="absolute inset-0 bg-slate-950/65 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setShowSuccessModal(false)}
          ></div>
          
          {/* Content Box */}
          <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-slate-100 transform transition-all scale-100 animate-fade-in text-left">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="bg-emerald-100 text-emerald-800 p-3 rounded-2xl shrink-0">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded inline-block uppercase tracking-wider">
                  ● Submission Registered
                </span>
                <h4 className="text-xl font-display font-extrabold text-slate-950 mt-1 leading-tight">
                  Brief Setup Completed Successfully!
                </h4>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                Your project workspace has been allocated. Your temporary project reference is <span className="font-mono bg-slate-100 text-blue-600 px-2 py-0.5 rounded font-bold">{savedBooking?.id || 'BD-PROCT-PENDING'}</span>.
              </p>

              <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl space-y-2.5">
                <span className="text-xs font-bold text-slate-800 block">Next Sprints Checklist:</span>
                
                <div className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                  <span className="text-emerald-500 font-bold shrink-0">1.</span>
                  <span>
                    <strong>Secure development slot:</strong> Finish processing the ₹500 booking retainer via Razorpay on your Client Workspace hub.
                  </span>
                </div>

                <div className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                  <span className="text-emerald-500 font-bold shrink-0">2.</span>
                  <span>
                    <strong>Draft Assembly:</strong> Our ISO accredited engineers compile your assets. Your dynamic live staging link goes active in <strong className="text-slate-800">24-72 hours</strong>.
                  </span>
                </div>

                <div className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                  <span className="text-emerald-500 font-bold shrink-0">3.</span>
                  <span>
                    <strong>Live Approval:</strong> Review the custom design layout. Request changes if needed. Pay the remainder ₹9,499 only when 100% satisfied!
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 text-blue-850 p-3.5 rounded-xl text-xs flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Our ISO 9001 intake system sent a brief verification copy to your WhatsApp!</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-slate-100 text-slate-700 font-bold text-xs py-3.5 rounded-xl hover:bg-slate-200 transition cursor-pointer text-center"
              >
                Close & Check Workspace
              </button>
              <a
                href="https://rzp.io/rzp/rhiCOcPi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-pulse-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3.5 rounded-xl shadow-lg shadow-blue-500/10 inline-flex items-center justify-center gap-1 cursor-pointer text-center"
              >
                <span>Pay Retainer Now (₹500)</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating React Toast notification */}
      {showToast && (
        <div className="fixed bottom-6 left-6 z-50 max-w-sm w-full bg-slate-900 border border-slate-800 text-white p-5 rounded-2xl shadow-2xl anim-fade-in flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Status Alert</p>
                <h5 className="text-sm font-bold text-white tracking-tight">Booking Request Received!</h5>
              </div>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="text-slate-400 hover:text-white transition cursor-pointer p-0.5"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="text-xs text-slate-350 leading-relaxed border-t border-slate-800/85 pt-2.5 space-y-2">
            <p>Your workspace is being configured. Next steps:</p>
            <ul className="list-none space-y-1.5 text-slate-300 pl-0">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-450 font-bold">1.</span>
                <span>Submit ₹500 booking retainer to secure sprint slots.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-455 font-bold">2.</span>
                <span>Wait 24-72 hours for our ISO certified drafts.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-450 font-bold">3.</span>
                <span>Check WhatsApp for status tracking copies.</span>
              </li>
            </ul>
          </div>
          
          {/* Progress Timer countdown bar */}
          <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-1">
            <div className="bg-blue-50 h-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
        </div>
      )}

    </section>
  );
}
