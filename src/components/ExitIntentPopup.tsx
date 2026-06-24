/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { X, Gift, PhoneCall, ArrowRight, MessageSquare, Sparkles, CheckCircle } from 'lucide-react';

interface ExitIntentPopupProps {
  onOpenBooking: () => void;
}

export default function ExitIntentPopup({ onOpenBooking }: ExitIntentPopupProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [niche, setNiche] = useState<string>('website-redesign');

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      // Check if mouse left from the top of the viewport (indicating closing tab/moving to address bar)
      if (event.clientY < 35) {
        const hasSeen = sessionStorage.getItem('bytedepth_exit_intent_seen');
        if (!hasSeen) {
          setIsOpen(true);
          sessionStorage.setItem('bytedepth_exit_intent_seen', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Simulate submission registering
    setIsSubmitted(true);

    // Save minimal contact info in localStorage for booking form pre-population
    localStorage.setItem('bytedepth_exit_consultation', JSON.stringify({ name, phone, niche }));
    
    // Auto redirect text preview to WhatsApp with personalized text
    const textMsg = `Hi ByteDepth! My name is ${name}. I am an MBBS Abroad Consultant and I just claimed my free 15-minute consultation on your portal for my student recruitment business (${niche} focus). Let's discuss a web asset demo!`;
    const formattedMsg = encodeURIComponent(textMsg);
    
    setTimeout(() => {
      try {
        window.open(`https://wa.me/919696775989?text=${formattedMsg}`, '_blank');
      } catch (err) {
        console.warn('Could not open WhatsApp link from within iframe, redirecting location instead:', err);
        try {
          window.location.href = `https://wa.me/919696775989?text=${formattedMsg}`;
        } catch (innerErr) {
          console.error('Failed to redirect:', innerErr);
        }
      }
      setIsOpen(false);
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop Backdrop blur */}
      <div 
        className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Main dialog box */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-slate-100 transform transition-all scale-100 animate-fade-in text-left overflow-hidden">
        
        {/* Banner highlight badge */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500"></div>

        {/* Close Button top-right */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition cursor-pointer p-1.5 rounded-full hover:bg-slate-50"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-display font-extrabold text-slate-950">
              Consultation Ticket Provisioned!
            </h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Redirecting you to our secure technical WhatsApp desk to lock in your live calendar slot in real-time...
            </p>
            <div className="w-12 h-1 bg-emerald-550 mx-auto rounded-full animate-pulse"></div>
          </div>
        ) : (
          <div>
            {/* Header section with discount/gift highlight */}
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl shrink-0">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded inline-block uppercase tracking-wider">
                  ● Exclusive Exit Offer
                </span>
                <h4 className="text-lg md:text-xl font-display font-black text-slate-950 mt-1 leading-tight">
                  Wait! Before You Leave Today...
                </h4>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Get an absolute <strong className="text-slate-950">Free 15-Minute Blueprint Consultation (₹2,500 Value)</strong> with an ISO 9001 certified advisor. We will map your complete high-intent conversion funnel. No pushy sales calls, guaranteed.
            </p>

            {/* List of high-value takeaways */}
            <div className="space-y-3 bg-slate-50 border border-slate-100 p-4 rounded-2xl mb-6">
              <span className="text-xs font-bold text-slate-900 block uppercase tracking-wider">What We Pack In 15 Mins:</span>
              
              <div className="flex items-start gap-2.5 text-xs text-slate-600">
                <Sparkles className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Interactive UI mockup advice:</strong> Review layout elements for your personal industry niche.
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-600">
                <Sparkles className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Custom conversion pathways:</strong> Locate where loose visitor traffic exits your templates.
                </span>
              </div>
            </div>

            {/* Form client-intake fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="exit-name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 pl-1">
                    Your Name
                  </label>
                  <input
                    id="exit-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Amit / Royal Overseas"
                    className="w-full text-xs px-3.5 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-slate-900"
                  />
                </div>
                <div>
                  <label htmlFor="exit-phone" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 pl-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="exit-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full text-xs px-3.5 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="exit-niche" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 pl-1">
                  Your Specialized Package/Service
                </label>
                <select
                  id="exit-niche"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full text-xs px-3.5 py-3 border border-slate-200 bg-white rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-slate-800"
                >
                  <option value="website-redesign">Website Redesign & Re-MVP</option>
                  <option value="meta-google-ads">Meta & Google Ads Campaign</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="whatsapp-email">Bulk WhatsApp & Email Services</option>
                  <option value="local-seo">Local SEO & Google Maps</option>
                  <option value="complete-package">All-in-One Complete Package</option>
                </select>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                    onOpenBooking();
                  }}
                  className="w-full sm:w-2/5 bg-slate-100 hover:bg-slate-201 text-slate-700 font-bold text-xs py-3.5 rounded-xl transition cursor-pointer text-center"
                >
                  Configure ₹500 Draft
                </button>
                
                <button
                  type="submit"
                  disabled={!name || !phone}
                  className={`hover-pulse-btn w-full sm:w-3/5 font-bold text-xs py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center text-white ${
                    name && phone 
                      ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/10' 
                      : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <span>Claim Call via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
