
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import XPFeedbackModal from "@/components/feedback/XPFeedbackModal";
import FeedbackModal from "@/components/dashboard/FeedbackModal";
import IntroAnimation from "@/components/dashboard/IntroAnimation";
import DashboardContent from "@/components/dashboard/DashboardContent";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabFromUrl || "overview");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [showFeedbackWall, setShowFeedbackWall] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab, setSearchParams]);

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
    dashboardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <AnimatePresence>
        {showIntro && <IntroAnimation onSkip={handleSkipIntro} />}
      </AnimatePresence>

      <div ref={dashboardRef}>
        <DashboardContent
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isRefreshing={isRefreshing}
          onRefresh={handleRefresh}
          onToggleFeedback={() => setShowFeedbackWall(!showFeedbackWall)}
          showFeedbackWall={showFeedbackWall}
        />

        <XPFeedbackModal
          isOpen={isFeedbackModalOpen}
          onClose={() => setIsFeedbackModalOpen(false)}
        />
        
        <FeedbackModal 
          showFeedbackWall={showFeedbackWall}
          setShowFeedbackWall={setShowFeedbackWall}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
