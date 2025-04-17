
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Building2, FileText, BarChart3, Briefcase, BookOpen, Users, LineChart } from "lucide-react";
import PolicySimulator from "@/components/government/PolicySimulator";
import GovernmentHeader from "@/components/government/GovernmentHeader";
import PolicyDashboard from "@/components/government/PolicyDashboard";
import GovernmentInitiatives from "@/components/government/GovernmentInitiatives";
import { useNavigate } from "react-router-dom";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const Government = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  
  return (
    <Layout>
      <GovernmentHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs 
          defaultValue="overview" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-12"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
            <TabsTrigger value="overview" className="data-[state=active]:bg-helix-purple data-[state=active]:text-white">
              <Building2 className="mr-2 h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="policies" className="data-[state=active]:bg-helix-purple data-[state=active]:text-white">
              <FileText className="mr-2 h-4 w-4" />
              Policies
            </TabsTrigger>
            <TabsTrigger value="initiatives" className="data-[state=active]:bg-helix-purple data-[state=active]:text-white">
              <Users className="mr-2 h-4 w-4" />
              Initiatives
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-helix-purple data-[state=active]:text-white">
              <LineChart className="mr-2 h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <ScrollAnimation type="fade" direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-card p-6">
                    <h2 className="text-2xl font-bold mb-4">Government Integration</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      HelixHub connects government agencies with educational institutions and industries to drive innovation, 
                      inform policy decisions, and create responsive governance models that address real-world needs.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <FileText className="h-5 w-5 text-helix-purple mr-2" />
                          <h3 className="font-semibold">Policy Development</h3>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Data-driven approaches to policy creation with real-time feedback from stakeholders.
                        </p>
                      </div>
                      
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <BarChart3 className="h-5 w-5 text-helix-purple mr-2" />
                          <h3 className="font-semibold">Impact Measurement</h3>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Analyze the effectiveness of policies with advanced analytics and stakeholder feedback.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-card p-6">
                    <h2 className="text-2xl font-bold mb-4">Triple Helix Approach</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our framework enables continuous collaboration between government, academia, and industry, creating a 
                      dynamic ecosystem for innovation and policy development.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mt-6">
                      <div className="flex items-center px-4 py-2 bg-helix-purple/10 rounded-full">
                        <Building2 className="h-4 w-4 text-helix-purple mr-2" />
                        <span className="text-sm">Government</span>
                      </div>
                      <div className="flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                        <span className="text-sm">Academia</span>
                      </div>
                      <div className="flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <Briefcase className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
                        <span className="text-sm">Industry</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-card p-6 h-full">
                  <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left"
                      onClick={() => setActiveTab("policies")}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View Current Policies
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left"
                      onClick={() => navigate("/policy-sandbox")}
                    >
                      <LineChart className="mr-2 h-4 w-4" />
                      Policy Sandbox
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left"
                      onClick={() => setActiveTab("initiatives")}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Browse Initiatives
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left"
                      onClick={() => navigate("/discussions")}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Join Discussions
                    </Button>
                  </div>
                  
                  <div className="mt-6 p-4 bg-helix-purple/10 rounded-lg">
                    <h3 className="font-semibold mb-2">Policy Simulator</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Test policy proposals in our sandbox environment to predict impacts and gather stakeholder feedback.
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full bg-helix-purple hover:bg-helix-purple/90"
                      onClick={() => navigate("/policy-sandbox")}
                    >
                      Open Simulator
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </TabsContent>
          
          <TabsContent value="policies">
            <PolicyDashboard />
          </TabsContent>
          
          <TabsContent value="initiatives">
            <GovernmentInitiatives />
          </TabsContent>
          
          <TabsContent value="analytics">
            <PolicySimulator />
          </TabsContent>
        </Tabs>
        
        <ScrollAnimation type="fade" direction="up" className="mt-12">
          <div className="bg-helix-purple rounded-xl shadow-card p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h2 className="text-2xl font-bold mb-4">Ready to Collaborate?</h2>
                <p className="max-w-2xl">
                  Join our growing network of government agencies, educational institutions, and industry partners. Together, 
                  we can create policies that drive innovation and positive change.
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <Button 
                  size="lg" 
                  className="bg-white text-helix-purple hover:bg-gray-100"
                  onClick={() => navigate("/policy-sandbox")}
                >
                  Try Policy Sandbox
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/20"
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Layout>
  );
};

export default Government;
