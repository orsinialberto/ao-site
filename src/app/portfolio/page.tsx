export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-light tracking-wider mb-8 text-center">
          Portfolio
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I miei progetti e lavori. Una raccolta delle mie realizzazioni.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Le tue foto andranno qui */}
          <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
            <p className="text-gray-400">Aggiungi le tue foto qui</p>
          </div>
        </div>
      </div>
    </div>
  );
}
