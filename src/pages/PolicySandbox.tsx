
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import VoteImpactSim from "@/components/voting/VoteImpactSim";
import MatchGrants from "@/components/grants/MatchGrants";
import { BeakerIcon, FolderHeart, LayoutDashboard, ScrollText } from "lucide-react";

const PolicySandbox = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-2">
            <BeakerIcon className="h-8 w-8 mr-2 text-helix-purple" />
            <h1 className="text-3xl font-bold">Policy Sandbox</h1>
          </div>
          <p className="text-gray-400 mb-8">
            Experiment with policies and discover their potential impacts on the triple helix
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="vote-impact" className="flex items-center gap-2">
              <ScrollText className="h-4 w-4" />
              <span>Vote Impact</span>
            </TabsTrigger>
            <TabsTrigger value="grants" className="flex items-center gap-2">
              <FolderHeart className="h-4 w-4" />
              <span>Grant Matching</span>
            </TabsTrigger>
            <TabsTrigger value="simulation" className="flex items-center gap-2">
              <BeakerIcon className="h-4 w-4" />
              <span>Advanced Simulation</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <ScrollText className="h-5 w-5 mr-2 text-helix-purple" />
                    Vote Impact Simulator
                  </h2>
                  <p className="text-gray-500 mb-4">
                    Model how different voting distributions across stakeholders can affect policy outcomes
                    and system health using our SignalDAO voting simulator.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-500 mb-4">
                    <li>Adjust voting power distribution between sectors</li>
                    <li>Simulate outcomes of policy proposals</li>
                    <li>Analyze impacts on system stability</li>
                  </ul>
                  <button 
                    onClick={() => setActiveTab("vote-impact")}
                    className="inline-flex items-center px-4 py-2 bg-helix-purple text-white rounded-md hover:bg-purple-700 transition-colors mt-2"
                  >
                    Try Vote Impact Simulator
                  </button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <FolderHeart className="h-5 w-5 mr-2 text-helix-purple" />
                    Grant Matchmaking Engine
                  </h2>
                  <p className="text-gray-500 mb-4">
                    Use our AI-powered grant matchmaking system to find and evaluate optimal funding
                    sources for your innovative education projects.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-500 mb-4">
                    <li>Describe your project idea in natural language</li>
                    <li>Get AI-matched funding recommendations</li>
                    <li>View alignment scores and deadlines</li>
                  </ul>
                  <button 
                    onClick={() => setActiveTab("grants")}
                    className="inline-flex items-center px-4 py-2 bg-helix-purple text-white rounded-md hover:bg-purple-700 transition-colors mt-2"
                  >
                    Try Grant Matchmaker
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="vote-impact">
            <VoteImpactSim />
          </TabsContent>
          
          <TabsContent value="grants">
            <MatchGrants />
          </TabsContent>
          
          <TabsContent value="simulation">
            <Card>
              <CardContent className="py-12 text-center">
                <BeakerIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Advanced Simulation</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                  Our complex multi-agent simulation environment is coming soon.
                  This feature will allow for detailed modeling of policy impacts across regions.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PolicySandbox;
