
import { ReactNode } from "react";
import PageBackground from "@/components/layout/PageBackground";
import Taskbar from "@/components/desktop/Taskbar";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#151823] to-[#262d4a] p-4 pb-16 md:pb-4 relative overflow-hidden">
      <PageBackground />
      {children}
      <div className="fixed bottom-0 left-0 right-0 z-50 pb-safe-area">
        <Taskbar />
      </div>
    </div>
  );
};

export default MainContainer;
