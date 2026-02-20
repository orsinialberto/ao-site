import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { trails, getTrailBySlug } from '@/lib/cammini';
import StageBlock from '@/components/cammini/StageBlock';
import TrailMap from '@/components/cammini/TrailMap';
import DetailHeader from '@/components/cammini/DetailHeader';
import MapSection from '@/components/cammini/MapSection';

// ---------------------------------------------------------------------------
// Static params & metadata
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return trails.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trail = getTrailBySlug(slug);
  if (!trail) return {};
  return {
    title: `${trail.title} | Alberto Orsini`,
    description: trail.description,
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

export default async function CamminoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trail = getTrailBySlug(slug);
  if (!trail) notFound();

  const dateLabel = formatDates(trail.dates.start, trail.dates.end);
  const blocks = trail.narrativeBlocks;

  // Insert map after the 3rd block (or after the last block if fewer than 3)
  const mapAfter = Math.min(3, blocks.length);
  const blocksBefore = blocks.slice(0, mapAfter);
  const blocksAfter = blocks.slice(mapAfter);

  return (
    <div className="min-h-screen bg-white">
      {/* ─── Header ─── */}
      <DetailHeader
        title={trail.title}
        subtitle={trail.subtitle}
        dateLabel={dateLabel}
        stats={trail.stats}
      />

      {/* ─── Narrative blocks (before map) ─── */}
      <div className="flex flex-col gap-20 lg:gap-32">
        {blocksBefore.map((block, i) => (
          <StageBlock key={i} block={block} index={i} />
        ))}
      </div>

      {/* ─── Trail map ─── */}
      <MapSection
        trailPoints={trail.trailPoints}
        subtitle={trail.subtitle}
        description={trail.description}
      />

      {/* ─── Narrative blocks (after map) ─── */}
      {blocksAfter.length > 0 && (
        <div className="flex flex-col gap-20 lg:gap-32">
          {blocksAfter.map((block, i) => (
            <StageBlock key={i + mapAfter} block={block} index={i + mapAfter} />
          ))}
        </div>
      )}

      {/* ─── Closing stats ─── */}
      <div className="py-24 lg:py-40 flex flex-col items-center text-center px-8">
        <div className="w-16 h-px bg-gray-300 mb-10" />

        <p className="font-mono text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-2">
          {trail.stats.distanceKm}
        </p>
        <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-8">
          km completati
        </p>

        <p className="text-sm font-light text-gray-500 mb-1">
          {trail.subtitle}
        </p>
        <p className="text-sm font-light text-gray-400">
          {trail.stats.stages} tappe · {trail.stats.days} giorni
        </p>

        <div className="w-16 h-px bg-gray-300 mt-10" />
      </div>
    </div>
  );
}
