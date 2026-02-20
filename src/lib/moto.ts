import { MotorcycleRoute } from '@/types';

export const motorcycleRoutes: MotorcycleRoute[] = [
  {
    slug: 'dolomiti-2024',
    title: 'Dolomiti in moto',
    subtitle: 'Bolzano → Cortina → Passo Giau',
    description:
      'Un giro di tre giorni tra le vette delle Dolomiti: curve infinite, passi da sogno e paesaggi che tolgono il fiato. La traccia segue il percorso reale registrato in viaggio.',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    dates: { start: '2024-07-12', end: '2024-07-14' },
    stats: {
      distanceKm: 412,
      days: 3,
      elevationGain: 8200,
    },
    trailPoints: [
      { name: 'Bolzano', x: 180, y: 80 },
      { name: 'Passo Sella', x: 220, y: 140 },
      { name: 'Canazei', x: 200, y: 180 },
      { name: 'Cortina', x: 260, y: 200 },
      { name: 'Passo Giau', x: 240, y: 240 },
      { name: 'Arabba', x: 200, y: 260 },
      { name: 'Bolzano', x: 180, y: 80 },
    ],
    gpxUrl: '/gpx/dolomiti-2024.gpx',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&fit=crop',
        alt: 'Moto in sella al Passo Sella',
        caption: 'Passo Sella al tramonto',
      },
      {
        src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&fit=crop',
        alt: 'Strada tra le Dolomiti',
        caption: 'La strada verso Cortina',
      },
      {
        src: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=1200&fit=crop',
        alt: 'Vista dalle Tre Cime',
        caption: 'Panorama dal Passo Giau',
      },
    ],
  },
  {
    slug: 'costiera-amalfitana-2023',
    title: 'Costiera Amalfitana',
    subtitle: 'Salerno → Positano → Amalfi',
    description:
      'Due giorni sulla costiera più spettacolare d\'Italia: mare, curve a strapiombo e borghi colorati. Tracce GPX registrate durante il viaggio.',
    coverImage: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&h=600&fit=crop',
    dates: { start: '2023-06-02', end: '2023-06-03' },
    stats: {
      distanceKm: 186,
      days: 2,
      elevationGain: 3400,
    },
    trailPoints: [
      { name: 'Salerno', x: 240, y: 220 },
      { name: 'Vietri', x: 220, y: 200 },
      { name: 'Amalfi', x: 160, y: 160 },
      { name: 'Positano', x: 100, y: 120 },
      { name: 'Sorrento', x: 60, y: 80 },
      { name: 'Salerno', x: 240, y: 220 },
    ],
    gpxUrl: '/gpx/costiera-amalfitana-2023.gpx',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1200&fit=crop',
        alt: 'Vista su Positano dalla strada',
        caption: 'Positano dalla SS163',
      },
      {
        src: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&fit=crop',
        alt: 'Amalfi e il mare',
        caption: 'Amalfi al tramonto',
      },
    ],
  },
  {
    slug: 'appennino-tosco-emiliano-2024',
    title: 'Appennino tosco-emiliano',
    subtitle: 'Bologna → Abetone → Passo della Cisa',
    description:
      'Weekend lungo le strade secondarie dell\'Appennino: pochi turisti, tante curve e boschi infiniti. Percorso ad anello con traccia GPX disponibile.',
    coverImage: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop',
    dates: { start: '2024-09-14', end: '2024-09-15' },
    stats: {
      distanceKm: 298,
      days: 2,
      elevationGain: 5100,
    },
    trailPoints: [
      { name: 'Bologna', x: 200, y: 120 },
      { name: 'Porretta Terme', x: 140, y: 80 },
      { name: 'Abetone', x: 80, y: 100 },
      { name: 'Passo della Cisa', x: 40, y: 180 },
      { name: 'Berceto', x: 80, y: 200 },
      { name: 'Bologna', x: 200, y: 120 },
    ],
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200&fit=crop',
        alt: 'Strada di montagna nell\'Appennino',
        caption: 'Verso l\'Abetone',
      },
    ],
  },
];

export function getMotorcycleRouteBySlug(slug: string): MotorcycleRoute | undefined {
  return motorcycleRoutes.find((p) => p.slug === slug);
}
