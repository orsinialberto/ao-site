import ViaggioCard from '@/components/viaggi/ViaggioCard';
import { trips } from '@/lib/viaggi';

export default function ViaggiPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/*
          Masonry like trails.
          With one trip: full-screen layout.
          Future with more trips: 2-column grid like trails.
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
          {trips.map((trip, index) => (
            <div
              key={trip.slug}
              className={
                index === 0
                  ? 'min-h-[320px] lg:min-h-0 lg:col-start-1 lg:row-start-1 lg:row-span-12'
                  : 'min-h-[320px] lg:min-h-0 lg:col-start-2 lg:row-start-1 lg:row-span-12'
              }
            >
              <ViaggioCard trip={trip} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
