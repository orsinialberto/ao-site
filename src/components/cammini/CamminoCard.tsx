'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Trail } from '@/types';

interface CamminoCardProps {
  trail: Trail;
  index: number;
}

export default function CamminoCard({ trail, index }: CamminoCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-gray-100 h-full"
    >
      <Link href={`/cammini/${trail.slug}`} className="block h-full">
        <div className="relative h-full overflow-hidden">
          {!imageError ? (
            <Image
              src={trail.coverImage}
              alt={trail.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-white text-2xl font-light tracking-wider mb-2 drop-shadow-lg">
                {trail.title}
              </h3>
              <p className="text-white/70 text-sm font-mono tracking-wide drop-shadow-md group-hover:text-white/90 transition-colors">
                {trail.stats.distanceKm} km · {trail.stats.stages} tappe
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
