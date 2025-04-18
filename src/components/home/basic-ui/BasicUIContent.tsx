
import { AnimatePresence } from "framer-motion";
import DesktopIconGrid from "@/components/desktop/DesktopIconGrid";
import MainWindow from "@/components/desktop/MainWindow";
import KnowledgeWindow from "@/components/desktop/KnowledgeWindow";
import FeedbackWindow from "@/components/desktop/FeedbackWindow";
import WindowDialog from "@/components/dialog/WindowDialog";
import { ReactNode } from "react";

interface BasicUIContentProps {
  showKnowledgeBase: boolean;
  setShowKnowledgeBase: (show: boolean) => void;
  showFeedback: boolean;
  setShowFeedback: (show: boolean) => void;
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  dialogTitle: string;
  dialogContent: ReactNode;
  setShow3DDemo: (show: boolean) => void;
  onDialogOpen: (title: string, content: ReactNode) => void;
}

const BasicUIContent = ({
  showKnowledgeBase,
  setShowKnowledgeBase,
  showFeedback,
  setShowFeedback,
  dialogOpen,
  setDialogOpen,
  dialogTitle,
  dialogContent,
  setShow3DDemo,
  onDialogOpen
}: BasicUIContentProps) => {
  return (
    <>
      <DesktopIconGrid 
        onKnowledgeBaseClick={() => setShowKnowledgeBase(!showKnowledgeBase)}
        onFeedbackClick={() => setShowFeedback(!showFeedback)}
        onDialogOpen={onDialogOpen}
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
    </>
  );
};

export default BasicUIContent;
