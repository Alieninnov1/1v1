
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import DashboardMetrics from "@/components/dashboard/DashboardMetrics";
import InteractiveInsights from "@/components/dashboard/InteractiveInsights";
import LiveDataFeed from "@/components/dashboard/LiveDataFeed";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cog, Download, RefreshCcw } from "lucide-react";
import SkillTile from "@/components/knowledge/SkillTile";
import { useSkillTrends } from "@/services/apiDataService";
import { DataScraper } from "@/components/ui/data-scraper";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabFromUrl || "overview");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { data: skillTrends, isLoading, refetch } = useSkillTrends();
  const { toast } = useToast();

  // Update URL when tab changes
  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab, setSearchParams]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    toast({
      title: "Refreshing dashboard",
      description: "Updating all data sources...",
    });
    
    await refetch();
    
    // Simulate refresh delay
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Dashboard refreshed",
        description: "All data is now up-to-date",
      });
    }, 1000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
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
            <p className="text-gray-600 dark:text-gray-300">
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
          <Card className="p-4">
            <h2 className="text-xl font-bold mb-4">Live Trending Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {isLoading ? (
                Array(4).fill(0).map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-200 h-32 rounded-lg"></div>
                ))
              ) : (
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
              )}
            </div>
          </Card>
        </div>
        
        <div className="mt-8 mb-8">
          <InteractiveInsights />
        </div>
        
        <div className="my-10">
          <DataScraper />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
