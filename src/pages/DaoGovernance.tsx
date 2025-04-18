
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown, GanttChart, HandCoins, Users, VoteIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";
import VoteImpactSim from "@/components/voting/VoteImpactSim";

const DaoGovernance = () => {
  const [activeTab, setActiveTab] = useState("vote-impact");
  const { toast } = useToast();
  
  const handleMintTokens = () => {
    toast({
      title: "Token Operation",
      description: "Token minting functionality will be implemented in future updates.",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center justify-between"
          >
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center">
                <Crown className="h-8 w-8 mr-2 text-helix-purple" />
                SignalDAO Governance Portal
              </h1>
              <p className="text-gray-400">
                Direct the future of educational alignment through distributed governance
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex space-x-2">
              <Button variant="outline" className="border-purple-400" onClick={handleMintTokens}>
                <HandCoins className="mr-2 h-4 w-4" />
                Mint Tokens
              </Button>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                <VoteIcon className="mr-2 h-4 w-4" />
                Cast Vote
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto text-purple-500 mb-2" />
                  <h2 className="text-2xl font-bold">248</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Active DAO Members</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800">
              <CardContent className="pt-6">
                <div className="text-center">
                  <VoteIcon className="h-8 w-8 mx-auto text-indigo-500 mb-2" />
                  <h2 className="text-2xl font-bold">18</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Active Proposals</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <div className="text-center">
                  <GanttChart className="h-8 w-8 mx-auto text-blue-500 mb-2" />
                  <h2 className="text-2xl font-bold">74%</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Governance Participation</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-10">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="vote-impact">Vote Impact</TabsTrigger>
            <TabsTrigger value="proposals">Proposals</TabsTrigger>
            <TabsTrigger value="delegates">Delegates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="vote-impact" className="mt-6">
            <VoteImpactSim />
          </TabsContent>
          
          <TabsContent value="proposals" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Proposals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-gray-500">
                  Proposal listings will be implemented in future updates.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="delegates" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Delegate Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-gray-500">
                  Delegate ranking system will be implemented in future updates.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default DaoGovernance;
