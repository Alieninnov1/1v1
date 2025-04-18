
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Add AnimatePresence to the import
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, ChevronDown } from "lucide-react";
import { useSkillTrends } from "@/services/apiDataService";
import { DataScraper } from "@/components/ui/data-scraper";
import { useToast } from "@/hooks/use-toast";
import XPFeedbackModal from "@/components/feedback/XPFeedbackModal";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import DashboardMetrics from "@/components/dashboard/DashboardMetrics";
import InteractiveInsights from "@/components/dashboard/InteractiveInsights";
import LiveDataFeed from "@/components/dashboard/LiveDataFeed";
import OracleOverlay from "@/components/dashboard/OracleOverlay";
import SignalVault from "@/components/dashboard/SignalVault";
import DiscordPortal from "@/components/dashboard/DiscordPortal";
import AmbientAudioControl from "@/components/dashboard/AmbientAudioControl";
import DashboardBackground from "@/components/dashboard/DashboardBackground";
import DashboardActions from "@/components/dashboard/DashboardActions";
import DashboardSkillTrends from "@/components/dashboard/DashboardSkillTrends";
import FeedbackModal from "@/components/dashboard/FeedbackModal";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabFromUrl || "overview");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [showFeedbackWall, setShowFeedbackWall] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const dashboardRef = useRef<HTMLDivElement>(null);
  
  const {
    data: skillTrends,
    isLoading,
    refetch
  } = useSkillTrends();
  const { toast } = useToast();
  
  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab, setSearchParams]);

  // Show feedback modal after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem('hasSeenFeedbackModal');
      if (!hasSeenModal) {
        setIsFeedbackModalOpen(true);
        localStorage.setItem('hasSeenFeedbackModal', 'true');
      }
    }, 30000);
    
    return () => clearTimeout(timer);
  }, []);

  // Hide intro after delay or scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowIntro(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    toast({
      title: "Refreshing dashboard",
      description: "Updating all data sources..."
    });
    await refetch();
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Dashboard refreshed",
        description: "All data is now up-to-date"
      });
    }, 1000);
  };

  const handleSkipIntro = () => {
    setShowIntro(false);
    // Scroll to dashboard content
    dashboardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative w-64 h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
              <img 
                src="/lovable-uploads/261b8a7f-e6a4-4b35-b826-2641f23da6d7.png"
                alt="HelixHub Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300"
            >
              HelixHub
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-2 text-gray-400 max-w-md text-center"
            >
              Uniting academia, industry, and government in real-time
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              onClick={handleSkipIntro}
              className="mt-12 flex flex-col items-center cursor-pointer group"
            >
              <span className="text-purple-400 text-sm mb-2 group-hover:text-purple-300">Start Here</span>
              <ChevronDown 
                size={24} 
                className="text-purple-400 animate-bounce group-hover:text-purple-300" 
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative min-h-screen" ref={dashboardRef}>
        <DashboardBackground />

        <div className="container mx-auto px-4 py-8 relative">
          <div className="md:flex md:justify-between md:items-center mb-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-4 md:mb-0"
            >
              <Button variant="ghost" size="sm" className="mb-2" asChild>
                <a href="/">
                  <ArrowLeft size={16} className="mr-1" /> Back to Home
                </a>
              </Button>
              <h1 className="text-2xl font-bold">HelixHub Dashboard</h1>
              <p className="text-slate-50">
                Real-time insights connecting academia, industry, and policy
              </p>
            </motion.div>
            
            <DashboardActions isRefreshing={isRefreshing} onRefresh={handleRefresh} />
          </div>

          <OracleOverlay />

          <DashboardHeader 
            title="Innovation Ecosystem Dashboard" 
            description="Monitor skill gaps, policy impact, and curriculum alignment in real-time" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="md:col-span-1">
              <LiveDataFeed />
            </div>
          </div>

          <DashboardMetrics />

          <div className="mt-10">
            <DashboardSkillTrends skillTrends={skillTrends} isLoading={isLoading} />
          </div>
          
          <div className="mt-8 mb-8">
            <InteractiveInsights />
          </div>

          <SignalVault />
          
          <div className="my-10">
            <DataScraper />
          </div>

          <DiscordPortal />
          <AmbientAudioControl />

          {/* Feedback Toggle Button */}
          <motion.div
            className="fixed bottom-8 right-24 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/50 backdrop-blur-sm border border-purple-500/30 hover:bg-black/70"
              onClick={() => setShowFeedbackWall(!showFeedbackWall)}
              aria-label="Toggle feedback wall"
            >
              <MessageSquare size={20} className="text-purple-300" />
            </Button>
          </motion.div>
        </div>

        {/* XP Feedback Modal */}
        <XPFeedbackModal
          isOpen={isFeedbackModalOpen}
          onClose={() => setIsFeedbackModalOpen(false)}
        />
        
        {/* Feedback Wall Overlay */}
        <FeedbackModal 
          showFeedbackWall={showFeedbackWall}
          setShowFeedbackWall={setShowFeedbackWall}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
