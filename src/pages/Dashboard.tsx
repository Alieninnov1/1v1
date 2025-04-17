
import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollAnimation, StaggerContainer } from "@/components/ui/scroll-animation";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const isMobile = useIsMobile();
  
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

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <DashboardHeader 
                title="Skills Gap Dashboard" 
                description="Visualize current skills gaps and receive AI-powered recommendations."
              />
              
              {!isMobile && (
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <button className="flex items-center text-sm text-gray-500 hover:text-helix-purple mt-2 md:mt-0">
                      <Info size={16} className="mr-1" />
                      Dashboard tips
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Dashboard Tips</h4>
                      <p className="text-sm">
                        Switch between tabs to explore different views of the skills data.
                        Hover over charts for detailed information.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              )}
            </div>
          </motion.div>
          
          <ScrollAnimation type="slide" direction="up">
            <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </ScrollAnimation>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Dashboard;
