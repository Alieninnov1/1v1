
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import BootScreen from "@/components/boot/BootScreen";
import WindowDialog from "@/components/dialog/WindowDialog";
import Taskbar from "@/components/desktop/Taskbar";
import DesktopIconGrid from "@/components/desktop/DesktopIconGrid";
import MainWindow from "@/components/desktop/MainWindow";
import KnowledgeWindow from "@/components/desktop/KnowledgeWindow";
import FeedbackWindow from "@/components/desktop/FeedbackWindow";
import TripleHelixAnimation from "@/components/animation/TripleHelixAnimation";
import StakeholderSection from "@/components/stakeholder/StakeholderSection";
import SignalThread from "@/components/animation/SignalThread";
import AnimatedStrainGraph from "@/components/visualization/AnimatedStrainGraph";
import OnboardingWizard from "@/components/onboarding/OnboardingWizard";
import { BookOpen, Building2, Briefcase } from "lucide-react";

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
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showEnhancedUi, setShowEnhancedUi] = useState(false);
  
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

  const openDialog = (title: string, content: string) => {
    setDialogTitle(title);
    setDialogContent(content);
    setDialogOpen(true);
    
    // If it's the 3D demo dialog, set the demo flag
    if (title.includes("3D")) {
      setShow3DDemo(true);
    }
  };
  
  // Define stakeholder data for fullscreen sections
  const stakeholderData = [
    {
      title: "Academia Hub",
      role: "Educational Institution",
      metric: { label: "Curriculum Relevance", value: "87%", trend: "up" as const },
      influenceChannel: "Faculty can submit curriculum proposals and participate in industry skill gap surveys. Students receive real-time feedback on course alignment with job market demands.",
      useCase: "Metropolitan Community College updated their data science curriculum based on HelixHub signals, resulting in 94% job placement for graduates.",
      backgroundColor: "bg-gradient-to-br from-[#172554]/80 to-[#1e3a8a]/80",
      icon: <BookOpen size={24} className="text-blue-300" />,
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      index: 0
    },
    {
      title: "Industry Nexus",
      role: "Business & Workforce",
      metric: { label: "Skill Gap Reduction", value: "63%", trend: "up" as const },
      influenceChannel: "Companies can broadcast emerging skill needs and collaborate on training programs. HR teams gain insights into educational pipeline metrics.",
      useCase: "TechCorp reduced hiring time by 35% after participating in HelixHub's regional skills matching program with three local universities.",
      backgroundColor: "bg-gradient-to-br from-[#312e81]/80 to-[#4338ca]/80",
      icon: <Briefcase size={24} className="text-indigo-300" />,
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      index: 1
    },
    {
      title: "Government Gateway",
      role: "Policy & Governance",
      metric: { label: "Policy Effectiveness", value: "76%", trend: "up" as const },
      influenceChannel: "Decision makers visualize educational and workforce outcomes in real-time. Grant programs automatically match to highest-impact initiatives.",
      useCase: "State Economic Development Agency improved workforce development grant outcomes by 42% after adopting HelixHub's recommendation engine.",
      backgroundColor: "bg-gradient-to-br from-[#4c1d95]/80 to-[#6d28d9]/80",
      icon: <Building2 size={24} className="text-purple-300" />,
      imageSrc: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      index: 2
    }
  ];

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
          
          <AnimatePresence>
            {!showEnhancedUi ? (
              <>
                <DesktopIconGrid 
                  onKnowledgeBaseClick={() => setShowKnowledgeBase(!showKnowledgeBase)}
                  onFeedbackClick={() => setShowFeedback(!showFeedback)}
                  onDialogOpen={openDialog}
                />
                
                <MainWindow />
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* New UI Components */}
                <TripleHelixAnimation />
                
                {/* Stakeholder Sections */}
                {stakeholderData.map((stakeholder, index) => (
                  <StakeholderSection
                    key={index}
                    title={stakeholder.title}
                    role={stakeholder.role}
                    metric={stakeholder.metric}
                    influenceChannel={stakeholder.influenceChannel}
                    useCase={stakeholder.useCase}
                    backgroundColor={stakeholder.backgroundColor}
                    icon={stakeholder.icon}
                    imageSrc={stakeholder.imageSrc}
                    index={stakeholder.index}
                  />
                ))}
                
                {/* Signal Thread */}
                <SignalThread className="bg-[#151823]" />
                
                {/* Animated Strain Graph */}
                <AnimatedStrainGraph className="bg-gradient-to-br from-[#151823] to-[#1a1d2d]" />
                
                {/* Call to action for onboarding */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="py-20 text-center"
                >
                  <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                      Join the HelixHub Network
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                      Begin your journey as a contributor to the ecosystem. Share your insights and connect with other stakeholders.
                    </p>
                    <button 
                      onClick={() => setShowOnboarding(true)}
                      className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
                    >
                      Get Started Now
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
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
          
          {/* Onboarding Wizard */}
          <OnboardingWizard 
            isOpen={showOnboarding} 
            onClose={() => setShowOnboarding(false)}
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
