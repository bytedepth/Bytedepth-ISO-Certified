/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NicheCategory, FAQItem } from './types';

export const NICHES_DATA: NicheCategory[] = [
  {
    id: 'website-redesign',
    title: 'Website Redesign & Re-MVP',
    icon: 'Laptop',
    color: 'blue',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'hover:border-blue-500',
    specialty: 'High-Conversion MBBS Admission Portals & Landing Pages',
    focus: 'Converting Confused Visitors into Serious Registered MBBS Aspirants',
    professionals: [
      'MBBS Abroad Consultancies',
      'Overseas Medical Advisories',
      'University Representatives',
      'Direct Admission Coordinators',
      'Foreign Education Franchises'
    ],
    conversionCopy: 'Static, slow, and outdated websites lose high-value student enrollments to flashier brokers. We redesign your platform into an interactive, ISO-standard MBBS portal featuring step-by-step country guides, eligibility checkers, secure document uploads, and direct WhatsApp integrations to convert traffic instantly.',
    mockPageLayout: {
      heroTitle: 'Secure Your MBBS Seat Abroad (2026 Batches Open)',
      heroSubtitle: 'Apply to top MCI/NMC-approved government medical universities in Russia, Georgia, Uzbekistan, and Kyrgyzstan. Frictionless admission tracking from day one.',
      features: [
        '✓ Direct Admission Eligibility Calculator (NEET-Score Filtered)',
        '✓ Virtual Video Tours of Foreign University Hostels & Labs',
        '✓ Interactive Fee Breakdowns (Tuition, Hostel, & Insurance)',
        '✓ One-Click WhatsApp Support with Verified Country Advisors'
      ],
      primaryCTA: 'Get Free Custom Admission Brochure',
      trustStatement: '★ ISO 9001:2015 Quality Standards - Trusted by 150+ Top Consultancies.'
    }
  },
  {
    id: 'meta-google-ads',
    title: 'Meta & Google Ads System',
    icon: 'Megaphone',
    color: 'emerald',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    borderColor: 'hover:border-emerald-500',
    specialty: 'Qualified Student Lead Generation for 2026 Admissions',
    focus: 'Filtering NEET-Qualified, Serious Students over Random Inquiries',
    professionals: [
      'Meta Leads Generation (FB & Insta)',
      'Google Search & Intent Targeting',
      'High-ROI YouTube Video Ads',
      'Retargeting Interested Aspirants',
      'Parent-Targeted Educational Campaigns'
    ],
    conversionCopy: 'Stop paying for stale, junk database lists that are sold to 10 other agencies. We build custom Meta and Google Search Ad pipelines that pre-filter candidates by NEET qualification status, budget limits, and country preferences (e.g. Georgia, Russia, Philippines). You get exclusive, hot inquiries directly inside your WhatsApp CRM.',
    mockPageLayout: {
      heroTitle: 'Target Serious NEET-Qualified Students Ready for Admissions',
      heroSubtitle: 'Our custom-targeted ad systems bypass low-intent junk queries. Feed your sales counselors high-value student profiles who actively want to study medicine abroad.',
      features: [
        '✓ Pre-qualified lead intake forms (NEET Score & Budget)',
        '✓ Real-time lead synchronization to WhatsApp or CRM',
        '✓ Highly optimized landing funnels designed to minimize CPL',
        '✓ Automated instant SMS and WhatsApp greeting campaigns'
      ],
      primaryCTA: 'Setup Pre-Filtered Lead Flow',
      trustStatement: '★ Generated 45,000+ Verified Aspirant Inquiries in Last Admission Cycle.'
    }
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    icon: 'Users',
    color: 'amber',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    borderColor: 'hover:border-amber-500',
    specialty: 'Brand Trust, Country Explainer Reels, & Authority Positioning',
    focus: 'Building Direct Student & Parent Trust via Authentic Content Reels',
    professionals: [
      'Instagram Reels & Reels Templates',
      'YouTube Shorts & Country Guides',
      'Facebook Parent Communities',
      'Student Testimonial Video Carousels',
      'Daily Infographics on MCI/NMC Updates'
    ],
    conversionCopy: 'Sending children abroad is a monumental family decision; trust is your absolute currency. Our social media engine creates polished, high-authority explainer reels, visual comparison charts, and student testimony formats that position your brand as the direct, secure link to elite global medical schools.',
    mockPageLayout: {
      heroTitle: 'Build Unshakable Trust with MBBS Aspirants & Parents',
      heroSubtitle: 'Position your medical consultancy as the absolute gold standard on social media. We create high-engagement reels, visa-success updates, and campus walk-throughs.',
      features: [
        '✓ Structured Monthly Reels & Country Comparison Calendars',
        '✓ Animated Video Templates showing Real Student Feedback',
        '✓ Fact-Checking MCI / NMC Eligibility Regulation Explanations',
        '✓ Parent Live-Stream Q&A Graphic Assets'
      ],
      primaryCTA: 'Get Customized Content Strategy',
      trustStatement: '✓ Double organic outreach traffic and gain 3x more parent engagement.'
    }
  },
  {
    id: 'whatsapp-email',
    title: 'Bulk WhatsApp & Email Services',
    icon: 'MessageSquare',
    color: 'rose',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-700',
    borderColor: 'hover:border-rose-500',
    specialty: 'High-Volume Retargeting & Admission Cohort Announcements',
    focus: 'Re-engaging Dormant Leads with High-Deliverability Sequences',
    professionals: [
      'Official WhatsApp API Campaigns',
      'Mass NEET-Rank SMS Blast Systems',
      'Rich-Media Admission Email Newsletters',
      'Interactive Chatbots for Seat Reservation',
      'Parent Cohort Broadcast Networks'
    ],
    conversionCopy: 'Do you have thousands of old inquiries sitting in spreadsheets? Put them to work. We configure bulk, spam-compliant WhatsApp API broadcasting and rich-media email structures. Instantly alert your database about upcoming visa deadlines, university entrance test dates, or limited seat offers for top colleges.',
    mockPageLayout: {
      heroTitle: 'Re-Engage Dormant Leads & Automate Admission Workflows',
      heroSubtitle: 'Deliver 98% open-rate rich-media WhatsApp alerts and highly personalized emails directly to medical aspirants and their guardians.',
      features: [
        '✓ Official WhatsApp Green-Badge API System Setup',
        '✓ Instant Automated Follow-ups & Document Reminders',
        '✓ Pre-configured admission question-and-answer Chatbots',
        '✓ High-deliverability bulk email newsletters for parents'
      ],
      primaryCTA: 'Automate Student Outreach Now',
      trustStatement: '✓ Verified WhatsApp API solutions with robust spam-protection guards.'
    }
  },
  {
    id: 'local-seo',
    title: 'Local SEO & Google Maps',
    icon: 'Search',
    color: 'violet',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-700',
    borderColor: 'hover:border-violet-500',
    specialty: 'Dominating Local Search Queries & Google Maps Rankings',
    focus: 'Attracting Direct Walk-In Inquiries in Your Physical Office Territories',
    professionals: [
      'Google Business Profile Optimization',
      'Local Citation & Review Campaigns',
      'Location-Specific MBBS Landing Pages',
      'Hyper-Local Maps Ad Campaigns',
      'Local Education Expo Event Listings'
    ],
    conversionCopy: 'Parents prefer local consultants whom they can physically meet. We optimize your Google Business Profiles and build localized page strategies to capture high-intent queries like "Best MBBS consultant near me" or "Russia medical admissions in Pune/Delhi". Attract secure walk-in prospects directly to your office.',
    mockPageLayout: {
      heroTitle: 'Dominate Local MBBS Search Queries in Your Territory',
      heroSubtitle: 'Rank at the absolute top of Google Maps and Local Search. Ensure students and parents find your physical branch before anyone else.',
      features: [
        '✓ Google Business Profile ranking strategies for top medical keywords',
        '✓ Automated Review Collection Engines for student testimonials',
        '✓ Customized localized landing pages for regional branches',
        '✓ Live Maps location integration with one-click driving navigation'
      ],
      primaryCTA: 'Claim Local SEO Dominance',
      trustStatement: '✓ Over 40+ medical consulting offices ranked in top 3 local packs.'
    }
  },
  {
    id: 'complete-package',
    title: 'Complete Consultancy Package',
    icon: 'Package',
    color: 'pink',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-700',
    borderColor: 'hover:border-pink-500',
    specialty: 'End-to-End Digitalization & 2026 Batch Enrollment System',
    focus: 'Integrating Web, Social Media, Ads, & WhatsApp into One Powerhouse',
    professionals: [
      'All-In-One MBBS Consultant Digital Kit',
      'Complete Website Redesign (Re-MVP)',
      'Meta + Google Active Ad Account Setup',
      'Bulk Messaging & CRM Integrations',
      'Staff Intake Workflow Automation'
    ],
    conversionCopy: 'Why hire multiple freelancers or unaligned agencies? Get the ultimate, unified package designed exclusively for top-tier MBBS Abroad Consultants. We handle your entire digital system—from auditing your current assets to launching direct student lead tunnels and configuring WhatsApp CRM automation.',
    mockPageLayout: {
      heroTitle: 'The Complete Digital Pipeline for Abroad Consultancies',
      heroSubtitle: 'From a high-converting MBBS admission website, to premium leads, official WhatsApp messaging automation, and expert social media management.',
      features: [
        '✓ High-Converting Custom MBBS Website (Value: ₹25,000)',
        '✓ Meta & Google High-ROI Campaign Setup (Value: ₹15,000)',
        '✓ Official WhatsApp API & CRM Integration (Value: ₹12,000)',
        '✓ Full Website Free Audit & Continuous Optimization'
      ],
      primaryCTA: 'Get All-In-One Package Demo',
      trustStatement: '✓ The choice of India\'s elite, high-volume MBBS Abroad consultancies.'
    }
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: 'How do you target serious MBBS aspirants instead of random junk inquiries?',
    answer: 'We build strict custom NEET-score and budget pre-qualification filters right inside our lead landing pages and Meta/Google forms. Instead of random numbers, you receive qualified student profiles with details like: NEET score status, desired target countries (e.g. Russia, Georgia, Uzbekistan, Kyrgyzstan, Philippines), and budget capacity. This saves your counselors hours of wasted time.'
  },
  {
    id: 2,
    question: 'How does the ₹500 booking / website free audit offer work?',
    answer: 'It is simple and risk-free. You fill out our brief booking form and pay a commitment deposit of just ₹500. Our expert team will then run a complete Free Audit of your existing online presence or draft a fresh admission-focused live MVP prototype for your consultancy. We deliver this customized review or mockup within 24 to 72 hours.'
  },
  {
    id: 3,
    question: 'What target countries does your system support for 2026 batches?',
    answer: 'Our marketing funnels, eligibility calculators, and brochure systems are optimized to highlight top medical destinations including Russia, Georgia, Uzbekistan, Kyrgyzstan, the Philippines, Kazakhstan, Egypt, and other emerging global options. We customize our filters and content to match your university contracts.'
  },
  {
    id: 4,
    question: 'What is included in the Complete Packages Solution for Abroad Consultancy?',
    answer: 'The complete solution is an all-inclusive system covering your entire digital setup. It includes a brand-new high-converting admission website, active Meta & Google ad setups, custom Instagram/Facebook brand management, and official bulk WhatsApp API integrations. It is designed to act as your external digital department.'
  },
  {
    id: 5,
    question: 'Is ByteDepth experienced with MBBS MCI/NMC guidelines?',
    answer: 'Yes. We design with student/parent trust and regulatory compliance in mind. We display NMC guidelines, eligibility rules (such as 50% in PCB + NEET qualification), and country structures clearly so that your brand conveys authentic, legal-standard authority, filtering out candidates who cannot secure admission anyway.'
  },
  {
    id: 6,
    question: 'How do we pay the remaining balance for a website build or campaign setup?',
    answer: 'After you review your live customized mockup or audit outcome and say "Let\'s launch this!", we send a final invoice for the remaining balance. Once received, we deploy the website to your domain and launch your ad accounts. We also provide full walkthroughs to ensure your staff knows how to pull leads.'
  }
];
