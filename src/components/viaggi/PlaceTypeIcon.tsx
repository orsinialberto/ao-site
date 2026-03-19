'use client';

import { useMemo } from 'react';
import type { ItineraryLocation } from '@/types';
import {
  PLACE_TYPE_PATH_SPEC,
  resolvePlaceType,
} from '@/lib/placeTypeMarkers';

interface PlaceTypeIconProps {
  location: Pick<ItineraryLocation, 'name' | 'placeType'>;
  className?: string;
  /** SVG user-unit stroke width (default tuned for small thumbnails). */
  strokeWidth?: number;
}

/** Same shapes as map markers; stroke/fill uses `currentColor`. */
export default function PlaceTypeIcon({
  location,
  className = 'h-9 w-9',
  strokeWidth = 1.5,
}: PlaceTypeIconProps) {
  const placeType = useMemo(
    () => resolvePlaceType(location),
    [location.name, location.placeType],
  );
  const spec = PLACE_TYPE_PATH_SPEC[placeType];

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {spec.style === 'fill' ? (
        <circle cx={12} cy={12} r={3.6} className="fill-current" />
      ) : (
        <path
          d={spec.d}
          fill="none"
          className="stroke-current"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
