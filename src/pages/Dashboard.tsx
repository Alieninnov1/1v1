
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SkillGapChart from "@/components/dashboard/SkillGapChart";
import RegionalHeatmap from "@/components/dashboard/RegionalHeatmap";
import AIRecommendations from "@/components/ai/AIRecommendations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <DashboardHeader 
            title="Skills Gap Dashboard" 
            description="Visualize current skills gaps and receive AI-powered recommendations."
          />
          
          {/* Metrics Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="shadow-card rounded-xl border-none overflow-hidden">
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
            >
              <Card className="shadow-card rounded-xl border-none overflow-hidden">
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
            >
              <Card className="shadow-card rounded-xl border-none overflow-hidden">
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
            >
              <Card className="shadow-card rounded-xl border-none overflow-hidden">
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AIRecommendations />
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Dashboard;
