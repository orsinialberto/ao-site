'use client';

import { motion } from 'framer-motion';
import TrailMap from './TrailMap';
import { TrailPoint } from '@/types';

interface MapSectionProps {
  trailPoints: TrailPoint[];
  subtitle: string;
  description: string;
}

export default function MapSection({
  trailPoints,
  subtitle,
  description,
}: MapSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] my-20 lg:my-32 lg:min-h-[600px]"
    >
      {/* Text */}
      <div className="order-2 lg:order-1 flex items-center px-8 lg:px-16 xl:px-20 py-12 lg:py-0">
        <div className="max-w-lg w-full lg:mx-auto">
          <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-4">
            Il percorso
          </p>
          <h3 className="text-lg font-light tracking-wide text-gray-900 mb-4">
            {subtitle}
          </h3>
          <p className="text-base font-light leading-relaxed text-gray-600">
            {description}
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="order-1 lg:order-2 px-8 lg:px-4 lg:pr-8 xl:pr-16 flex items-center justify-center">
        <div className="w-full max-w-[480px]">
          <TrailMap points={trailPoints} />
        </div>
      </div>
    </motion.div>
  );
}
