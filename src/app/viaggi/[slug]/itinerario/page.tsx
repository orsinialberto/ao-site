import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { trips, getTripBySlug } from '@/lib/viaggi';
import ViaggioDetailHeader from '@/components/viaggi/ViaggioDetailHeader';
import ViaggioTabs from '@/components/viaggi/ViaggioTabs';
import ViaggioItinerary from '@/components/viaggi/ViaggioItinerary';

// ---------------------------------------------------------------------------
// Static params & metadata
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return trips
    .filter((v) => v.itinerary && v.itinerary.length > 0)
    .map((v) => ({ slug: v.slug }));
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
    title: `Itinerario ${trip.title} | Alberto Orsini`,
    description: `Itinerario giorno per giorno del viaggio in ${trip.location}.`,
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

export default async function ViaggioItinerarioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip || !trip.itinerary || trip.itinerary.length === 0) notFound();

  const dateLabel = formatDates(trip.dates.start, trip.dates.end);

  return (
    <div className="min-h-screen bg-white">
      <ViaggioTabs slug={slug} />

      <ViaggioDetailHeader
        title={trip.title}
        subtitle={trip.subtitle}
        dateLabel={dateLabel}
        location={trip.location}
        duration={trip.duration}
      />

      <ViaggioItinerary
        itinerary={trip.itinerary}
        mapPoints={trip.mapPoints}
      />
    </div>
  );
}
