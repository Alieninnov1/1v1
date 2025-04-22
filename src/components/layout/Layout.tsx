
import { ReactNode, useState, useEffect, useRef, CSSProperties } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';

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
      setScrollY(window.scrollY);
    }, 100); // Increased throttle time to reduce calculations
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.body.classList.remove('ethereum-theme');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const baseStyles = 'flex flex-col min-h-screen bg-[#0c101d] text-white';
  const animationStyles = !isReducedMotion && isMounted ? 'fade-in transform-gpu' : '';
  
  // Define parallax style with properly typed CSS properties
  const parallaxStyle: CSSProperties = isReducedMotion ? {} : {
    willChange: 'transform',
    transform: 'translateZ(0)',
    ...({
      backfaceVisibility: 'hidden',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    } as unknown as CSSProperties)
  };

  return (
    <div 
      className={`${baseStyles} ${animationStyles}`}
      style={{ 
        transformStyle: !isReducedMotion ? 'preserve-3d' : 'flat',
        perspective: !isReducedMotion ? '1000px' : 'none',
      }}
    >
      <AnimatePresence mode="wait">
        {!hideNavFooter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>
      
      <main 
        className="flex-grow relative"
        style={parallaxStyle}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <AnimatePresence mode="wait">
        {!hideNavFooter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
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
