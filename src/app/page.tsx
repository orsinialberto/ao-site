import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/lib/data';

export default function Home() {
  const [trips, moto, trails, portfolio, gallery] = categories;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/*
          Desktop: CSS Grid 3 columns × 12 rows → perfect rectangle
          Col 1: Trips (5 rows) + Portfolio (7 rows) = 12
          Col 2: Moto (12 rows)                      = 12
          Col 3: Trails (7 rows) + Gallery (5 rows)  = 12
          
          Tablet: 2 columns auto-flow
          Mobile: 1 column stacked
        */}
        <div
          className="
            grid gap-3

            grid-cols-1
            md:grid-cols-2

            lg:grid-cols-3
            lg:grid-rows-[repeat(12,1fr)]
            lg:h-[calc(100vh-7rem)]
          "
        >
          {/* Trips — col 1, top (5 rows) */}
          <div className="min-h-[220px] lg:min-h-0 lg:col-start-1 lg:row-start-1 lg:row-span-5">
            <CategoryCard category={trips} index={0} />
          </div>

          {/* Portfolio — col 1, bottom (7 rows) */}
          <div className="min-h-[280px] lg:min-h-0 lg:col-start-1 lg:row-start-6 lg:row-span-7">
            <CategoryCard category={portfolio} index={1} />
          </div>

          {/* Moto — col 2, full height (12 rows) */}
          <div className="min-h-[360px] lg:min-h-0 lg:col-start-2 lg:row-start-1 lg:row-span-12">
            <CategoryCard category={moto} index={2} />
          </div>

          {/* Trails — col 3, top (7 rows) */}
          <div className="min-h-[280px] lg:min-h-0 lg:col-start-3 lg:row-start-1 lg:row-span-7">
            <CategoryCard category={trails} index={3} />
          </div>

          {/* Gallery — col 3, bottom (5 rows) */}
          <div className="min-h-[220px] lg:min-h-0 lg:col-start-3 lg:row-start-8 lg:row-span-5">
            <CategoryCard category={gallery} index={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
