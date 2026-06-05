/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NicheCategory, FAQItem } from './types';

export const NICHES_DATA: NicheCategory[] = [
  {
    id: 'legal-finance',
    title: 'Legal & Financial',
    icon: 'Scale',
    color: 'blue',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'hover:border-blue-500',
    specialty: 'Chartered Accountants (CAs), Law Firms, CS, Wealth Managers',
    focus: 'Securing High-Value Inquiries & Building Immediate Regulatory Trust',
    professionals: [
      'Chartered Accountants (CAs)',
      'Corporate Lawyers',
      'Company Secretaries (CS)',
      'Wealth Managers',
      'Tax & Compliance Advisors',
      'Insurance Advisories'
    ],
    conversionCopy: 'Clients look for deep regulatory expertise and absolute confidentiality. Your custom landing page will feature trust badges, secure file-upload capabilities, integrated Google Reviews, and an automated Calendly discovery call intake system designed to capture top-tier corporate retainers.',
    mockPageLayout: {
      heroTitle: 'Secure, Professional Financial Advisory & Audit Services',
      heroSubtitle: 'Helping corporate enterprises and high-earning professionals maximize tax efficiency, secure compliance, and protect business wealth.',
      features: [
        '✓ Direct Consultation Booker (Integrated with Calendly/Zoom)',
        '✓ Client Portal Link with file-upload guidelines',
        '✓ Live Compliance Tracker & Interactive Tax Deadline Calendar',
        '✓ 128-bit Encrypted Contact Forms for Secure Client Intake'
      ],
      primaryCTA: 'Book Private Tax & Audit Review',
      trustStatement: '★ 4.9/5 Rating - Trusted by 250+ Business Founders across India.'
    }
  },
  {
    id: 'consulting',
    title: 'Consulting & Advisory',
    icon: 'UserCheck',
    color: 'emerald',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    borderColor: 'hover:border-emerald-500',
    specialty: 'Overseas Education, Immigration Coaches, HR, IT/Cybersecurity Experts',
    focus: 'Frictionless Evaluation Request & Discovery Session Bookings',
    professionals: [
      'Overseas Education Agencies',
      'Immigration & Visa Advisors',
      'Business Growth Strategy Consultants',
      'IT & Cybersecurity Experts',
      'Compliance & HR Advisors'
    ],
    conversionCopy: 'Advisory sales are built on credibility, process transparency, and quick triage. Your landing page will replace static PDFs with interactive eligibility calculators, visual milestone timelines (e.g., from Admission to Visa Approval), and high-intent case study reviews.',
    mockPageLayout: {
      heroTitle: 'Guaranteed University Admissions & Seamless Immigration Guidance',
      heroSubtitle: 'Navigate study-abroad programs and visa approvals with 98.4% success. Zero hidden fees. Direct mentorship from certified advisors.',
      features: [
        '✓ AI Eligibility Form (Dynamic qualification scoring)',
        '✓ Detailed Step-by-Step Educational Roadmaps',
        '✓ Live Visa Dashboard & Documentation Checklist',
        '✓ Daily Drop-In Callback System'
      ],
      primaryCTA: 'Check Eligibility & Book Call',
      trustStatement: '★ Authorized Partner with 80+ Global Elite Universities.'
    }
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Property',
    icon: 'Building2',
    color: 'amber',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    borderColor: 'hover:border-amber-500',
    specialty: 'Brokerages, Property Managers, Interior Designers, Architects',
    focus: 'Capturing Local Off-Market Buyer Leads & Interactive Portfolios',
    professionals: [
      'Real Estate Brokers',
      'Commercial Property Consultants',
      'Interior Designers',
      'Custom Home Architects',
      'Home Loan & Mortgage Advisors'
    ],
    conversionCopy: 'Real estate buys are intensely visual and hyper-local. We build ultra-fast loading showrooms with crisp image carousels, immersive virtual tour embeds, and 1-click WhatsApp map coordinate shares for site-visit bookings.',
    mockPageLayout: {
      heroTitle: 'Exclusive Premium Residences with Guaranteed Rental Yields',
      heroSubtitle: 'Pre-launch access to architectural masterworks in prime residential locations. Flexible payment options starting from ₹1.2 Cr.',
      features: [
        '✓ Download Premium Brochure (Unlocks on verified phone input)',
        '✓ Visual Grid of Current Available Properties with status lines',
        '✓ Virtual 3D Tour Embed or High-Definition Video Carousels',
        '✓ WhatsApp API Quick-Routing for instant site coordinators'
      ],
      primaryCTA: 'Get High-Res Brochure & Plan Visit',
      trustStatement: '✓ Registered with RERA. Zero Broking fee for early registrants.'
    }
  },
  {
    id: 'health-wellness',
    title: 'Health & Wellness',
    icon: 'Activity',
    color: 'rose',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-700',
    borderColor: 'hover:border-rose-500',
    specialty: 'Gyms, Yoga Studios, Nutritionists, Physiotherapists, Therapists',
    focus: 'Reducing Friction for First-Time Trials and Assessment Opt-Ins',
    professionals: [
      'Gyms & CrossFit Studios',
      'Yoga & Meditation Academies',
      'Dietitians & Nutritionists',
      'Physiotherapists & Joint Specialists',
      'Independent Mental Health Therapists'
    ],
    conversionCopy: 'Health and gym prospects make emotional, impulsive bookings. Your landing page features a frictionless "Trial Pass" or "Diet Calculator" to capture leads instantly, accompanied by gorgeous trainer bios, package details, and community video proof.',
    mockPageLayout: {
      heroTitle: 'Transform Your Body & Mind Under Certified Expert Elite Linemen',
      heroSubtitle: 'Tailored weight loss schemas, clinical physiotherapy rehabilatations, and organic meals built to sustain muscle longevity.',
      features: [
        '✓ Book 3-Day VIP Studio Pass (Zero Commitment)',
        '✓ Personalized Diet Estimator Integration',
        '✓ Clean Price Tables showing Single Session vs 12-Week Package',
        '✓ Authentic Video Success Stories with before-and-after tracks'
      ],
      primaryCTA: 'Get Your Free Pass Instantly',
      trustStatement: '✓ Rated Best Premium Training Facility 2024–2025.'
    }
  },
  {
    id: 'specialized-b2b',
    title: 'Specialized B2B',
    icon: 'Briefcase',
    color: 'violet',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-700',
    borderColor: 'hover:border-violet-500',
    specialty: 'Corporate Trainers, Supply Chain Advisory, PR, Photographers',
    focus: 'Communicating Clear B2B ROI, Corporate Credibility, & RFPs',
    professionals: [
      'Corporate Training Agencies',
      'Supply Chain & ISO Consultants',
      'Pr & Reputation Management Agencies',
      'Commercial & Corporate Photographers',
      'Event Planners & Corporate Organizers'
    ],
    conversionCopy: 'Corporate procurement departments demand case study proof, clear scopes, and structured PDF quotations. We formulate layouts that showcase concrete statistics, client roster logos, detailed service tiers, and automated request-for-quotes.',
    mockPageLayout: {
      heroTitle: 'Enterprise ISO Certification & Process Automation Advisory',
      heroSubtitle: 'Audit-ready business transformations. Accelerate global trading compliance, minimize production scrap, and secure global credibility.',
      features: [
        '✓ Download Detailed Service Catalog & Corporate Deck',
        '✓ Quantified Case Studies (e.g. "Saved ₹12L in Supply Chains")',
        '✓ Clear Three-Tier Enterprise Retainer Cards',
        '✓ NDA-backed Inquiry intake portal'
      ],
      primaryCTA: 'Request Executive Proposals',
      trustStatement: '✓ Over 18 Years of Certified ISO Consulting and Audit Audits.'
    }
  },
  {
    id: 'creative-portfolio',
    title: 'Creative Portfolio',
    icon: 'Compass',
    color: 'pink',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-700',
    borderColor: 'hover:border-pink-500',
    specialty: 'Voiceover Artists, Brand Strategists, Public Figure Actors, Influencers',
    focus: 'Filtering Low-Budget Prospects, Showing Dynamic Media, & High CTAs',
    professionals: [
      'Professional Voiceover Artists',
      'Brand & Identity Consultants',
      'Actors, Public Speakers, and Models',
      'Digital Creators & Content Executives',
      'Consulting Coach Portfolios'
    ],
    conversionCopy: 'Your personal brand is your absolute currency. Stop sending messy Linktree links, Google Drives, or YouTube URLs. We consolidate your pristine audio reels, design case studies, or video sizzles into one high-converting digital calling card that command premium fees.',
    mockPageLayout: {
      heroTitle: 'Direct Voiceover Artist & Brand Sound Strategist',
      heroSubtitle: 'Deep, conversational, and authoritative bilingual voiceover for commercials, documentaries, and explainer videos.',
      features: [
        '✓ Built-in HTML5 Audio Soundreel Players (Instantly playable)',
        '✓ Filtered "Select Client Showreel" Grid',
        '✓ transparent booking rate cards (Commercial / Broadcast)',
        '✓ 1-Click WhatsApp Studio Availability Checker'
      ],
      primaryCTA: 'Listen to Soundreels & Check Dates',
      trustStatement: '✓ Proud Voice Behind Brands like BMW, Audi, and Tech Corp.'
    }
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: 'How does the ₹500 booking offer work?',
    answer: 'It is a risk-free engagement model: you fill out our inquiry form, selecting your preferred style and providing basic service info. You then pay a committing booking deposit of just ₹500 via our secure Razorpay gateway. Our development team begins building a active live prototype, hosted on our servers. In 24 to 72 hours, we send you a private review link.'
  },
  {
    id: 2,
    question: 'What happens if I don’t like the custom demo?',
    answer: 'If the demo does not meet your expectations or branding vision, simply tell us. You can request up to two rounds of design revisions completely free of charge. If you still decide it is not for you, there is zero obligation to pay the remaining balance. We keep the demo, and you walk away. No lock-ins, no complicated sales contracts.'
  },
  {
    id: 3,
    question: 'What is included in the full ₹9,999 package?',
    answer: 'The ₹9,999 package is all-inclusive for modern professionals. It covers: custom landing page design, secure contact forms, integrated social channels or reviews, mobile optimization, SEO foundations, fast CDN hosting setup, direct WhatsApp and Calendly widgets, and 30 days of free post-launch support. (Domain name is registered on client account directly, keeping you in full legal ownership of your brand).'
  },
  {
    id: 4,
    question: 'Is there support for custom e-commerce or multi-page systems?',
    answer: 'Yes! While single-page landing sites are the absolute champion for lead-generation and professional services, we offer customized upsells for full product catalogs, client dashboards, dynamic newsletters, and payment integrations. Once we establish contact during your demo review, we will provide a specialized quote matching your precise enterprise parameters.'
  },
  {
    id: 5,
    question: 'What is ByteDepth’s ISO 9001:2015 certification?',
    answer: 'ByteDepth is operated under certified quality standards for web development, system architecture, and UX engineering. This means our delivery parameters (24-72 hours) are rigorously structured, our codes conform to top accessibility and security vectors, and we maintain precise delivery checklists to prevent any post-launch bugs.'
  },
  {
    id: 6,
    question: 'How do I pay the remaining balance?',
    answer: 'Once you review your fully completed live demo and say, "This is perfect, let’s take it live!", we will send you a final Razorpay payment invoice for the remaining balance of ₹9,499. Once received, we configure your custom domain name (e.g., yourname.com) and deploy the site live to the cloud.'
  }
];
