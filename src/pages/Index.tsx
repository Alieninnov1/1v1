
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import BootScreen from "@/components/boot/BootScreen";
import MainContainer from "@/components/home/MainContainer";
import StartupView from "@/components/home/StartupView";
import EnhancedView from "@/components/home/EnhancedView";
import WelcomeDialog from "@/components/home/WelcomeDialog";

const Index = () => {
  const [showStartup, setShowStartup] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showEnhancedUi, setShowEnhancedUi] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  
  // Auto-show welcome after boot completes
  useEffect(() => {
    if (!showStartup && bootProgress >= 100) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showStartup, bootProgress]);
  
  // Start showing enhanced UI after welcome is dismissed
  useEffect(() => {
    if (!showWelcome && !showStartup && bootProgress >= 100) {
      setShowEnhancedUi(true);
    }
  }, [showWelcome, showStartup, bootProgress]);

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
        <MainContainer>
          {!showEnhancedUi ? (
            <StartupView />
          ) : (
            <EnhancedView 
              showOnboarding={showOnboarding}
              setShowOnboarding={setShowOnboarding}
            />
          )}
          
          <WelcomeDialog
            isOpen={showWelcome}
            onClose={() => setShowWelcome(false)}
          />
        </MainContainer>
      )}
    </Layout>
  );
};

export default Index;
