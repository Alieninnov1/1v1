
import { ReactNode, useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: ReactNode;
  hideNavFooter?: boolean;
}

const Layout = ({ children, hideNavFooter = false }: LayoutProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const prevScrollY = useRef(0);
  const isMobile = useIsMobile();
  
  // Performance optimization with throttling
  const throttleScroll = (callback: Function, delay: number) => {
    let lastCall = 0;
    return function() {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        callback();
      }
    };
  };

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
    
    // Mount animation
    setIsMounted(true);
    
    // Add theme class to body
    document.body.classList.add('ethereum-theme');
    
    // Optimized scroll handler with throttling
    const handleScroll = throttleScroll(() => {
      const currentScrollY = window.scrollY;
      // Only update state if there's a significant change to reduce renders
      if (Math.abs(currentScrollY - prevScrollY.current) > 5) {
        setScrollY(currentScrollY);
        prevScrollY.current = currentScrollY;
      }
    }, 16); // ~60fps
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.body.classList.remove('ethereum-theme');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Apply hardware acceleration and 3D transforms only if not reduced motion
  const baseStyles = 'flex flex-col min-h-screen bg-gradient-to-b from-[#151823] to-[#262d4a] text-white';
  const animationStyles = !isReducedMotion && isMounted ? 'fade-in transform-gpu' : '';
  
  // Calculated parallax style with reduced effect on mobile
  const parallaxStyle = {
    transform: !isReducedMotion 
      ? `translate3d(0, ${scrollY * (isMobile ? 0.02 : 0.05)}px, 0)`
      : 'none',
    transition: !isReducedMotion
      ? 'transform 0.1s cubic-bezier(0.215, 0.61, 0.355, 1)'
      : 'none',
    willChange: !isReducedMotion ? 'transform' : 'auto'
  };

  return (
    <div 
      className={`${baseStyles} ${animationStyles}`}
      style={{ 
        transformStyle: !isReducedMotion ? 'preserve-3d' : 'flat',
        perspective: !isReducedMotion ? '1000px' : 'none',
        height: '100%'
      }}
    >
      {!hideNavFooter && <Navbar />}
      <main 
        className="flex-grow relative overflow-hidden"
        style={!isReducedMotion ? parallaxStyle : {}}
      >
        {children}
      </main>
      {!hideNavFooter && <Footer />}
    </div>
  );
};

export default Layout;
