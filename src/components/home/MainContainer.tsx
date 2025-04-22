
import { ReactNode, memo } from "react";
import PageBackground from "@/components/layout/PageBackground";
import Taskbar from "@/components/desktop/Taskbar";
import { useIsMobile } from "@/hooks/use-mobile";

interface MainContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Main container component that includes the page background and taskbar
 * Optimized for performance with memo and responsive design
 */
const MainContainer = ({ children, className = "" }: MainContainerProps) => {
  const isMobile = useIsMobile();

  // Combine classes with proper spacing based on mobile/desktop
  const containerClasses = `${
    isMobile ? 'px-3 pb-16 pt-2' : 'px-4 pb-4 pt-3'
  } container mx-auto ${className}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#151823] to-[#262d4a] relative overflow-hidden">
      {/* Background with particles and gradients */}
      <PageBackground />
      
      {/* Main content with responsive padding */}
      <div className={containerClasses}>
        {children}
      </div>
      
      {/* Fixed taskbar at the bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pb-safe-area">
        <Taskbar />
      </div>
    </div>
  );
};

// Memoize component to prevent unnecessary re-renders
export default memo(MainContainer);
