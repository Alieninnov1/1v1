import { useState, useEffect, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import BootScreen from "@/components/boot/BootScreen";
import WindowDialog from "@/components/dialog/WindowDialog";
import XPTaskbar from "@/components/xp/XPTaskbar";
import OnboardingWizard from "@/components/onboarding/OnboardingWizard";
import XPBackground from "@/components/xp/XPBackground";
import BasicUIContent from "@/components/home/basic-ui/BasicUIContent";
import EnhancedUIContent from "@/components/home/enhanced-ui/EnhancedUIContent";
import XPDesktopIcons from "@/components/xp/XPDesktopIcons";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

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
  
  const handleDoubleClick = (x: number, y: number) => {
    toast({
      title: "Desktop Interaction",
      description: `Clicked at position X:${x.toFixed(0)}, Y:${y.toFixed(0)}`
    });
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
        <XPBackground>
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
          
          {/* Desktop Icons */}
          <motion.div
            className="absolute left-4 top-4 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <XPDesktopIcons />
          </motion.div>
          
          {/* Welcome Dialog */}
          <WindowDialog
            title="Welcome to HelixHub Explorer"
            content={
              <>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-2">
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-3 rounded-full">
                    <img 
                      src="/lovable-uploads/261b8a7f-e6a4-4b35-b826-2641f23da6d7.png" 
                      alt="HelixHub Logo" 
                      className="w-16 h-16 md:w-20 md:h-20 object-contain" 
                    />
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-blue-900">Welcome to HelixHub!</h2>
                    <p className="mb-4 text-sm text-gray-700">
                      HelixHub connects academia, industry, and government via a triple helix model. 
                      Explore how these three sectors collaborate to drive innovation and address 
                      skill gaps in real-time.
                    </p>
                    <p className="text-sm text-gray-700 mb-4">
                      Try our interactive 3D model to visualize these complex relationships or 
                      browse through the desktop icons to explore different modules.
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <div className="flex justify-end gap-2">
                    <Link to="/landing">
                      <Button variant="outline" className="bg-gradient-to-b from-white to-gray-100 border border-gray-300 text-gray-800 hover:from-gray-100 hover:to-gray-200">
                        View Landing Page
                      </Button>
                    </Link>
                    <Button 
                      className="bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                      onClick={() => setShowWelcome(false)}
                    >
                      Start Exploring
                    </Button>
                  </div>
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
          
          {/* Taskbar at bottom */}
          <XPTaskbar />
        </XPBackground>
      )}
    </Layout>
  );
};

export default Index;
