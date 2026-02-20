'use client';

import { motion } from 'framer-motion';
import TrailMap from '@/components/cammini/TrailMap';
import { TrailPoint } from '@/types';

interface MotoMapSectionProps {
  trailPoints: TrailPoint[];
  subtitle: string;
  description: string;
  gpxUrl?: string;
}

export default function MotoMapSection({
  trailPoints,
  subtitle,
  description,
  gpxUrl,
}: MotoMapSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] my-20 lg:my-32 lg:min-h-[600px]"
    >
      <div className="order-2 lg:order-1 flex items-center px-8 lg:px-16 xl:px-20 py-12 lg:py-0">
        <div className="max-w-lg w-full lg:mx-auto">
          <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-4">
            Traccia GPX
          </p>
          <h3 className="text-lg font-light tracking-wide text-gray-900 mb-4">
            {subtitle}
          </h3>
          <p className="text-base font-light leading-relaxed text-gray-600 mb-6">
            {description}
          </p>
          {gpxUrl && (
            <a
              href={gpxUrl}
              download
              className="inline-flex items-center gap-2 text-sm font-mono text-gray-600 hover:text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
            >
              Scarica traccia GPX
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="order-1 lg:order-2 px-8 lg:px-4 lg:pr-8 xl:pr-16 flex items-center justify-center">
        <div className="w-full max-w-[480px]">
          <TrailMap points={trailPoints} />
        </div>
      </div>
    </motion.div>
  );
}
