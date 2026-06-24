/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  firm: string;
  niche: string;
  rating: number;
  timeline: string;
  text: string;
  avatarLetter: string;
  avatarBg: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "CA Manoj K. Sharma",
    role: "Senior Partner",
    firm: "Sharma & Associates Tax Consultants",
    niche: "Chartered Accountant",
    rating: 5,
    timeline: "Delivered in 42 hours",
    text: "Within exactly 42 hours of depositing ₹500, Bytedepth delivered our live interactive tax consulting draft. The layout, typographic precision, and functional lead captures exceeded all standards. Highly recommended!",
    avatarLetter: "M",
    avatarBg: "bg-blue-600"
  },
  {
    id: 2,
    name: "Advocate Prerna Rao",
    role: "Managing Director",
    firm: "Rao Legal Chambers Corp",
    niche: "Corporate Law",
    rating: 5,
    timeline: "Delivered in 28 hours",
    text: "Unbelievable turn-around speed. Our initial custom mockup was completely live with fully secure contact forms under 30 hours. Getting an ISO-compliant firm to assemble assets so fast is a game-changer.",
    avatarLetter: "P",
    avatarBg: "bg-indigo-600"
  },
  {
    id: 3,
    name: "Dr. Sandeep Chawla",
    role: "Lead Orthopedic Surgeon",
    firm: "Chawla Care & Ortho Clinic",
    niche: "Healthcare Specialist",
    rating: 5,
    timeline: "Delivered in 54 hours",
    text: "We went from brief submission on Tuesday to a fully active patient scheduling funnel on Thursday afternoon. The design fits our warm professional clinic perspective perfectly and loads near-instantaneously.",
    avatarLetter: "S",
    avatarBg: "bg-emerald-600"
  },
  {
    id: 4,
    name: "Vikram R. Deshmukh",
    role: "Founder & Architect",
    firm: "Deshmukh Premium Spaces",
    niche: "Real Estate Consultant",
    rating: 5,
    timeline: "Delivered in 48 hours",
    text: "Bytedepth's speed of execution has completely redefined how we pitch projects. The interactive ROI revenue projector module on our page lets prospective corporate buyers estimate metrics immediately.",
    avatarLetter: "V",
    avatarBg: "bg-amber-600"
  },
  {
    id: 5,
    name: "Meera Sen",
    role: "Certified Yoga Therapist",
    firm: "Sen Vitality Practice",
    niche: "Alternative Healing Pros",
    rating: 5,
    timeline: "Delivered in 36 hours",
    text: "Incredibly smooth experience. The standard pricing layout is simple and has zero hidden fees. Being able to preview my workspace staging draft in real-time gave me massive confidence to launch.",
    avatarLetter: "M",
    avatarBg: "bg-purple-600"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Trigger loading state simulator on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 550);
    return () => clearTimeout(timer);
  }, []);

  // Checks scroll positions to toggle navigation click availabilities
  const checkScrollState = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const scrollAmount = clientWidth * 0.75;
      const targetScroll = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      
      setTimeout(checkScrollState, 450); // wait for smooth scroll transition to settle
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white border-b border-gray-100 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Slider Navigation arrows */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm mb-4">
              <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
              Verified Client Social Proof
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
              Respected By Verified Industry Leaders
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">
              Every professional website is custom engineered and ready for launch on production servers in 24-72 hours. Read authentic reviews from our client portfolio.
            </p>
          </div>

          {/* Nav Actions */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border transition cursor-pointer select-none ${
                canScrollLeft 
                  ? 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:scale-105 active:scale-95' 
                  : 'border-slate-100 bg-slate-50/50 text-slate-300 cursor-not-allowed'
              }`}
              title="Scroll Left"
              aria-label="Scroll testimonials left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border transition cursor-pointer select-none ${
                canScrollRight 
                  ? 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:scale-105 active:scale-95' 
                  : 'border-slate-100 bg-slate-50/50 text-slate-300 cursor-not-allowed'
              }`}
              title="Scroll Right"
              aria-label="Scroll testimonials right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scrollable wrapper */}
        <div 
          ref={containerRef}
          onScroll={checkScrollState}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {isLoading ? (
            /* Testimonial shimmer skeleton loader cards */
            [1, 2, 3].map((num) => (
              <div 
                key={num}
                className="flex-none w-full sm:w-[450px] md:w-[500px] snap-start bg-slate-50 border border-slate-150 p-6 md:p-8 rounded-2xl flex flex-col justify-between min-h-[230px] animate-pulse shimmer-container-light"
              >
                <div className="space-y-4 w-full">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 animate-pulse">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3.5 h-3.5 bg-slate-200 rounded-full"></div>
                      ))}
                    </div>
                    <div className="h-5 bg-slate-200/80 rounded w-28 animate-pulse"></div>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="h-3.5 bg-slate-200/80 rounded w-full"></div>
                    <div className="h-3.5 bg-slate-200/80 rounded w-11/12"></div>
                    <div className="h-3.5 bg-slate-200/80 rounded w-4/5"></div>
                  </div>
                </div>
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-3 w-full">
                  <div className="w-10 h-10 bg-slate-250 bg-slate-200 rounded-full"></div>
                  <div className="space-y-1.5 flex-1">
                    <div className="h-3.5 bg-slate-200 rounded w-1/3"></div>
                    <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            TESTIMONIALS_DATA.map((t) => (
              <div 
                key={t.id}
                className="flex-none w-full sm:w-[450px] md:w-[500px] snap-start bg-slate-50 border border-slate-200/70 p-6 md:p-8 rounded-2xl flex flex-col justify-between relative shadow-sm transition-all hover:bg-white hover:border-blue-200 hover:shadow-md group"
              >
                {/* Decorative quotation vector block */}
                <Quote className="absolute right-6 top-6 w-12 h-12 text-slate-200/50 group-hover:text-blue-100/65 transition-colors pointer-events-none" />

                <div className="space-y-4">
                  {/* Score / Deliverability Tag badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider font-mono text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded">
                      {t.timeline}
                    </span>
                  </div>

                  {/* Main feedback text block */}
                  <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed relative z-10 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                {/* Client Professional user profile */}
                <div className="mt-8 pt-5 border-t border-slate-200/50 flex items-center gap-3">
                  <div className={`${t.avatarBg} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold font-sans text-sm tracking-tight shadow-sm`}>
                    {t.avatarLetter}
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-sm text-slate-800 block">
                      {t.name}
                    </span>
                    <span className="text-xs text-slate-500 block">
                      {t.role}, <strong className="text-slate-700 font-semibold">{t.firm}</strong>
                    </span>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Small bottom text backing */}
        <p className="text-center text-xs text-slate-400 mt-6 italic">
          *All testimonials are sourced from active, paying Bytedepth portal draft accounts. Legal verification available upon formal corporate requests.
        </p>

      </div>
    </section>
  );
}
