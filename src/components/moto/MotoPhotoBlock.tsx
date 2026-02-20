'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MotoPhoto } from '@/types';

interface MotoPhotoBlockProps {
  photo: MotoPhoto;
  index: number;
  side: 'left' | 'right';
}

export default function MotoPhotoBlock({ photo, index, side }: MotoPhotoBlockProps) {
  const [imageError, setImageError] = useState(false);

  const photoEl = (
    <div className="relative h-full aspect-[3/2] lg:aspect-auto min-h-[280px]">
      {!imageError ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 55vw"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-gray-100" />
      )}
    </div>
  );

  const captionEl = photo.caption ? (
    <div className="flex items-center h-full px-8 lg:px-16 xl:px-20 py-12 lg:py-0">
      <div className="max-w-lg w-full lg:mx-auto">
        <p className="text-base font-light text-gray-600 italic">&ldquo;{photo.caption}&rdquo;</p>
      </div>
    </div>
  ) : null;

  const hasCaption = !!captionEl;
  const gridCols = hasCaption ? 'lg:grid-cols-2' : 'lg:grid-cols-1';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.05 }}
      className={`grid grid-cols-1 ${gridCols} lg:min-h-[400px] gap-0`}
    >
      {side === 'right' ? (
        <>
          {captionEl && <div className="order-2 lg:order-1">{captionEl}</div>}
          <div className="order-1 lg:order-2">{photoEl}</div>
        </>
      ) : (
        <>
          <div>{photoEl}</div>
          {captionEl && <div>{captionEl}</div>}
        </>
      )}
    </motion.div>
  );
}
