export const Showcase = () => {
  return (
    <section id="components" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Premium Components</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Beautifully crafted components that you can copy and paste into your apps. Built with Tailwind CSS and Framer Motion.
          </p>
        </div>

        {/* Component Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Button Component */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 component-preview">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Animated Buttons</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Interactive buttons with hover effects</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
                Primary Button
              </button>
              <button className="w-full px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all">
                Secondary Button
              </button>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-1 rounded-full">React • HTML</span>
              <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 font-medium">
                Copy Code
              </button>
            </div>
          </div>

          {/* Card Component */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 component-preview">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Glass Cards</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Modern glassmorphism cards</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mb-4"></div>
              <h4 className="font-semibold mb-2">Glass Card</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Beautiful translucent card with backdrop blur effect.</p>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-2 py-1 rounded-full">Premium</span>
              <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 font-medium">
                Copy Code
              </button>
            </div>
          </div>

          {/* Modal Component */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 component-preview">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Animated Modals</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Smooth modal transitions</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">Modal Title</h4>
                <button className="text-gray-400 hover:text-gray-600">×</button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Modal content goes here...</p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-purple-600 text-white text-xs rounded">Save</button>
                <button className="px-3 py-1 border border-gray-300 text-xs rounded">Cancel</button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-2 py-1 rounded-full">Premium</span>
              <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 font-medium">
                Copy Code
              </button>
            </div>
          </div>

          {/* Navigation Component */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 component-preview">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Navigation Bars</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Responsive navigation components</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  <span className="font-semibold text-sm">Brand</span>
                </div>
                <div className="flex space-x-3 text-xs">
                  <a href="#" className="text-purple-600">Home</a>
                  <a href="#" className="text-gray-600">About</a>
                  <a href="#" className="text-gray-600">Contact</a>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-1 rounded-full">React • HTML</span>
              <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 font-medium">
                Copy Code
              </button>
            </div>
          </div>

          {/* Form Component */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 component-preview">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Form Elements</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Beautifully styled form inputs</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div>
                <input type="text" placeholder="Email address" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <input type="password" placeholder="Password" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
              </div>
              <button className="w-full px-3 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors">
                Sign In
              </button>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-2 py-1 rounded-full">Premium</span>
              <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 font-medium">
                Copy Code
              </button>
            </div>
          </div>

          {/* Dashboard Component */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 component-preview">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Dashboard Cards</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Analytics and metrics cards</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Revenue</div>
                <div className="text-lg font-bold text-green-600">$12,345</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Users</div>
                <div className="text-lg font-bold text-blue-600">1,234</div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-2 py-1 rounded-full">Premium</span>
              <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 font-medium">
                Copy Code
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
            View All Components
          </button>
        </div>
      </div>
    </section>
  );
};