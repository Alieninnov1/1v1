
import { ReactNode, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  hideNavFooter?: boolean;
}

const Layout = ({ children, hideNavFooter = false }: LayoutProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
    
    // Mount animation
    setIsMounted(true);
    
    // Add Ethereum-inspired theme class to body for global styling
    document.body.classList.add('ethereum-theme');
    
    return () => {
      document.body.classList.remove('ethereum-theme');
    };
  }, []);

  // Apply hardware acceleration to improve performance
  const baseStyles = 'flex flex-col min-h-screen bg-gray-900 text-white';
  const animationStyles = !isReducedMotion && isMounted ? 'fade-in' : '';

  return (
    <div 
      className={`${baseStyles} ${animationStyles}`}
      style={{ 
        transform: 'translateZ(0)', 
        willChange: 'opacity' 
      }}
    >
      {!hideNavFooter && <Navbar />}
      <main className="flex-grow relative overflow-hidden">
        {children}
      </main>
      {!hideNavFooter && <Footer />}
    </div>
  );
};

export default Layout;
