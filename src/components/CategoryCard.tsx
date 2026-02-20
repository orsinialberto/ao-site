'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Category } from '@/types';
import { useState } from 'react';

interface CategoryCardProps {
  category: Category;
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-gray-100 h-full"
    >
      <Link href={category.href} className="block h-full">
        <div className="relative h-full overflow-hidden">
          {!imageError ? (
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <p className="text-gray-500 font-light text-4xl">📷</p>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-white text-2xl font-light tracking-wider mb-2 drop-shadow-lg">
                {category.title}
              </h3>
              <p className="text-white/80 text-sm font-light drop-shadow-md group-hover:text-white transition-colors">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
