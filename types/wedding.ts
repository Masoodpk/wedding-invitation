export type ThemeType = 'elegant-forest' | 'sketchy-modern';

export interface Event {
  title: string;
  time: string;
  date: string;
  location: string;
  address?: string;
  mapLink?: string;
  icon?: 'calendar' | 'reception' | 'pin';
}

export interface WeddingData {
  id: string;
  slug: string;
  theme: ThemeType;
  details: {
    groom: {
      name: string;
      fullName?: string;
      image?: string;
      parents?: string;
    };
    bride: {
      name: string;
      fullName?: string;
      image?: string;
      parents?: string;
    };
    date: string; // ISO format
    venue: string;
    address: string;
    events?: Event[];
    quote?: {
      text: string;
      source: string;
    };
    music?: string;
    heroImage?: string;
    images?: string[];
  };
}
