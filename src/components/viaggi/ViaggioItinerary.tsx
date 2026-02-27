'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ItineraryDay, ItineraryLocation, TrailPoint } from '@/types';
import { cloudinaryThumb } from '@/lib/cloudinary';

const ItineraryMap = dynamic(() => import('./ItineraryMap'), { ssr: false });

interface ViaggioItineraryProps {
  itinerary: ItineraryDay[];
  mapPoints?: TrailPoint[];
}

export default function ViaggioItinerary({
  itinerary,
  mapPoints,
}: ViaggioItineraryProps) {
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [mapDay, setMapDay] = useState<number | null>(null);
  const [hoveredLocationName, setHoveredLocationName] = useState<string | null>(null);

  // Defer map update when opening accordion so accordion animation runs first
  useEffect(() => {
    if (openDay === null) {
      setMapDay(null);
      return;
    }
    const t = setTimeout(() => setMapDay(openDay), 80);
    return () => clearTimeout(t);
  }, [openDay]);

  const allLocations = useMemo(
    () => itinerary.flatMap((d) => d.locations),
    [itinerary],
  );

  const mainLocations = useMemo((): ItineraryLocation[] => {
    if (!mapPoints || mapPoints.length === 0) return allLocations;
    const withCoords = mapPoints.filter(
      (mp): mp is TrailPoint & { lat: number; lng: number } =>
        typeof mp.lat === 'number' && typeof mp.lng === 'number',
    );
    if (withCoords.length === 0) return allLocations;
    return withCoords.map((mp) => ({ name: mp.name, lat: mp.lat, lng: mp.lng }));
  }, [mapPoints, allLocations]);

  const activeLocations = useMemo(() => {
    if (mapDay === null) return mainLocations;
    const day = itinerary.find((d) => d.day === mapDay);
    return day ? day.locations : mainLocations;
  }, [mapDay, itinerary, mainLocations]);

  const activeGpxUrl = useMemo(() => {
    if (mapDay === null) return null;
    const day = itinerary.find((d) => d.day === mapDay);
    return day?.gpxUrl ?? null;
  }, [mapDay, itinerary]);

  const displayLocations = useMemo(() => {
    if (mapDay === null) return mainLocations;
    return allLocations;
  }, [mapDay, mainLocations, allLocations]);

  const toggle = useCallback(
    (day: number) => setOpenDay((prev) => (prev === day ? null : day)),
    [],
  );

  return (
    <div className="px-8 lg:px-16 xl:px-20 pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Accordion */}
        <div className="space-y-0">
          {itinerary.map((day) => (
            <AccordionItem
              key={day.day}
              day={day}
              isOpen={openDay === day.day}
              onToggle={toggle}
              onLocationHover={setHoveredLocationName}
            />
          ))}
        </div>

        {/* Map */}
        <div className="lg:sticky lg:top-8 lg:self-start h-[400px] lg:h-[calc(100vh-4rem)] rounded-sm overflow-hidden">
          <ItineraryMap
            locations={activeLocations}
            allLocations={displayLocations}
            hoveredLocationName={hoveredLocationName}
            gpxUrl={activeGpxUrl}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Accordion Item ──────────────────────────────────────────────────────── */

interface AccordionItemProps {
  day: ItineraryDay;
  isOpen: boolean;
  onToggle: (day: number) => void;
  onLocationHover: (name: string | null) => void;
}

function AccordionItem({ day, isOpen, onToggle, onLocationHover }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => onToggle(day.day)}
        className="w-full flex items-center justify-between py-5 lg:py-6 text-left group cursor-pointer"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-gray-400 tracking-widest tabular-nums">
            {String(day.day).padStart(2, '0')}
          </span>
          <span
            className={`text-sm lg:text-base font-light transition-colors duration-300 ${
              isOpen ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
            }`}
          >
            {day.title}
          </span>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 text-lg leading-none flex-shrink-0 ml-4"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ gridTemplateRows: '0fr' }}
            animate={{ gridTemplateRows: '1fr' }}
            exit={{ gridTemplateRows: '0fr' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="grid"
          >
            <div className="min-h-0 overflow-hidden">
              <div className="pb-6 pl-10 pr-4">
                <div className="flex flex-col gap-4">
                  {day.locations.map((loc) => (
                    <LocationCard
                      key={`${loc.name}-${loc.lat}-${loc.lng}`}
                      location={loc}
                      onHover={onLocationHover}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Location Card ──────────────────────────────────────────────────────── */

interface LocationCardProps {
  location: ItineraryLocation;
  onHover: (name: string | null) => void;
}

function LocationCard({ location, onHover }: LocationCardProps) {
  return (
    <div
      className="group flex overflow-hidden"
      onMouseEnter={() => onHover(location.name)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative h-20 w-20 flex-shrink-0">
        {location.image ? (
          <Image
            src={cloudinaryThumb(location.image)}
            alt={location.imageAlt ?? location.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="80px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center border border-gray-200">
            <span className="text-xl text-gray-400" aria-hidden>
              📍
            </span>
          </div>
        )}
      </div>
      <p className="flex flex-1 items-center pl-4 text-sm font-light text-gray-700 truncate">
        {location.name}
      </p>
    </div>
  );
}
