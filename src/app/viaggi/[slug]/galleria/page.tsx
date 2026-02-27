import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { trips, getTripBySlug } from '@/lib/viaggi';
import { getGalleryImagesByPrefix } from '@/lib/cloudinary-admin';
import ViaggioDetailHeader from '@/components/viaggi/ViaggioDetailHeader';
import ViaggioTabs from '@/components/viaggi/ViaggioTabs';
import ViaggioGalleryMosaic from '@/components/viaggi/ViaggioGalleryMosaic';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const MONTHS_IT = [
  'Gennaio',
  'Febbraio',
  'Marzo',
  'Aprile',
  'Maggio',
  'Giugno',
  'Luglio',
  'Agosto',
  'Settembre',
  'Ottobre',
  'Novembre',
  'Dicembre',
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

type Placement<T> = { item: T; col: number; rowStart: number; rowSpan: number };

/** Assigns mosaic grid placement (col, rowStart, rowSpan) for each image. */
function assignMosaicPlacements<T>(items: T[]): Placement<T>[] {
  const ROW_SPANS = [2, 3, 4, 2, 5, 3, 2, 4, 3, 2, 4, 5, 2, 3]; // varied heights
  const placements: Placement<T>[] = [];
  const colHeights = [0, 0, 0];

  items.forEach((item, i) => {
    const col = colHeights.indexOf(Math.min(...colHeights));
    const rowSpan = ROW_SPANS[i % ROW_SPANS.length];
    const rowStart = colHeights[col] + 1;
    placements.push({ item, col: col + 1, rowStart, rowSpan });
    colHeights[col] += rowSpan;
  });

  const totalRows = Math.max(...colHeights);
  extendLastCellToBottom(placements, totalRows);
  return placements;
}

/** Extends the last photo in each column to the bottom of the grid so all columns align. */
function extendLastCellToBottom<T>(
  placements: Placement<T>[],
  totalRows: number
): void {
  for (const col of [1, 2, 3]) {
    const inColumn = placements
      .map((p, i) => ({ p, i }))
      .filter(({ p }) => p.col === col)
      .sort((a, b) => b.p.rowStart - a.p.rowStart);
    const last = inColumn[0];
    if (last) {
      const endRow = last.p.rowStart + last.p.rowSpan - 1;
      if (endRow < totalRows) {
        placements[last.i].rowSpan = totalRows - last.p.rowStart + 1;
      }
    }
  }
}

function getMosaicTotalRows(placements: { rowStart: number; rowSpan: number }[]): number {
  let max = 0;
  placements.forEach((p) => {
    const end = p.rowStart + p.rowSpan - 1;
    if (end > max) max = end;
  });
  return max;
}

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
    title: `Galleria ${trip.title} | Alberto Orsini`,
    description: `Foto del viaggio in ${trip.location}.`,
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function ViaggioGalleriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) notFound();

  const dateLabel = formatDates(trip.dates.start, trip.dates.end);
  const folderPrefix = `travels/${trip.galleryFolder ?? slug}`;
  const images = await getGalleryImagesByPrefix(folderPrefix);

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

      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-20 pb-24 lg:pb-32">
        {images.length === 0 ? (
          <p className="text-center text-gray-500 font-mono text-sm">
            Nessuna foto in galleria per questo viaggio.
          </p>
        ) : (() => {
          const placementsWithItem = assignMosaicPlacements(images);
          const totalRows = getMosaicTotalRows(placementsWithItem);
          const placements = placementsWithItem.map(({ col, rowStart, rowSpan }) => ({
            col,
            rowStart,
            rowSpan,
          }));
          return (
            <ViaggioGalleryMosaic
              images={images}
              placements={placements}
              totalRows={totalRows}
            />
          );
        })()}
      </div>
    </div>
  );
}
