
import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTabs from "@/components/dashboard/DashboardTabs";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
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

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <DashboardHeader 
            title="Skills Gap Dashboard" 
            description="Visualize current skills gaps and receive AI-powered recommendations."
          />
          <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </motion.div>
      </div>
    </Layout>
  );
};

export default Dashboard;
