/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NicheCategory {
  id: string;
  title: string;
  icon: string; // lucide icon name
  color: string; // tailwind color prefix (blue, green, orange, etc)
  bgColor: string; // bg color Tailwind class
  textColor: string; // text color Tailwind class
  borderColor: string; // border color hover
  specialty: string;
  focus: string; // conversion focus (e.g., consultation booking)
  professionals: string[];
  conversionCopy: string;
  mockPageLayout: {
    heroTitle: string;
    heroSubtitle: string;
    features: string[];
    primaryCTA: string;
    trustStatement: string;
  };
}

export interface BookingRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  niche: string;
  businessName: string;
  goals: string;
  customDomainReq: boolean;
  designStyle: 'modern-dark' | 'clean-corporate' | 'warm-organic' | 'creative-bold';
  selectedPlan: 'complete' | 'basic' | 'onetime';
  submittedAt: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
