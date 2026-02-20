export default function ContattiPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-light tracking-wider mb-8 text-center">
          Contatti
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Vuoi entrare in contatto con me? Scrivimi!
        </p>
        
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 font-light tracking-wider hover:bg-gray-700 transition-colors"
            >
              Invia Messaggio
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
