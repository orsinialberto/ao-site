import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { motorcycleRoutes, getMotorcycleRouteBySlug } from '@/lib/moto';
import MotoDetailHeader from '@/components/moto/MotoDetailHeader';
import MotoMapSection from '@/components/moto/MotoMapSection';
import MotoPhotoBlock from '@/components/moto/MotoPhotoBlock';

// ---------------------------------------------------------------------------
// Static params & metadata
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return motorcycleRoutes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getMotorcycleRouteBySlug(slug);
  if (!route) return {};
  return {
    title: `${route.title} | Moto | Alberto Orsini`,
    description: route.description,
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

export default async function MotoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getMotorcycleRouteBySlug(slug);
  if (!route) notFound();

  const dateLabel = formatDates(route.dates.start, route.dates.end);

  return (
    <div className="min-h-screen bg-white">
      <MotoDetailHeader
        title={route.title}
        subtitle={route.subtitle}
        dateLabel={dateLabel}
        stats={route.stats}
      />

      {/* Description */}
      <div className="max-w-2xl mx-auto px-8 text-center mb-16 lg:mb-24">
        <p className="text-base font-light leading-relaxed text-gray-600">
          {route.description}
        </p>
      </div>

      {/* GPX track map */}
      <MotoMapSection
        trailPoints={route.trailPoints}
        subtitle={route.subtitle}
        description="Il percorso è stato registrato durante il viaggio. Qui sotto la rappresentazione semplificata della traccia; puoi scaricare il file GPX per usarlo su dispositivo o software di navigazione."
        gpxUrl={route.gpxUrl}
      />

      {/* Foto del viaggio */}
      {route.photos.length > 0 && (
        <div className="max-w-6xl mx-auto px-8 mb-20">
          <p className="font-mono text-xs text-gray-400 tracking-widest uppercase text-center mb-12">
            Foto del viaggio
          </p>
          <div className="flex flex-col gap-20 lg:gap-32">
            {route.photos.map((photo, i) => (
              <MotoPhotoBlock
                key={i}
                photo={photo}
                index={i}
                side={i % 2 === 0 ? 'right' : 'left'}
              />
            ))}
          </div>
        </div>
      )}

      {/* Closing statistics */}
      <div className="py-24 lg:py-40 flex flex-col items-center text-center px-8">
        <div className="w-16 h-px bg-gray-300 mb-10" />

        <p className="font-mono text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-2">
          {route.stats.distanceKm}
        </p>
        <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-8">
          km percorsi
        </p>

        <p className="text-sm font-light text-gray-500 mb-1">
          {route.subtitle}
        </p>
        <p className="text-sm font-light text-gray-400">
          {route.stats.days} {route.stats.days === 1 ? 'giorno' : 'giorni'}
        </p>

        <div className="w-16 h-px bg-gray-300 mt-10" />
      </div>
    </div>
  );
}
