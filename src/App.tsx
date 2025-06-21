import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Showcase } from './components/Showcase';
import { CodeBlock } from './components/CodeBlock';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <Navbar onLoginClick={() => setIsAuthModalOpen(true)} />
      <Hero />
      <Showcase />
      <CodeBlock />
      <Pricing />
      <Footer />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
}

export default App;