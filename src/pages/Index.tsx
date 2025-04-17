
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import BootScreen from "@/components/boot/BootScreen";
import WindowDialog from "@/components/dialog/WindowDialog";
import Taskbar from "@/components/desktop/Taskbar";
import DesktopIconGrid from "@/components/desktop/DesktopIconGrid";
import MainWindow from "@/components/desktop/MainWindow";
import KnowledgeWindow from "@/components/desktop/KnowledgeWindow";
import FeedbackWindow from "@/components/desktop/FeedbackWindow";

const Index = () => {
  const [showStartup, setShowStartup] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState("");
  const [showKnowledgeBase, setShowKnowledgeBase] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const openDialog = (title: string, content: string) => {
    setDialogTitle(title);
    setDialogContent(content);
    setDialogOpen(true);
  };

  return (
    <Layout>
      {showStartup ? (
        <BootScreen 
          showStartup={showStartup}
          bootProgress={bootProgress}
          setBootProgress={setBootProgress}
          setShowStartup={setShowStartup}
        />
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 p-4 pb-16 relative overflow-hidden bg-mesh-pattern">
          {/* Animated ethereum-style network nodes in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <radialGradient id="network-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#7E69AB" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1A1F2C" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#network-gradient)" />
            </svg>
          </div>
          
          <DesktopIconGrid 
            onKnowledgeBaseClick={() => setShowKnowledgeBase(!showKnowledgeBase)}
            onFeedbackClick={() => setShowFeedback(!showFeedback)}
            onDialogOpen={openDialog}
          />
          
          <MainWindow />
          
          {showKnowledgeBase && (
            <KnowledgeWindow onClose={() => setShowKnowledgeBase(false)} />
          )}

          {showFeedback && (
            <FeedbackWindow onClose={() => setShowFeedback(false)} />
          )}
          
          <WindowDialog
            title={dialogTitle}
            content={dialogContent}
            isOpen={dialogOpen}
            onClose={() => setDialogOpen(false)}
          />
          
          <WindowDialog
            title="Welcome to HelixHub Decentralized Network"
            content="HelixHub connects academia, industry, and government via a decentralized blockchain network. Governance is handled by the HelixDAO, ensuring transparent and democratic decision-making. Explore the desktop icons to discover features of the platform."
            isOpen={showWelcome}
            onClose={() => setShowWelcome(false)}
          />
          
          <div className="fixed bottom-0 left-0 right-0 z-50">
            <Taskbar />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Index;
