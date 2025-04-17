
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CallToAction from "@/components/home/CallToAction";
import KnowledgeBase from "@/components/knowledge/KnowledgeBase";
import { Computer, FileText, Info, Maximize2, Minimize2, Settings, Shield, X, BookOpen, Tool, PanelLeft, Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

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
  
  // XP boot sequence
  useEffect(() => {
    if (showStartup) {
      const interval = setInterval(() => {
        setBootProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setShowStartup(false), 500);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [showStartup]);
  
  // Start animation sequence after boot
  useEffect(() => {
    if (!showStartup) {
      controls.start("visible");
      // Show welcome dialog after 1s
      setTimeout(() => {
        openDialog(
          "Welcome to HelixHub XP",
          "HelixHub connects academia, industry, and government to bridge skill gaps and drive innovation. Click OK to explore the platform."
        );
      }, 1000);
    }
  }, [showStartup]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };
  
  const openDialog = (title, content) => {
    setDialogTitle(title);
    setDialogContent(content);
    setDialogOpen(true);
  };
  
  // Enhanced Windows XP desktop icons with more practical links
  const desktopIcons = [
    { 
      name: "Dashboard",
      icon: <Computer className="h-10 w-10 text-blue-700" />,
      action: () => navigate('/dashboard')
    },
    { 
      name: "Knowledge Base",
      icon: <BookOpen className="h-10 w-10 text-purple-700" />,
      action: () => setShowKnowledgeBase(!showKnowledgeBase)
    },
    { 
      name: "Curriculum Alignment",
      icon: <FileText className="h-10 w-10 text-yellow-600" />,
      action: () => openDialog("Curriculum Alignment", "Connect curriculum to industry needs and policy requirements in real-time.")
    },
    { 
      name: "Policy Sandbox",
      icon: <Shield className="h-10 w-10 text-green-600" />,
      action: () => openDialog("Policy Sandbox", "Simulate the impact of education policies before implementing them.")
    },
    {
      name: "Tools Library",
      icon: <Tool className="h-10 w-10 text-red-600" />,
      action: () => openDialog("Tools Library", "Access our collection of interactive tools for education planning and policy development.")
    },
    {
      name: "AI Assistant",
      icon: <Brain className="h-10 w-10 text-indigo-600" />,
      action: () => openDialog("AI Curriculum Assistant", "Get AI-powered recommendations to align curriculum with industry needs and future skills.")
    },
    { 
      name: "Settings",
      icon: <Settings className="h-10 w-10 text-gray-600" />,
      action: () => toast({ title: "Settings", description: "Configure your HelixHub experience" })
    },
  ];

  return (
    <Layout>
      {showStartup ? (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
          <div className="space-y-8 w-full max-w-md px-4">
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-white text-center"
              >
                <h1 className="text-4xl font-bold mb-2">HelixHub XP</h1>
                <p className="text-blue-300">Education Innovation Platform</p>
              </motion.div>
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div
                className="bg-blue-500 h-2.5 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${bootProgress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <p className="text-gray-400 text-center text-sm">
              {bootProgress < 30 && "Initializing education modules..."}
              {bootProgress >= 30 && bootProgress < 60 && "Loading skill gap analysis tools..."}
              {bootProgress >= 60 && bootProgress < 90 && "Preparing policy integration framework..."}
              {bootProgress >= 90 && "Starting HelixHub XP..."}
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-500 p-4">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {desktopIcons.map((icon, index) => (
              <motion.div
                key={index}
                variants={sectionVariants}
                className="xp-icon"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(173, 216, 230, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={icon.action}
              >
                {icon.icon}
                <span className="text-xs font-bold text-black bg-white/60 px-1 rounded">
                  {icon.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Main Content in XP Window */}
          <motion.div 
            variants={sectionVariants}
            className="xp-window max-w-7xl mx-auto mb-8"
          >
            <div className="xp-title-bar">
              <div className="flex items-center">
                <Computer size={14} />
                <span className="ml-2">HelixHub Explorer</span>
              </div>
              <div className="xp-window-buttons">
                <motion.button 
                  className="xp-window-button xp-minimize"
                  whileTap={{ scale: 0.9 }}
                >
                  <Minimize2 size={10} />
                </motion.button>
                <motion.button 
                  className="xp-window-button xp-maximize"
                  whileTap={{ scale: 0.9 }}
                >
                  <Maximize2 size={10} />
                </motion.button>
                <motion.button 
                  className="xp-window-button xp-close"
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={10} />
                </motion.button>
              </div>
            </div>
            
            <div className="xp-window-content overflow-auto">
              <Hero />
              <Features />
              
              <motion.section 
                className="py-16 sm:py-24 bg-[#ECE9D8]"
                variants={sectionVariants}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <ScrollAnimation
                      type="fade"
                      direction="up"
                      className="mb-6"
                    >
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-tahoma mb-6">
                        How HelixHub Works
                      </h2>
                    </ScrollAnimation>
                    <ScrollAnimation
                      type="fade"
                      direction="up"
                      delay={0.1}
                      className="max-w-3xl mx-auto"
                    >
                      <p className="text-xl text-gray-600">
                        Our platform creates a dynamic ecosystem where education, workforce, 
                        and policy makers collaborate to bridge skill gaps.
                      </p>
                    </ScrollAnimation>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                      {
                        step: 1,
                        title: "Connect",
                        description: "Join the platform as academia, industry, or government and connect with other stakeholders."
                      },
                      {
                        step: 2,
                        title: "Collaborate",
                        description: "Share insights, provide feedback on curriculum, and discuss skills and policy ideas."
                      },
                      {
                        step: 3,
                        title: "Evolve",
                        description: "Implement AI recommendations and data-driven insights to close skill gaps and improve outcomes."
                      }
                    ].map((item, index) => (
                      <ScrollAnimation
                        key={item.step}
                        type="fade"
                        direction="up"
                        delay={0.1 * (index + 1)}
                      >
                        <motion.div className="text-center px-4">
                          <motion.div 
                            className="w-16 h-16 bg-[#0055E5] rounded-full flex items-center justify-center text-white mx-auto mb-6 border-2 border-white"
                            whileHover={{ 
                              scale: 1.05, 
                              boxShadow: "0 0 15px rgba(0, 85, 229, 0.4)" 
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="text-2xl font-bold">{item.step}</span>
                          </motion.div>
                          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </motion.div>
                      </ScrollAnimation>
                    ))}
                  </div>
                </div>
              </motion.section>
              
              <CallToAction />
            </div>
          </motion.div>
          
          {/* Knowledge Base Section - Only shown when toggled */}
          {showKnowledgeBase && <KnowledgeBase />}
        </div>
      )}
      
      {/* XP Style Dialog */}
      {dialogOpen && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="xp-window max-w-md"
          >
            <div className="xp-title-bar">
              <div className="flex items-center">
                <Info size={14} />
                <span className="ml-2">{dialogTitle}</span>
              </div>
              <button 
                className="xp-window-button xp-close"
                onClick={() => setDialogOpen(false)}
              >
                <X size={10} />
              </button>
            </div>
            <div className="xp-window-content p-6">
              <div className="flex mb-4">
                <Info className="h-12 w-12 text-blue-600 mr-4" />
                <p>{dialogContent}</p>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  className="xp-button px-6"
                  onClick={() => setDialogOpen(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </Layout>
  );
};

export default Index;
