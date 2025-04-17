
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTab from "./tabs/OverviewTab";
import AnalyticsTab from "./tabs/AnalyticsTab";
import RecommendationsTab from "./tabs/RecommendationsTab";

interface DashboardTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const DashboardTabs = ({ activeTab, setActiveTab }: DashboardTabsProps) => {
  return (
    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mb-8">
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b border-gray-200 dark:border-gray-800">
          <TabsList className="bg-transparent h-12">
            <TabsTrigger 
              value="overview" 
              className={`h-12 px-8 text-base ${activeTab === 'overview' ? 'border-b-2 border-helix-purple' : ''}`}
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className={`h-12 px-8 text-base ${activeTab === 'analytics' ? 'border-b-2 border-helix-purple' : ''}`}
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger 
              value="recommendations" 
              className={`h-12 px-8 text-base ${activeTab === 'recommendations' ? 'border-b-2 border-helix-purple' : ''}`}
            >
              Recommendations
            </TabsTrigger>
          </TabsList>
        </div>
        
        <AnimatePresence mode="wait">
          <TabsContent value="overview" className="mt-6">
            <OverviewTab />
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-6">
            <AnalyticsTab />
          </TabsContent>
          
          <TabsContent value="recommendations" className="mt-6">
            <RecommendationsTab />
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  );
};

export default DashboardTabs;
