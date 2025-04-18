
import { useState, useEffect, ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import BootScreen from "@/components/boot/BootScreen";
import WindowDialog from "@/components/dialog/WindowDialog";
import Taskbar from "@/components/desktop/Taskbar";
import OnboardingWizard from "@/components/onboarding/OnboardingWizard";
import AnimatedBackground from "@/components/home/background/AnimatedBackground";
import BasicUIContent from "@/components/home/basic-ui/BasicUIContent";
import EnhancedUIContent from "@/components/home/enhanced-ui/EnhancedUIContent";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showStartup, setShowStartup] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState<ReactNode>(null);
  const [showKnowledgeBase, setShowKnowledgeBase] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [show3DDemo, setShow3DDemo] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showEnhancedUi, setShowEnhancedUi] = useState(false);
  
  useEffect(() => {
    if (!showStartup && bootProgress >= 100) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showStartup, bootProgress]);
  
  useEffect(() => {
    if (!showWelcome && !showStartup && bootProgress >= 100) {
      setShowEnhancedUi(true);
    }
  }, [showWelcome, showStartup, bootProgress]);

  const openDialog = (title: string, content: ReactNode) => {
    setDialogTitle(title);
    setDialogContent(content);
    setDialogOpen(true);
    
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
        <AnimatedBackground>
          <AnimatePresence>
            {!showEnhancedUi ? (
              <BasicUIContent 
                showKnowledgeBase={showKnowledgeBase}
                setShowKnowledgeBase={setShowKnowledgeBase}
                showFeedback={showFeedback}
                setShowFeedback={setShowFeedback}
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                dialogTitle={dialogTitle}
                dialogContent={dialogContent}
                setShow3DDemo={setShow3DDemo}
                onDialogOpen={openDialog}
              />
            ) : (
              <EnhancedUIContent setShowOnboarding={setShowOnboarding} />
            )}
          </AnimatePresence>
          
          <WindowDialog
            title="Welcome to HelixHub Decentralized Network"
            content={
              <>
                <p className="mb-4">HelixHub connects academia, industry, and government via a triple helix model. Explore how these three sectors collaborate to drive innovation and address skill gaps in real-time. Try our interactive 3D model to visualize these complex relationships.</p>
                <div className="flex justify-end">
                  <Link to="/landing">
                    <Button variant="outline" className="bg-transparent border-purple-500/30 text-white hover:bg-purple-900/20">
                      View Investor Landing Page
                    </Button>
                  </Link>
                </div>
              </>
            }
            isOpen={showWelcome}
            onClose={() => setShowWelcome(false)}
          />
          
          <OnboardingWizard 
            isOpen={showOnboarding} 
            onClose={() => setShowOnboarding(false)}
          />
          
          <div className="fixed bottom-0 left-0 right-0 z-50 pb-safe-area">
            <Taskbar />
          </div>
        </AnimatedBackground>
      )}
    </Layout>
  );
};

export default Index;
