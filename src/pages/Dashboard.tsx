
import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollAnimation, StaggerContainer } from "@/components/ui/scroll-animation";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Calendar, Computer, FileText, FolderOpen, HelpCircle, Info, Mail, Maximize2, Minimize2, Settings, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 }
    }
  };
  
  const showStartMenu = () => {
    setStartMenuOpen(!startMenuOpen);
    if (!startMenuOpen) {
      toast({
        title: "HelixHub",
        description: "Welcome to HelixHub! Your education innovation platform.",
      });
    }
  };
  
  // XP desktop icons
  const desktopIcons = [
    { name: "My Dashboard", icon: <Computer size={24} className="text-blue-700" /> },
    { name: "Skills Report", icon: <FileText size={24} className="text-yellow-600" /> },
    { name: "Policy Inbox", icon: <Mail size={24} className="text-green-600" /> },
    { name: "Resources", icon: <FolderOpen size={24} className="text-yellow-600" /> },
    { name: "Settings", icon: <Settings size={24} className="text-gray-600" /> },
    { name: "Calendar", icon: <Calendar size={24} className="text-blue-600" /> },
  ];

  return (
    <Layout>
      {/* Windows XP styled desktop */}
      <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-500 p-4 relative">
        {/* Desktop icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
          {desktopIcons.map((icon) => (
            <motion.div 
              key={icon.name}
              className="xp-icon"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(173, 216, 230, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toast({ title: icon.name, description: `Opening ${icon.name}...` })}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                {icon.icon}
              </div>
              <span className="text-xs font-bold text-black bg-white/60 px-1 rounded">
                {icon.name}
              </span>
            </motion.div>
          ))}
        </div>
        
        {/* Main Window */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="xp-window max-w-7xl mx-auto"
        >
          <div className="xp-title-bar">
            <div className="flex items-center">
              <Computer size={14} />
              <span className="ml-2">HelixHub - Skills Gap Dashboard</span>
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
          
          <div className="xp-window-content">
            <motion.div variants={itemVariants}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <DashboardHeader 
                  title="Skills Gap Dashboard" 
                  description="Visualize current skills gaps and receive AI-powered recommendations."
                />
                
                {!isMobile && (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <button className="flex items-center text-sm text-gray-500 hover:text-blue-700 mt-2 md:mt-0 xp-button">
                        <Info size={16} className="mr-1" />
                        Dashboard tips
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-[#FFFFE1] border border-gray-400 p-3 text-xs">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Dashboard Tips</h4>
                        <p>
                          Switch between tabs to explore different views of the skills data.
                          Hover over charts for detailed information.
                        </p>
                        <p className="text-blue-700 underline cursor-help">Learn more about using this dashboard</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                )}
              </div>
            </motion.div>
            
            <ScrollAnimation type="slide" direction="up">
              <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </ScrollAnimation>
            
            {/* Stakeholder selector */}
            <div className="mt-6 p-3 border border-gray-400 bg-[#F5F5F5]">
              <h3 className="font-bold text-sm mb-2">View Dashboard As:</h3>
              <div className="flex flex-wrap gap-2">
                {["Teacher", "Principal", "Policy Maker", "Industry Partner", "Student"].map((role) => (
                  <motion.button
                    key={role}
                    className="xp-button text-xs py-1"
                    whileHover={{ backgroundColor: "#E8F1FB" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toast({ 
                      title: `View Changed`, 
                      description: `Now viewing dashboard as: ${role}` 
                    })}
                  >
                    {role}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* XP Taskbar */}
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#2581D7] to-[#1854A5] h-12 border-t-2 border-blue-400 flex items-center px-2">
          <motion.button 
            className="h-10 px-3 flex items-center rounded-md bg-gradient-to-r from-green-600 to-green-500 text-white font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={showStartMenu}
          >
            <span className="mr-1">Start</span>
            <motion.div
              animate={{ rotate: startMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Settings size={16} />
            </motion.div>
          </motion.button>
          
          <div className="mx-2 h-8 w-[1px] bg-blue-400/50"></div>
          
          {/* Quick launch icons */}
          <div className="flex space-x-1">
            {[<Computer size={16} />, <Mail size={16} />, <HelpCircle size={16} />].map((icon, i) => (
              <motion.button 
                key={i} 
                className="w-8 h-8 flex items-center justify-center bg-blue-800/20 hover:bg-blue-700/30 rounded"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.button>
            ))}
          </div>
          
          {/* Clock */}
          <div className="ml-auto bg-blue-800/20 px-2 py-1 rounded text-white text-xs">
            {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </div>
        </div>
        
        {/* Start Menu */}
        {startMenuOpen && (
          <motion.div 
            className="fixed bottom-12 left-0 w-64 bg-white border-2 border-blue-900 shadow-xl rounded-t-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white p-3">
              <p className="font-bold">HelixHub User</p>
              <p className="text-xs opacity-80">Education Innovation Platform</p>
            </div>
            
            <div className="py-2">
              {[
                { name: "Dashboard", icon: <Computer size={16} className="mr-2" /> },
                { name: "Curriculum Alignment", icon: <FileText size={16} className="mr-2" /> },
                { name: "Policy Feedback", icon: <Mail size={16} className="mr-2" /> },
                { name: "Skills Gap Analysis", icon: <FolderOpen size={16} className="mr-2" /> },
                { name: "Help & Resources", icon: <HelpCircle size={16} className="mr-2" /> },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  className="px-4 py-2 flex items-center hover:bg-blue-100 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => {
                    toast({ title: item.name, description: `Opening ${item.name}...` });
                    setStartMenuOpen(false);
                  }}
                >
                  {item.icon}
                  {item.name}
                </motion.div>
              ))}
              
              <div className="border-t border-gray-300 mt-2 pt-2">
                <motion.div
                  className="px-4 py-2 flex items-center hover:bg-red-100 cursor-pointer"
                  whileHover={{ x: 5 }}
                  onClick={() => setStartMenuOpen(false)}
                >
                  <X size={16} className="mr-2 text-red-500" />
                  Close Menu
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
