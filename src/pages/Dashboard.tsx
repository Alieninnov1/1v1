
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SkillGapChart from "@/components/dashboard/SkillGapChart";
import RegionalHeatmap from "@/components/dashboard/RegionalHeatmap";
import AIRecommendations from "@/components/ai/AIRecommendations";
import ThreeDModel from "@/components/dashboard/ThreeDModel";
import InteractiveInsights from "@/components/dashboard/InteractiveInsights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

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
    visible: { opacity: 1, y: 0 }
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
            <DashboardHeader 
              title="Skills Gap Dashboard" 
              description="Visualize current skills gaps and receive AI-powered recommendations."
            />
          </motion.div>
          
          {/* 21st.dev inspired tab system */}
          <motion.div variants={itemVariants} className="mb-8">
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
                    <motion.div variants={itemVariants} className="mb-10">
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
                    
                    {/* Interactive insights */}
                    <motion.div variants={itemVariants}>
                      <InteractiveInsights />
                    </motion.div>
                    
                    {/* Metrics Summary */}
                    <motion.div variants={itemVariants} className="mt-10">
                      <h3 className="text-xl font-bold mb-4 font-satoshi">Key Metrics</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="group"
                        >
                          <Card className="shadow-card rounded-xl border-none overflow-hidden bg-white dark:bg-gray-800 group-hover:shadow-lg transition-all duration-300">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg font-satoshi">Total Skills Analyzed</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-4xl font-bold text-helix-purple">358</p>
                              <p className="text-sm text-gray-500">+24 from last month</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="group"
                        >
                          <Card className="shadow-card rounded-xl border-none overflow-hidden bg-white dark:bg-gray-800 group-hover:shadow-lg transition-all duration-300">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg font-satoshi">Avg. Skill Gap</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-4xl font-bold text-helix-purple">42%</p>
                              <p className="text-sm text-gray-500">-3% from last quarter</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="group"
                        >
                          <Card className="shadow-card rounded-xl border-none overflow-hidden bg-white dark:bg-gray-800 group-hover:shadow-lg transition-all duration-300">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg font-satoshi">Feedback Posts</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-4xl font-bold text-helix-purple">1,247</p>
                              <p className="text-sm text-gray-500">+156 this week</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="group"
                        >
                          <Card className="shadow-card rounded-xl border-none overflow-hidden bg-white dark:bg-gray-800 group-hover:shadow-lg transition-all duration-300">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg font-satoshi">Recommendations</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-4xl font-bold text-helix-purple">78</p>
                              <p className="text-sm text-gray-500">Based on current data</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </div>
                    </motion.div>
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
        </motion.div>
      </div>
    </Layout>
  );
};

export default Dashboard;
