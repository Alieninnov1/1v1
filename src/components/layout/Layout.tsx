
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
    
    // Mount animation
    setIsMounted(true);
    
    // Add Ethereum-inspired theme class to body
    document.body.classList.add('ethereum-theme');
    
    // Handle scroll effects
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.body.classList.remove('ethereum-theme');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Apply hardware acceleration and 3D transforms
  const baseStyles = 'flex flex-col min-h-screen text-white perspective-1000';
  const animationStyles = !isReducedMotion && isMounted ? 'fade-in transform-gpu' : '';
  const parallaxStyle = {
    transform: `translate3d(0, ${scrollY * 0.1}px, 0)`,
    transition: 'transform 0.1s cubic-bezier(0.215, 0.61, 0.355, 1)'
  };

  return (
    <div 
      className={`${baseStyles} ${animationStyles}`}
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {!hideNavFooter && <Navbar />}
      <main 
        className="flex-grow relative overflow-hidden"
        style={parallaxStyle}
      >
        {children}
      </main>
      {!hideNavFooter && <Footer />}
    </div>
  );
};

export default Layout;
