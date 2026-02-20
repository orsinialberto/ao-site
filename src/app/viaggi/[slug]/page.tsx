import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { trips, getTripBySlug } from '@/lib/viaggi';
import ViaggioStageBlock from '@/components/viaggi/ViaggioStageBlock';
import ViaggioDetailHeader from '@/components/viaggi/ViaggioDetailHeader';
import ViaggioMapSection from '@/components/viaggi/ViaggioMapSection';

// ---------------------------------------------------------------------------
// Static params & metadata
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return trips.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) return {};
  return {
    title: `${trip.title} | Alberto Orsini`,
    description: trip.description,
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const MONTHS_IT = [
  'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
  'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre',
];

function formatDates(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  const sMonth = MONTHS_IT[s.getMonth()];
  const eMonth = MONTHS_IT[e.getMonth()];
  if (s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth()) {
    return `${sMonth} ${s.getFullYear()}`;
  }
  if (s.getFullYear() === e.getFullYear()) {
    return `${sMonth} – ${eMonth} ${s.getFullYear()}`;
  }
  return `${sMonth} ${s.getFullYear()} – ${eMonth} ${e.getFullYear()}`;
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function ViaggioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) notFound();

  const dateLabel = formatDates(trip.dates.start, trip.dates.end);
  const blocks = trip.narrativeBlocks;

  return (
    <div className="min-h-screen bg-white">
      {/* ─── Header ─── */}
      <ViaggioDetailHeader
        title={trip.title}
        subtitle={trip.subtitle}
        dateLabel={dateLabel}
        location={trip.location}
        duration={trip.duration}
      />

      {/* ─── Map with introduction ─── */}
      {trip.mapPoints &&
        trip.mapPoints.length > 0 &&
        trip.introductionText && (
          <ViaggioMapSection
            mapPoints={trip.mapPoints}
            introductionText={trip.introductionText}
          />
        )}

      {/* ─── Narrative blocks ─── */}
      <div className="flex flex-col gap-20 lg:gap-32">
        {blocks.map((block, i) => (
          <ViaggioStageBlock key={i} block={block} index={i} />
        ))}
      </div>

      {/* ─── Closing (same style as trails) ─── */}
      <div className="py-24 lg:py-40 flex flex-col items-center text-center px-8">
        <div className="w-16 h-px bg-gray-300 mb-10" />

        <p className="font-mono text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-2">
          {trip.location}
        </p>
        <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-8">
          {trip.duration}
        </p>

        <p className="text-sm font-light text-gray-500 mb-1">
          {trip.subtitle}
        </p>

        <div className="w-16 h-px bg-gray-300 mt-10" />
      </div>
    </div>
  );
}
