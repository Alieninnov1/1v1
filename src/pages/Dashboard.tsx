
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
import { ArrowLeft, Cog, Download, RefreshCcw, Volume2, VolumeX, MessageSquare } from "lucide-react";
import SkillTile from "@/components/knowledge/SkillTile";
import { useSkillTrends } from "@/services/apiDataService";
import { DataScraper } from "@/components/ui/data-scraper";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import XPFeedbackModal from "@/components/feedback/XPFeedbackModal";
import RealTimeFeedbackWall from "@/components/feedback/RealTimeFeedbackWall";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabFromUrl || "overview");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [showFeedbackWall, setShowFeedbackWall] = useState(false);
  const audioRef = useState<HTMLAudioElement | null>(null);
  
  const {
    data: skillTrends,
    isLoading,
    refetch
  } = useSkillTrends();
  const {
    toast
  } = useToast();
  
  useEffect(() => {
    setSearchParams({
      tab: activeTab
    });
  }, [activeTab, setSearchParams]);

  // Initialize ambient audio
  useEffect(() => {
    if (audioEnabled && !audioRef[0]) {
      const audio = new Audio('https://freesound.org/data/previews/387/387529_2188-lq.mp3');
      audio.loop = true;
      audio.volume = 0.25;
      audioRef[0] = audio;
    }
    
    return () => {
      if (audioRef[0]) {
        audioRef[0].pause();
        audioRef[0].src = '';
      }
    };
  }, [audioEnabled, audioRef]);

  // Show feedback modal after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem('hasSeenFeedbackModal');
      if (!hasSeenModal) {
        setIsFeedbackModalOpen(true);
        localStorage.setItem('hasSeenFeedbackModal', 'true');
      }
    }, 30000); // 30 seconds delay
    
    return () => clearTimeout(timer);
  }, []);

  const handleAudioToggle = () => {
    if (!audioEnabled) {
      setAudioEnabled(true);
      setTimeout(() => {
        if (audioRef[0]) {
          audioRef[0].play().then(() => {
            setAudioPlaying(true);
          }).catch(err => {
            console.error("Audio playback failed:", err);
            toast({
              title: "Audio Playback Failed",
              description: "Please interact with the page first"
            });
          });
        }
      }, 100);
    } else {
      if (audioRef[0]) {
        if (audioPlaying) {
          audioRef[0].pause();
          setAudioPlaying(false);
        } else {
          audioRef[0].play().then(() => {
            setAudioPlaying(true);
          }).catch(console.error);
        }
      }
    }
  };

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

  return <Layout>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 via-indigo-700/20 to-blue-800/30 animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-400/20 via-purple-300/10 to-transparent" />
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => <div key={i} className={`absolute inset-0 opacity-20 mix-blend-overlay animate-wave-${i + 1}`} style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 1000 Q 250 750 500 1000 T 1000 1000 L 1000 0 L 0 0 Z' fill='%23fff'/%3E%3C/svg%3E\")",
            backgroundSize: "100% 100%",
            animation: `wave ${15 + i * 5}s linear infinite`,
            animationDelay: `${i * -5}s`
          }} />)}
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 relative">
          <div className="md:flex md:justify-between md:items-center mb-6">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="mb-4 md:mb-0">
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

          {/* Oracle Overlay - Live Governance Status */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-md p-2 mb-6 text-xs shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                <span className="font-bold text-orange-400">Collapse Phase: Warning</span>
              </div>
              <div className="text-gray-300">
                Last 7 days: 18 turnover mentions, 37% urgency
              </div>
            </div>
          </motion.div>

          <DashboardHeader title="Innovation Ecosystem Dashboard" description="Monitor skill gaps, policy impact, and curriculum alignment in real-time" />
          
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
                {isLoading ? Array(4).fill(0).map((_, i) => <div key={i} className="animate-pulse bg-gray-800/50 h-32 rounded-lg"></div>) : skillTrends?.map((skill, idx) => <ScrollAnimation key={skill.name} delay={idx * 0.1} type="fade" direction="up">
                      <SkillTile name={skill.name} growth={skill.growth} demand={skill.demand} relevance={skill.relevance} />
                    </ScrollAnimation>)}
              </div>
            </Card>
          </div>
          
          <div className="mt-8 mb-8">
            <InteractiveInsights />
          </div>

          {/* Signal Vault - Governance Memory Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="my-10"
          >
            <Card className="p-4 bg-black/50 backdrop-blur-md border-0 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 via-blue-900/5 to-indigo-900/10 z-0"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Signal Vault: Governance Memory</h2>
                <div className="space-y-4">
                  {[
                    "No one's listening to us.",
                    "My teacher left without saying goodbye.",
                    "The funding priorities shift every quarter, we can't plan.",
                    "We need more stability in the curriculum.",
                    "Industry partnerships are inconsistent."
                  ].map((quote, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + idx * 0.2 }}
                      className="p-3 bg-black/30 backdrop-blur-sm rounded-md border border-indigo-500/20 shadow-lg text-sm font-medium text-indigo-100"
                    >
                      {quote}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
          
          <div className="my-10">
            <DataScraper />
          </div>

          {/* Discord Portal Button */}
          <motion.div 
            className="fixed bottom-8 left-8 z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://discord.gg/sxYscnTv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg"
            >
              <svg className="w-5 h-5 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/>
              </svg>
              <span>Join 300+ minds</span>
            </a>
          </motion.div>

          {/* Audio Player Button */}
          <motion.div
            className="fixed bottom-8 right-8 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/50 backdrop-blur-sm border border-purple-500/30 hover:bg-black/70"
              onClick={handleAudioToggle}
              aria-label={audioPlaying ? "Mute ambient sound" : "Play ambient sound"}
            >
              {audioPlaying ? (
                <Volume2 size={20} className="text-purple-300" />
              ) : (
                <VolumeX size={20} className="text-purple-300" />
              )}
            </Button>
          </motion.div>

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
    </Layout>;
};
export default Dashboard;
