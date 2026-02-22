'use client';

import TrailMap from '@/components/cammini/TrailMap';
import { TrailPoint } from '@/types';

interface ViaggioMapSectionProps {
  mapPoints: TrailPoint[];
  introductionText: string;
}

export default function ViaggioMapSection({
  mapPoints,
  introductionText,
}: ViaggioMapSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] mt-0 mb-20 lg:mb-32 lg:min-h-[600px]">
      {/* Map - left side */}
      <div className="order-1 flex items-center justify-center px-8 lg:px-4 lg:pl-8 xl:pl-16 py-12 lg:py-0">
        <div className="w-full max-w-[480px]">
          <TrailMap points={mapPoints} />
        </div>
      </div>

      {/* Introductory text - right side, balanced margins */}
      <div className="order-2 flex items-center justify-center pl-8 pr-12 lg:pl-12 lg:pr-20 xl:pl-16 xl:pr-28 py-12 lg:py-0 min-h-[400px] lg:min-h-0 lg:self-stretch">
        <div className="w-full min-w-0 text-left">
          <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-4">
            Introduzione
          </p>
          <div className="text-base font-light leading-relaxed text-gray-600 space-y-4">
            {introductionText.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
