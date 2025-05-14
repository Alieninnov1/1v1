
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import VoteImpactSim from "@/components/voting/VoteImpactSim";
import MatchGrants from "@/components/grants/MatchGrants";
import { Button } from "@/components/ui/button";
import { BeakerIcon, FolderHeart, LayoutDashboard, ScrollText } from "lucide-react";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

const PolicySandbox = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const buttonVariants = "flex items-center gap-2 px-4 py-3 text-sm font-bold uppercase tracking-wide";
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 relative">
        {/* Enhanced Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 min-h-[50vh] flex flex-col justify-center relative"
          id="policy-hero"
        >
          <div className="flex items-center mb-2">
            <BeakerIcon className="h-8 w-8 mr-2 text-helix-purple" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold brutal-text transform -rotate-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
              POLICY SANDBOX
            </h1>
          </div>
          
          {/* Added subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-xl md:text-2xl max-w-2xl mt-4 font-light"
          >
            Simulate, test, and optimize policy decisions with real-time impact analysis
          </motion.p>
          
          <p className="text-gray-400 mt-6 mb-8 border-l-4 border-purple-500 pl-3 max-w-3xl">
            Experiment with policies and discover their potential impacts on the triple helix ecosystem of academia, industry, and government.
          </p>
          
          {/* Scroll indicator */}
          <ScrollIndicator targetId="policy-tabs" />
        </motion.div>

        <Tabs id="policy-tabs" value={activeTab} onValueChange={setActiveTab} className="mt-6 sticky-header">
          <div className="brutal-border mb-8 p-1 bg-gray-900 sticky top-0 z-30">
            <TabsList className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 bg-gray-800">
              <TabsTrigger 
                value="overview" 
                className={`${buttonVariants} ${activeTab === 'overview' ? 'bg-purple-700 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger 
                value="vote-impact" 
                className={`${buttonVariants} ${activeTab === 'vote-impact' ? 'bg-purple-700 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                <ScrollText className="h-4 w-4" />
                <span>Vote Impact</span>
              </TabsTrigger>
              <TabsTrigger 
                value="grants" 
                className={`${buttonVariants} ${activeTab === 'grants' ? 'bg-purple-700 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                <FolderHeart className="h-4 w-4" />
                <span>Grant Matching</span>
              </TabsTrigger>
              <TabsTrigger 
                value="simulation" 
                className={`${buttonVariants} ${activeTab === 'simulation' ? 'bg-purple-700 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                <BeakerIcon className="h-4 w-4" />
                <span>Advanced Sim</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="overview">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20, rotate: -1 }}
                animate={{ opacity: 1, y: 0, rotate: -1 }}
                transition={{ duration: 0.3 }}
                className="brutal-border transform"
              >
                <Card className="border-0 rounded-none shadow-none bg-gray-900">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-black mb-4 flex items-center uppercase tracking-tight text-white">
                      <ScrollText className="h-5 w-5 mr-2 text-helix-purple" />
                      Vote Impact Simulator
                    </h2>
                    <p className="text-gray-300 mb-4 border-l-4 border-purple-500 pl-2">
                      Model how different voting distributions across stakeholders affect policy outcomes
                      and system health using our SignalDAO voting simulator.
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-4 pl-3">
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-2">•</span>
                        Adjust voting power distribution between sectors
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-2">•</span>
                        Simulate outcomes of policy proposals
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-2">•</span>
                        Analyze impacts on system stability
                      </li>
                    </ul>
                    <Button 
                      onClick={() => setActiveTab("vote-impact")}
                      className="helix-button mt-2 w-full sm:w-auto focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-shadow"
                    >
                      Try Vote Impact Simulator
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20, rotate: 1 }}
                animate={{ opacity: 1, y: 0, rotate: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="brutal-border transform"
              >
                <Card className="border-0 rounded-none shadow-none bg-gray-900">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-black mb-4 flex items-center uppercase tracking-tight text-white">
                      <FolderHeart className="h-5 w-5 mr-2 text-helix-purple" />
                      Grant Matchmaking Engine
                    </h2>
                    <p className="text-gray-300 mb-4 border-l-4 border-purple-500 pl-2">
                      Use our AI-powered grant matchmaking system to find and evaluate optimal funding
                      sources for your innovative education projects.
                    </p>
                    <ul className="space-y-3 text-gray-300 mb-4 pl-3">
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-2">•</span>
                        Describe your project idea in natural language
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-2">•</span>
                        Get AI-matched funding recommendations
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-400 mr-2">•</span>
                        View alignment scores and deadlines
                      </li>
                    </ul>
                    <Button 
                      onClick={() => setActiveTab("grants")}
                      className="helix-button mt-2 w-full sm:w-auto focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-shadow"
                    >
                      Try Grant Matchmaker
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="vote-impact">
            <div className="brutal-border transform -rotate-1">
              <VoteImpactSim />
            </div>
          </TabsContent>
          
          <TabsContent value="grants">
            <div className="brutal-border transform rotate-1">
              <MatchGrants />
            </div>
          </TabsContent>
          
          <TabsContent value="simulation">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="brutal-border transform -rotate-0.5"
            >
              <Card className="border-0 rounded-none shadow-none bg-gray-900">
                <CardContent className="py-12 text-center">
                  <BeakerIcon className="h-16 w-16 mx-auto text-gray-400 mb-6" />
                  <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Advanced Simulation</h2>
                  <p className="text-gray-300 max-w-md mx-auto border-l-4 border-purple-500 pl-3 text-left">
                    Our complex multi-agent simulation environment is coming soon.
                    This feature will allow for detailed modeling of policy impacts across regions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PolicySandbox;
