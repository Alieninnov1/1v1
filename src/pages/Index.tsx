
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CallToAction from "@/components/home/CallToAction";
import KnowledgeBase from "@/components/knowledge/KnowledgeBase";
import { Computer, FileText, Info, Maximize2, Minimize2, Settings, Shield, X, BookOpen, Brain, Briefcase, PanelLeft, Wrench } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import BootScreen from "@/components/boot/BootScreen";
import DesktopIcon from "@/components/desktop/DesktopIcon";
import WindowDialog from "@/components/dialog/WindowDialog";
import Taskbar from "@/components/desktop/Taskbar";
import RealTimeFeedbackWall from "@/components/feedback/RealTimeFeedbackWall";

const Index = () => {
  const [showStartup, setShowStartup] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState("");
  const [showKnowledgeBase, setShowKnowledgeBase] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const navigate = useNavigate();
  const controls = useAnimation();
  const { toast } = useToast();

  useEffect(() => {
    if (!showStartup) {
      controls.start("visible");
      setTimeout(() => {
        setShowWelcome(true);
      }, 1000);
    }
  }, [showStartup, controls]);

  const openDialog = (title: string, content: string) => {
    setDialogTitle(title);
    setDialogContent(content);
    setDialogOpen(true);
  };

  const desktopIcons = [
    { name: "Dashboard", icon: Computer, color: "blue", action: () => navigate('/dashboard') },
    { name: "Knowledge Base", icon: BookOpen, color: "purple", action: () => setShowKnowledgeBase(!showKnowledgeBase) },
    { name: "Curriculum", icon: FileText, color: "yellow", action: () => openDialog("Curriculum Alignment", "Connect curriculum to industry needs and policy requirements in real-time.") },
    { name: "Policy Sandbox", icon: Shield, color: "green", action: () => openDialog("Policy Sandbox", "Simulate the impact of education policies before implementing them.") },
    { name: "AI Assistant", icon: Brain, color: "indigo", action: () => openDialog("AI Curriculum Assistant", "Get AI-powered recommendations to align curriculum with industry needs and future skills.") },
    { name: "Feedback Wall", icon: PanelLeft, color: "orange", action: () => setShowFeedback(!showFeedback) },
    { name: "Tools", icon: Wrench, color: "red", action: () => openDialog("HelixHub Tools", "Access tools for analyzing curriculum-industry alignment and regional skill gaps.") },
    { name: "Settings", icon: Settings, color: "gray", action: () => toast({ title: "Settings", description: "Configure your HelixHub experience" }) },
  ];

  // Split icons into rows for better mobile organization
  const firstRowIcons = desktopIcons.slice(0, 4);
  const secondRowIcons = desktopIcons.slice(4);

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
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {/* First row of icons */}
            {firstRowIcons.map((icon, index) => (
              <DesktopIcon
                key={`row1-${index}`}
                name={icon.name}
                icon={icon.icon}
                color={icon.color}
                onClick={icon.action}
              />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
            className="mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {/* Second row of icons */}
            {secondRowIcons.map((icon, index) => (
              <DesktopIcon
                key={`row2-${index}`}
                name={icon.name}
                icon={icon.icon}
                color={icon.color}
                onClick={icon.action}
              />
            ))}
          </motion.div>
          
          {/* Main window - always show */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="xp-window max-w-7xl mx-auto mb-8">
            <div className="xp-title-bar">
              <div className="flex items-center">
                <Computer size={14} />
                <span className="ml-2">HelixHub Explorer</span>
              </div>
              <div className="xp-window-buttons">
                <motion.button 
                  className="xp-window-button xp-minimize" 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toast({ title: "Window Minimized", description: "This window would be minimized to the taskbar" })}
                >
                  <Minimize2 size={10} />
                </motion.button>
                <motion.button 
                  className="xp-window-button xp-maximize" 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toast({ title: "Window Maximized", description: "This window would be maximized to full screen" })}
                >
                  <Maximize2 size={10} />
                </motion.button>
                <motion.button 
                  className="xp-window-button xp-close" 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toast({ title: "Window Closed", description: "This window would be closed" })}
                >
                  <X size={10} />
                </motion.button>
              </div>
            </div>
            
            <div className="xp-window-content overflow-auto">
              <Hero />
              <Features />
              <CallToAction />
            </div>
          </motion.div>
          
          {/* Knowledge Base Window - conditional */}
          {showKnowledgeBase && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="xp-window max-w-7xl mx-auto mb-8"
            >
              <div className="xp-title-bar">
                <div className="flex items-center">
                  <BookOpen size={14} />
                  <span className="ml-2">HelixHub Knowledge Base</span>
                </div>
                <div className="xp-window-buttons">
                  <motion.button 
                    className="xp-window-button xp-minimize" 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toast({ title: "Window Minimized", description: "Knowledge Base would be minimized to the taskbar" })}
                  >
                    <Minimize2 size={10} />
                  </motion.button>
                  <motion.button 
                    className="xp-window-button xp-maximize" 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toast({ title: "Window Maximized", description: "Knowledge Base would be maximized to full screen" })}
                  >
                    <Maximize2 size={10} />
                  </motion.button>
                  <motion.button 
                    className="xp-window-button xp-close" 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowKnowledgeBase(false)}
                  >
                    <X size={10} />
                  </motion.button>
                </div>
              </div>
              
              <div className="xp-window-content overflow-auto">
                <KnowledgeBase />
              </div>
            </motion.div>
          )}

          {/* Feedback Wall Window - conditional */}
          {showFeedback && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="xp-window max-w-7xl mx-auto mb-8"
            >
              <div className="xp-title-bar">
                <div className="flex items-center">
                  <PanelLeft size={14} />
                  <span className="ml-2">HelixHub Feedback Wall</span>
                </div>
                <div className="xp-window-buttons">
                  <motion.button 
                    className="xp-window-button xp-minimize" 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toast({ title: "Window Minimized", description: "Feedback Wall would be minimized to the taskbar" })}
                  >
                    <Minimize2 size={10} />
                  </motion.button>
                  <motion.button 
                    className="xp-window-button xp-maximize" 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toast({ title: "Window Maximized", description: "Feedback Wall would be maximized to full screen" })}
                  >
                    <Maximize2 size={10} />
                  </motion.button>
                  <motion.button 
                    className="xp-window-button xp-close" 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowFeedback(false)}
                  >
                    <X size={10} />
                  </motion.button>
                </div>
              </div>
              
              <div className="xp-window-content overflow-auto">
                <RealTimeFeedbackWall />
              </div>
            </motion.div>
          )}
          
          {/* Dialogs */}
          <WindowDialog
            title={dialogTitle}
            content={dialogContent}
            isOpen={dialogOpen}
            onClose={() => setDialogOpen(false)}
          />
          
          {/* Welcome dialog */}
          <WindowDialog
            title="Welcome to HelixHub XP"
            content="HelixHub connects academia, industry, and government to bridge skill gaps and drive innovation. Click on the desktop icons to explore different features of the platform."
            isOpen={showWelcome}
            onClose={() => setShowWelcome(false)}
          />
          
          {/* Taskbar at bottom */}
          <div className="fixed bottom-0 left-0 right-0 z-50">
            <Taskbar />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Index;
