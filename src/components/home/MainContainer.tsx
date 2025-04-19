
import { ReactNode } from "react";
import PageBackground from "@/components/layout/PageBackground";
import Taskbar from "@/components/desktop/Taskbar";
import { useIsMobile } from "@/hooks/use-mobile";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#151823] to-[#262d4a] relative overflow-hidden">
      <PageBackground />
      <div className={`container mx-auto ${isMobile ? 'px-3 pb-16' : 'px-4 pb-4'}`}>
        {children}
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 pb-safe-area">
        <Taskbar />
      </div>
    </div>
  );
};

export default MainContainer;
