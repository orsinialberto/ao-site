import MotoCard from '@/components/moto/MotoCard';
import { motorcycleRoutes } from '@/lib/moto';

export default function MotoPage() {
  const [dolomites, coast, appennines] = motorcycleRoutes;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center px-4 mb-10">
          <h1 className="text-4xl lg:text-5xl font-light tracking-wider text-gray-900 mb-3">
            Moto
          </h1>
          <p className="text-base font-light text-gray-500 max-w-2xl mx-auto">
            Percorsi in moto con tracce GPX, statistiche e foto di viaggio.
          </p>
        </div>

        {/*
          Desktop: 2 columns × 12 rows (masonry like trails)
          Col 1: Dolomiti (7) + Appennino (5)
          Col 2: Costiera (12)
          Mobile: 1 colonna impilata
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
          <div className="min-h-[320px] lg:min-h-0 lg:col-start-1 lg:row-start-1 lg:row-span-7">
            <MotoCard route={dolomites} index={0} />
          </div>

          <div className="min-h-[260px] lg:min-h-0 lg:col-start-1 lg:row-start-8 lg:row-span-5">
            <MotoCard route={appennines} index={2} />
          </div>

          <div className="min-h-[360px] lg:min-h-0 lg:col-start-2 lg:row-start-1 lg:row-span-12">
            <MotoCard route={coast} index={1} />
          </div>
        </div>

        {/* Total statistics */}
        <div className="mt-16 py-12 border-t border-gray-100">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            <div className="text-center">
              <p className="font-mono text-3xl lg:text-4xl font-light text-gray-900">
                {motorcycleRoutes.reduce((acc, p) => acc + p.stats.distanceKm, 0)}
              </p>
              <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mt-1">
                km totali
              </p>
            </div>
            <div className="text-center">
              <p className="font-mono text-3xl lg:text-4xl font-light text-gray-900">
                {motorcycleRoutes.length}
              </p>
              <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mt-1">
                percorsi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
