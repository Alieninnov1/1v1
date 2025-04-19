
import { useState } from "react";
import DesktopIconGrid from "@/components/desktop/DesktopIconGrid";
import MainWindow from "@/components/desktop/MainWindow";
import KnowledgeWindow from "@/components/desktop/KnowledgeWindow";
import FeedbackWindow from "@/components/desktop/FeedbackWindow";
import WindowDialog from "@/components/dialog/WindowDialog";

const StartupView = () => {
  const [showKnowledgeBase, setShowKnowledgeBase] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState("");

  const openDialog = (title: string, content: string) => {
    setDialogTitle(title);
    setDialogContent(content);
    setDialogOpen(true);
  };

  return (
    <>
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
    </>
  );
};

export default StartupView;
