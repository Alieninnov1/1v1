
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
        <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-500 p-4 pb-16 relative">
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
            title="Welcome to HelixHub XP"
            content="HelixHub connects academia, industry, and government to bridge skill gaps and drive innovation. Click on the desktop icons to explore different features of the platform."
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
