export type CardSize = 'landscape' | 'portrait' | 'square' | 'panoramic' | 'tall';

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  size: CardSize;
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
  size?: CardSize;
  width?: number;
  height?: number;
}

// Trails

export interface TrailPoint {
  name: string;
  x: number;
  y: number;
}

export interface NarrativeBlock {
  stageNumber?: number;
  stageTitle?: string;
  distanceKm?: number;
  elevationGain?: number;
  duration?: string;
  narrative: string;
  image: string;
  imageAlt: string;
  side: 'left' | 'right';
  imageSize: 'large' | 'medium' | 'small';
}

export interface Trail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  dates: { start: string; end: string };
  stats: {
    distanceKm: number;
    stages: number;
    days: number;
    elevationGain: number;
    maxAltitude: number;
  };
  status: 'completed' | 'in-progress' | 'planned';
  trailPoints: TrailPoint[];
  narrativeBlocks: NarrativeBlock[];
}

// Trips

export interface TripNarrativeBlock {
  sectionTitle?: string;
  narrative: string;
  image?: string;
  imageAlt?: string;
  side?: 'left' | 'right';
  imageSize?: 'large' | 'medium' | 'small';
}

export interface Trip {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  dates: { start: string; end: string };
  location: string;
  duration: string;
  introductionText?: string;
  mapPoints?: TrailPoint[];
  narrativeBlocks: TripNarrativeBlock[];
}

// Motorcycle routes with GPX tracks

export interface MotoPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface MotorcycleRoute {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  dates: { start: string; end: string };
  stats: {
    distanceKm: number;
    days: number;
    elevationGain?: number;
  };
  /** Map points (from GPX or manual) */
  trailPoints: TrailPoint[];
  /** Optional URL to GPX file for download/future integrations */
  gpxUrl?: string;
  photos: MotoPhoto[];
}
