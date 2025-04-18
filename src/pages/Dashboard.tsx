
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import DashboardMetrics from "@/components/dashboard/DashboardMetrics";
import InteractiveInsights from "@/components/dashboard/InteractiveInsights";
import LiveDataFeed from "@/components/dashboard/LiveDataFeed";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cog, Download, RefreshCcw, MessageSquare } from "lucide-react";
import SkillTile from "@/components/knowledge/SkillTile";
import { useSkillTrends } from "@/services/apiDataService";
import { DataScraper } from "@/components/ui/data-scraper";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import XPFeedbackModal from "@/components/feedback/XPFeedbackModal";
import RealTimeFeedbackWall from "@/components/feedback/RealTimeFeedbackWall";
import OracleOverlay from "@/components/dashboard/OracleOverlay";
import SignalVault from "@/components/dashboard/SignalVault";
import DiscordPortal from "@/components/dashboard/DiscordPortal";
import AmbientAudioControl from "@/components/dashboard/AmbientAudioControl";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabFromUrl || "overview");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [showFeedbackWall, setShowFeedbackWall] = useState(false);
  
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

  return (
    <Layout>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 via-indigo-700/20 to-blue-800/30 animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-400/20 via-purple-300/10 to-transparent" />
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className={`absolute inset-0 opacity-20 mix-blend-overlay animate-wave-${i + 1}`} 
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 1000 Q 250 750 500 1000 T 1000 1000 L 1000 0 L 0 0 Z' fill='%23fff'/%3E%3C/svg%3E\")",
                  backgroundSize: "100% 100%",
                  animation: `wave ${15 + i * 5}s linear infinite`,
                  animationDelay: `${i * -5}s`
                }} 
              />
            ))}
          </div>
        </div>

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
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => toast({
                title: "Settings",
                description: "Dashboard settings would open here"
              })}>
                <Cog size={16} className="mr-1" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={() => toast({
                title: "Report Downloaded",
                description: "Dashboard report has been saved"
              })}>
                <Download size={16} className="mr-1" />
                Export
              </Button>
              <Button size="sm" onClick={handleRefresh} disabled={isRefreshing}>
                <RefreshCcw size={16} className={`mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
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
            <Card className="p-4 bg-black/40 backdrop-blur-sm border border-purple-500/20">
              <h2 className="text-xl font-bold mb-4 text-white">Live Trending Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {isLoading ? 
                  Array(4).fill(0).map((_, i) => (
                    <div key={i} className="animate-pulse bg-gray-800/50 h-32 rounded-lg"></div>
                  )) : 
                  skillTrends?.map((skill, idx) => (
                    <ScrollAnimation key={skill.name} delay={idx * 0.1} type="fade" direction="up">
                      <SkillTile 
                        name={skill.name} 
                        growth={skill.growth} 
                        demand={skill.demand} 
                        relevance={skill.relevance} 
                      />
                    </ScrollAnimation>
                  ))
                }
              </div>
            </Card>
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
        <AnimatePresence>
          {showFeedbackWall && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
              onClick={(e) => e.target === e.currentTarget && setShowFeedbackWall(false)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="w-full max-w-3xl max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <RealTimeFeedbackWall />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Dashboard;
