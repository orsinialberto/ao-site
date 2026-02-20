import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'viaggi',
    title: 'Viaggi',
    description: 'Le mie avventure nel mondo',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    href: '/viaggi',
    size: 'panoramic',
  },
  {
    id: 'moto',
    title: 'Moto',
    description: 'Passione su due ruote',
    image: '/images/moto/cover.jpg',
    href: '/moto',
    size: 'tall',
  },
  {
    id: 'cammini',
    title: 'Cammini',
    description: 'Percorsi e sentieri',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=800&fit=crop',
    href: '/cammini',
    size: 'square',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'I miei progetti',
    image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&h=600&fit=crop',
    href: '/portfolio',
    size: 'landscape',
  },
  {
    id: 'galleria',
    title: 'Galleria Fotografica',
    description: 'Scatti e momenti',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop',
    href: '/galleria',
    size: 'landscape',
  },
];

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Viaggi', href: '/viaggi' },
  { name: 'Moto', href: '/moto' },
  { name: 'Cammini', href: '/cammini' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Galleria', href: '/galleria' },
  { name: 'Contatti', href: '/contatti' },
];
