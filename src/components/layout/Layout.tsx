
import { ReactNode, useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, useScroll, useTransform } from 'framer-motion';
import XPTaskbar from '@/components/xp/XPTaskbar';

interface LayoutProps {
  children: ReactNode;
  hideNavFooter?: boolean;
  brutalistTheme?: boolean;
}

const Layout = ({ children, hideNavFooter = false, brutalistTheme = true }: LayoutProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const prevScrollY = useRef(0);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();
  
  // Parallax and visual effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
    setIsMounted(true);
    document.body.classList.add('brutalist-theme');
    
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - prevScrollY.current) > 5) {
        setScrollY(currentScrollY);
        prevScrollY.current = currentScrollY;
      }
    }, 16);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.body.classList.remove('brutalist-theme');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const baseStyles = 'flex flex-col min-h-screen bg-gradient-to-b from-[#0C0D16] to-[#1D1F35] text-white';
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
      className={`${baseStyles} ${animationStyles} noise-texture`}
      style={{ 
        transformStyle: !isReducedMotion ? 'preserve-3d' : 'flat',
        perspective: !isReducedMotion ? '1000px' : 'none',
      }}
    >
      {/* Brutalist background elements */}
      {brutalistTheme && !isReducedMotion && (
        <motion.div 
          className="fixed inset-0 z-[-2] pointer-events-none"
          style={{ y: backgroundY, opacity }}
        >
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 grid-pattern"></div>
          
          {/* Accent geometric shapes */}
          <motion.div 
            className="absolute top-[20%] right-[10%] w-60 h-60 bg-helix-purple/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.3, 0.6, 0.3] 
            }} 
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute bottom-[30%] left-[5%] w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2], 
              opacity: [0.2, 0.5, 0.2] 
            }} 
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Brutalist accent lines */}
          <div className="absolute top-20 right-0 h-[1px] w-1/3 bg-helix-purple/30"></div>
          <div className="absolute top-[40%] left-0 h-[2px] w-1/4 bg-helix-purple/20"></div>
          <div className="absolute bottom-[20%] right-[20%] h-[3px] w-1/5 bg-helix-purple/40"></div>
        </motion.div>
      )}

      {!hideNavFooter && <Navbar />}
      
      <main 
        className="flex-grow relative overflow-hidden pb-12"
        style={!isReducedMotion ? parallaxStyle : {}}
      >
        {children}
      </main>
      
      {!hideNavFooter && <Footer />}
      
      {/* XP Taskbar - always shown */}
      <XPTaskbar />
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
