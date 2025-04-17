
import { ReactNode, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  hideNavFooter?: boolean;
}

const Layout = ({ children, hideNavFooter = false }: LayoutProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Add XP interface theme class to body for global styling
    document.body.classList.add('xp-theme');
    
    return () => {
      document.body.classList.remove('xp-theme');
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${isMounted ? 'fade-in' : ''}`}>
      {!hideNavFooter && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideNavFooter && <Footer />}
    </div>
  );
};

export default Layout;
