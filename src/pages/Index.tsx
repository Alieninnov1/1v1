
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import BootScreen from "@/components/boot/BootScreen";
import MainContainer from "@/components/home/MainContainer";
import StartupView from "@/components/home/StartupView";
import EnhancedView from "@/components/home/EnhancedView";
import WelcomeDialog from "@/components/home/WelcomeDialog";
import SEO from "@/components/SEO";
import InteractiveDemo from "@/components/home/InteractiveDemo";
import { HelmetProvider } from "react-helmet-async";
import { trackEvent } from "@/utils/analytics";

const Index = () => {
  const [showStartup, setShowStartup] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showEnhancedUi, setShowEnhancedUi] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Personalization: track first time visitor
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem("helixhub-username");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  useEffect(() => {
    // Auto-show welcome after boot completes
    if (!showStartup && bootProgress >= 100) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
        trackEvent('pageView', { page: "home" }); // Analytics: log home view
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showStartup, bootProgress]);

  useEffect(() => {
    // Start showing enhanced UI after welcome is dismissed
    if (!showWelcome && !showStartup && bootProgress >= 100) {
      setShowEnhancedUi(true);
    }
  }, [showWelcome, showStartup, bootProgress]);

  // Accessibility improvement: Proper heading structure
  return (
    <HelmetProvider>
      <SEO />
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
            <header className="py-8 text-center sr-only">
              <h1>HelixHub: Civic Alignment Platform</h1>
            </header>
            {!showEnhancedUi ? (
              <StartupView />
            ) : (
              <>
                {/* Personalized greeting example */}
                <section aria-live="polite" className="mb-6">
                  <span className="sr-only">Personalized greeting</span>
                  {userName ? (
                    <h2 className="text-lg text-purple-300 font-semibold">Welcome back, {userName}!</h2>
                  ) : (
                    <h2 className="text-lg text-purple-300 font-semibold">
                      Welcome to HelixHub!{" "}
                      <button
                        className="ml-2 underline text-blue-400 hover:text-blue-200 focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                        aria-label="Set your display name"
                        onClick={() => {
                          const name = prompt("Enter your name for a personalized experience:");
                          if (name?.trim()) {
                            localStorage.setItem("helixhub-username", name.trim());
                            setUserName(name.trim());
                            trackEvent('buttonClick', { action: "set display name" });
                          }
                        }}
                      >
                        Personalize
                      </button>
                    </h2>
                  )}
                </section>
                {/* INTERACTIVE DEMO */}
                <InteractiveDemo />
                <EnhancedView 
                  showOnboarding={showOnboarding}
                  setShowOnboarding={setShowOnboarding}
                />
              </>
            )}
            
            <WelcomeDialog
              isOpen={showWelcome}
              onClose={() => setShowWelcome(false)}
            />
          </MainContainer>
        )}
      </Layout>
    </HelmetProvider>
  );
};

export default Index;
