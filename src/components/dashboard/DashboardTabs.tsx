
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThreeDModel from "./ThreeDModel";
import InteractiveInsights from "./InteractiveInsights";
import SkillGapChart from "./SkillGapChart";
import RegionalHeatmap from "./RegionalHeatmap";
import AIRecommendations from "@/components/ai/AIRecommendations";

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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero section with 3D model */}
              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mb-10">
                <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-white to-helix-purple50 dark:from-gray-900 dark:to-helix-purple900">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8 flex flex-col justify-center">
                        <motion.h2 
                          className="text-3xl font-bold font-satoshi mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          Triple Helix Innovation
                        </motion.h2>
                        <motion.p
                          className="text-gray-600 dark:text-gray-300 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          Explore the dynamic intersection of academia, industry, and government partnerships driving regional innovation and closing skill gaps.
                        </motion.p>
                      </div>
                      <div className="w-full h-[400px]">
                        <ThreeDModel />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <InteractiveInsights />
              <DashboardMetrics />
            </motion.div>
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <SkillGapChart />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <RegionalHeatmap />
                </motion.div>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="recommendations" className="mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AIRecommendations />
              </motion.div>
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  );
};

export default DashboardTabs;
