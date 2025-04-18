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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
    setIsMounted(true);
    document.body.classList.add('ethereum-theme');
    
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - prevScrollY.current) > 5) {
        setScrollY(currentScrollY);
        prevScrollY.current = currentScrollY;
      }
    }, 16);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.body.classList.remove('ethereum-theme');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const baseStyles = 'flex flex-col min-h-screen bg-gradient-to-b from-[#151823] to-[#262d4a] text-white';
  const animationStyles = !isReducedMotion && isMounted ? 'fade-in transform-gpu' : '';
  
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

const throttle = (callback: Function, delay: number) => {
  let lastCall = 0;
  return function() {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      callback();
    }
  };
};

export default Layout;
