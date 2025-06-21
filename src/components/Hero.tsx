export const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Beautiful</span> components<br />
            built with <span className="gradient-text">Tailwind CSS</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Copy, paste, and customize. A modern component library that makes building beautiful interfaces effortless.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg">
            Browse Components
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-xl font-semibold text-lg hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all">
            View on GitHub
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 component-preview">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-6 mx-auto flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
            <p className="text-gray-600 dark:text-gray-300">Built with performance in mind. Zero runtime overhead with pure CSS and optimized animations.</p>
          </div>

          <div className="glass-effect rounded-2xl p-8 component-preview">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-6 mx-auto flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Developer Friendly</h3>
            <p className="text-gray-600 dark:text-gray-300">Copy-paste ready components with clear documentation and TypeScript support.</p>
          </div>

          <div className="glass-effect rounded-2xl p-8 component-preview">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl mb-6 mx-auto flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Fully Responsive</h3>
            <p className="text-gray-600 dark:text-gray-300">Every component is mobile-first and works perfectly across all device sizes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};