import CamminoCard from '@/components/cammini/CamminoCard';
import { trails } from '@/lib/cammini';

export default function CamminiPage() {
  const [borghiSilenti, fishermenTrail, santiagoInglese, viaDeiDei] = trails;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/*
          Desktop: 2 columns × 12 rows (masonry like home)
          Col 1: Borghi Silenti (7 rows) + Via degli Dei (5 rows)
          Col 2: Fishermen's Trail (5 rows) + Santiago Inglese (7 rows)
          Mobile: 1 column stacked
        */}
        <div
          className="
            grid gap-3
            grid-cols-1
            md:grid-cols-2
            lg:grid-rows-[repeat(12,1fr)]
            lg:h-[calc(100vh-7rem)]
          "
        >
          {/* Borghi Silenti — col 1, top (7 rows) */}
          <div className="min-h-[320px] lg:min-h-0 lg:col-start-1 lg:row-start-1 lg:row-span-7">
            <CamminoCard trail={borghiSilenti} index={0} />
          </div>

          {/* Via degli Dei — col 1, bottom (5 rows) */}
          <div className="min-h-[260px] lg:min-h-0 lg:col-start-1 lg:row-start-8 lg:row-span-5">
            <CamminoCard trail={viaDeiDei} index={3} />
          </div>

          {/* Fishermen's Trail — col 2, top (5 rows) */}
          <div className="min-h-[260px] lg:min-h-0 lg:col-start-2 lg:row-start-1 lg:row-span-5">
            <CamminoCard trail={fishermenTrail} index={1} />
          </div>

          {/* Santiago Inglese — col 2, bottom (7 rows) */}
          <div className="min-h-[320px] lg:min-h-0 lg:col-start-2 lg:row-start-6 lg:row-span-7">
            <CamminoCard trail={santiagoInglese} index={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
