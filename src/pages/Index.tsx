
import { useState, useEffect } from "react";
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
  const [showFeedback, setShowFeedback] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [show3DDemo, setShow3DDemo] = useState(false);

  // Auto-show welcome after boot completes
  useEffect(() => {
    if (!showStartup && bootProgress >= 100) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showStartup, bootProgress]);

  const openDialog = (title: string, content: string) => {
    setDialogTitle(title);
    setDialogContent(content);
    setDialogOpen(true);
    
    // If it's the 3D demo dialog, set the demo flag
    if (title.includes("3D")) {
      setShow3DDemo(true);
    }
  };

  return (
    <Layout hideNavFooter={true}>
      {showStartup ? (
        <BootScreen 
          showStartup={showStartup}
          bootProgress={bootProgress}
          setBootProgress={setBootProgress}
          setShowStartup={setShowStartup}
        />
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-[#151823] to-[#262d4a] p-4 pb-16 md:pb-4 relative overflow-hidden">
          {/* Animated network nodes in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/10 via-transparent to-transparent"></div>
            
            {/* Animated particles */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                  animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}

            {/* Lens flare effect */}
            <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-24 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
            
            {/* Grid lines */}
            <div className="absolute inset-0" style={{ 
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
                               linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
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
            onClose={() => {
              setDialogOpen(false);
              setShow3DDemo(false);
            }}
          />
          
          <WindowDialog
            title="Welcome to HelixHub Decentralized Network"
            content="HelixHub connects academia, industry, and government via a triple helix model. Explore how these three sectors collaborate to drive innovation and address skill gaps in real-time. Try our interactive 3D model to visualize these complex relationships."
            isOpen={showWelcome}
            onClose={() => setShowWelcome(false)}
          />
          
          <div className="fixed bottom-0 left-0 right-0 z-50 pb-safe-area">
            <Taskbar />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Index;
