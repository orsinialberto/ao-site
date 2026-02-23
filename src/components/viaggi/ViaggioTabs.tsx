'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface ViaggioTabsProps {
  slug: string;
}

const tabs = [
  { label: 'Racconto', href: (slug: string) => `/viaggi/${slug}` },
  { label: 'Itinerario', href: (slug: string) => `/viaggi/${slug}/itinerario` },
  { label: 'Galleria', href: (slug: string) => `/viaggi/${slug}/galleria` },
];

export default function ViaggioTabs({ slug }: ViaggioTabsProps) {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-8 lg:gap-12 pt-10 lg:pt-14 pb-4 lg:pb-6">
      {tabs.map((tab) => {
        const href = tab.href(slug);
        const isActive = pathname === href;

        return (
          <Link
            key={tab.label}
            href={href}
            className="relative pb-2 group"
          >
            <span
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 ${
                isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
              }`}
            >
              {tab.label}
            </span>
            {isActive && (
              <motion.div
                layoutId="viaggio-tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-px bg-gray-900"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
