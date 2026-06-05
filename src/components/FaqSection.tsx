/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data';

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1); // Default keep first item open

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-white font-sans border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <HelpCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Answered Questions
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Have questions about ByteDepth’s development sprints or hosting support? Review our core answers below.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-blue-500 bg-blue-50/20 shadow-md shadow-blue-500/5' 
                    : 'border-slate-200 bg-white hover:border-slate-350'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => handleToggle(faq.id)}
                  className="w-full text-left px-5 py-4.5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-bold text-sm text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} />
                </button>

                {/* Accordion Text content */}
                {isOpen && (
                  <div className="px-5 pb-5 border-t border-slate-100 pt-3 animate-fade-in text-xs leading-relaxed text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
