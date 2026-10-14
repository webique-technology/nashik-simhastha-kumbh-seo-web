/**
 * Data types for Nashik Simhastha Kumbh 2027–2028 Informational Guide
 */

export type PageRoute =
  | '/'
  | '/about'
  | '/sacred-places'
  | '/shahi-snan-dates'
  | '/pilgrim-guide'
  | '/contact';

export type ConfirmationStatus =
  | 'Provisional / Traditional Astrological'
  | 'Gazetted by State Authority'
  | 'Awaiting Formal Notification'
  | 'Verified by Temple Sansthan';

export interface ParvaniDate {
  id: string;
  dateStr: string;
  gregorianDate: string;
  hinduTithi: string;
  eventName: string;
  marathiName: string;
  location: 'Nashik' | 'Trimbakeshwar' | 'Both Nashik & Trimbakeshwar';
  description: string;
  status: ConfirmationStatus;
  source: string;
  lastUpdated: string;
  isMajorParvani?: boolean;
}

export interface SacredGhat {
  id: string;
  name: string;
  marathiName: string;
  location: string;
  significance: string;
  description: string;
  accessInfo: string;
  safetyAdvice: string;
  imageUrl: string;
  imageAlt: string;
  coordinatesHint: string;
}

export interface SacredPlace {
  id: string;
  name: string;
  marathiName: string;
  locationType: 'Temple' | 'Heritage Cave' | 'Sacred Hill' | 'River Source' | 'Sacred Grove';
  distanceFromNashikCenter: string;
  summary: string;
  historicalContext: string;
  visitorGuidelines: string[];
  imageUrl: string;
  imageAlt: string;
  officialSource?: string;
}

export interface AkhadaInfo {
  id: string;
  name: string;
  sect: 'Shaiva (Trimbakeshwar)' | 'Vaishnava (Nashik)' | 'Udasi / Nirmal';
  headquarters: string;
  campingCenter: string;
  traditionalRole: string;
  processionDetails: string;
  etiquetteTips: string[];
}

export interface OfficialUpdateItem {
  id: string;
  headline: string;
  publicationDate: string;
  summary: string;
  sourceOrg: string;
  officialRefUrl?: string;
  status: 'Confirmed' | 'Advisory' | 'Provisional Planning';
  category: 'Infrastructure' | 'Dates' | 'Transport' | 'Safety';
}

export interface FaqItem {
  question: string;
  marathiQuestion?: string;
  answer: string;
  category: 'General' | 'Rituals & Bathing' | 'Travel & Stay' | 'Safety & Facilities';
}

export interface EmergencyContact {
  service: string;
  number: string;
  department: string;
  note: string;
}
