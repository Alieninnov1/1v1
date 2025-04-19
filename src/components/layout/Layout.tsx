
import { ReactNode, useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from "@/hooks/use-toast";

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
  const [showXPNotification, setShowXPNotification] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
    setIsMounted(true);
    document.body.classList.add('ethereum-theme');
    
    // Show Windows XP style notification after a delay
    const notifTimer = setTimeout(() => {
      setShowXPNotification(true);
      
      // Auto hide notification after 5 seconds
      const hideTimer = setTimeout(() => {
        setShowXPNotification(false);
      }, 5000);
      
      return () => clearTimeout(hideTimer);
    }, 2000);
    
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
      clearTimeout(notifTimer);
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
  
  const handleCloseNotification = () => {
    setShowXPNotification(false);
    toast({
      title: "Notification Closed",
      description: "You can access system notifications from the taskbar"
    });
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
        
        {/* Windows XP style notification */}
        {showXPNotification && !hideNavFooter && (
          <div className="xp-notification flex items-start gap-2 xp-notification-bubble">
            <div className="bg-blue-100 p-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div className="text-xs font-bold text-blue-800">HelixHub Explorer</div>
                <button 
                  onClick={handleCloseNotification}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="text-xs text-gray-700">Welcome to the HelixHub platform! Click on desktop icons to explore features.</div>
            </div>
          </div>
        )}
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
