'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { NarrativeBlock } from '@/types';
import { useState } from 'react';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ANIMATION_DURATION = 0.7;
const ANIMATION_DELAY_PER_INDEX = 0.05;
const VIEWPORT_MARGIN = '-80px';

const variants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface StageBlockProps {
  block: NarrativeBlock;
  index: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getGridCols(
  side: 'left' | 'right',
  size: 'large' | 'medium' | 'small',
): string {
  // CSS custom property value for grid-template-columns at lg+
  if (side === 'right') {
    if (size === 'large') return '1fr 58%';
    if (size === 'medium') return '1fr 48%';
    return '1fr 40%';
  }
  if (size === 'large') return '58% 1fr';
  if (size === 'medium') return '48% 1fr';
  return '40% 1fr';
}

export default function StageBlock({ block, index }: StageBlockProps) {
  const [imageError, setImageError] = useState(false);
  const {
    side,
    imageSize,
    image,
    imageAlt,
    narrative,
    stageNumber,
    stageTitle,
    distanceKm,
    elevationGain,
    duration,
  } = block;

  const gridCols = getGridCols(side, imageSize);

  const photoElement = (
    <div className="relative h-full aspect-[3/2] lg:aspect-auto">
      {!imageError ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-gray-100" />
      )}
    </div>
  );

  const textElement = (
    <div className="flex items-center h-full px-8 lg:px-16 xl:px-20 py-12 lg:py-0">
      <div className="max-w-lg w-full lg:mx-auto">
        {stageNumber != null && (
          <p className="font-mono text-xs text-gray-400 tracking-wider mb-4">
            Tappa {stageNumber}
          </p>
        )}
        {stageTitle && (
          <h3 className="text-lg font-light tracking-wide text-gray-900 mb-4">
            {stageTitle}
          </h3>
        )}
        <p className="text-base font-light leading-relaxed text-gray-600 mb-6">
          {narrative}
        </p>
        {(distanceKm || elevationGain || duration) && (
          <div className="flex gap-6 text-xs font-mono text-gray-400 tracking-wide">
            {distanceKm && <span>{distanceKm} km</span>}
            {elevationGain && <span>{elevationGain} m D+</span>}
            {duration && <span>{duration}</span>}
          </div>
        )}
      </div>
    </div>
  );

  const isFirstBlock = index === 0;

  return (
    <motion.div
      variants={variants}
      initial={isFirstBlock ? false : 'hidden'}
      animate={isFirstBlock ? 'visible' : undefined}
      whileInView={isFirstBlock ? undefined : 'visible'}
      viewport={isFirstBlock ? undefined : { once: true, margin: VIEWPORT_MARGIN }}
      transition={{
        duration: ANIMATION_DURATION,
        ease: 'easeOut',
        delay: isFirstBlock ? 0 : index * ANIMATION_DELAY_PER_INDEX,
      }}
      className="grid grid-cols-1 stage-grid lg:min-h-[500px]"
      style={{ '--stage-cols': gridCols } as React.CSSProperties}
    >
      {side === 'right' ? (
        <>
          {/* Mobile: photo first (order-1), text second (order-2) */}
          {/* Desktop: text left (order-1), photo right (order-2) */}
          <div className="order-2 lg:order-1">{textElement}</div>
          <div className="order-1 lg:order-2 h-full">{photoElement}</div>
        </>
      ) : (
        <>
          {photoElement}
          {textElement}
        </>
      )}
    </motion.div>
  );
}
