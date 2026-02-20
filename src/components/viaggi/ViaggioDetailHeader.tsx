'use client';

import { motion } from 'framer-motion';

interface ViaggioDetailHeaderProps {
  title: string;
  subtitle: string;
  dateLabel: string;
  location: string;
  duration: string;
}

export default function ViaggioDetailHeader({
  title,
  subtitle,
  dateLabel,
  location,
  duration,
}: ViaggioDetailHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center px-8 pt-16 lg:pt-24 pb-20 lg:pb-32"
    >
      <h1 className="text-4xl lg:text-5xl font-light tracking-wider text-gray-900 mb-3">
        {title}
      </h1>
      <p className="text-base font-light text-gray-500 mb-2">{subtitle}</p>
      <p className="text-sm font-light text-gray-400 mb-10">{dateLabel}</p>

      {/* Location & Duration row */}
      <div className="flex gap-10 lg:gap-16">
        <StatItem value={location} label="Destinazione" />
        <StatItem value={duration} label="Durata" />
      </div>
    </motion.div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-2xl lg:text-3xl font-light text-gray-900">
        {value}
      </span>
      <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase mt-1">
        {label}
      </span>
    </div>
  );
}
