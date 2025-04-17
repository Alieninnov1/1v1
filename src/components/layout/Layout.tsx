
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
    // Add Ethereum-inspired theme class to body for global styling
    document.body.classList.add('ethereum-theme');
    
    return () => {
      document.body.classList.remove('ethereum-theme');
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-screen bg-gray-900 text-white ${isMounted ? 'fade-in' : ''}`}>
      {!hideNavFooter && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideNavFooter && <Footer />}
    </div>
  );
};

export default Layout;
