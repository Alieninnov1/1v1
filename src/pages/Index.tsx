
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CallToAction from "@/components/home/CallToAction";
import KnowledgeBase from "@/components/knowledge/KnowledgeBase";
import { Computer, FileText, Info, Maximize2, Minimize2, Settings, Shield, X, BookOpen, Brain, Briefcase, PanelLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import BootScreen from "@/components/boot/BootScreen";
import DesktopIcon from "@/components/desktop/DesktopIcon";
import WindowDialog from "@/components/dialog/WindowDialog";

const Index = () => {
  const [showStartup, setShowStartup] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState("");
  const [showKnowledgeBase, setShowKnowledgeBase] = useState(false);
  const navigate = useNavigate();
  const controls = useAnimation();
  const { toast } = useToast();

  useEffect(() => {
    if (!showStartup) {
      controls.start("visible");
      setTimeout(() => {
        openDialog(
          "Welcome to HelixHub XP",
          "HelixHub connects academia, industry, and government to bridge skill gaps and drive innovation. Click OK to explore the platform."
        );
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
    { name: "Settings", icon: Settings, color: "gray", action: () => toast({ title: "Settings", description: "Configure your HelixHub experience" }) },
  ];

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
        <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-500 p-4">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.2
                }
              }
            }}
            className="mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {desktopIcons.map((icon, index) => (
              <DesktopIcon
                key={index}
                name={icon.name}
                icon={icon.icon}
                color={icon.color}
                onClick={icon.action}
              />
            ))}
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="xp-window max-w-7xl mx-auto mb-8">
            <div className="xp-title-bar">
              <div className="flex items-center">
                <Computer size={14} />
                <span className="ml-2">HelixHub Explorer</span>
              </div>
              <div className="xp-window-buttons">
                <motion.button className="xp-window-button xp-minimize" whileTap={{ scale: 0.9 }}>
                  <Minimize2 size={10} />
                </motion.button>
                <motion.button className="xp-window-button xp-maximize" whileTap={{ scale: 0.9 }}>
                  <Maximize2 size={10} />
                </motion.button>
                <motion.button className="xp-window-button xp-close" whileTap={{ scale: 0.9 }}>
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
          
          {showKnowledgeBase && <KnowledgeBase />}
          
          <WindowDialog
            title={dialogTitle}
            content={dialogContent}
            isOpen={dialogOpen}
            onClose={() => setDialogOpen(false)}
          />
        </div>
      )}
    </Layout>
  );
};

export default Index;
