
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Vote, Users, GanttChartSquare, Scale, FileBarChart2, BarChart3, Bird } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const DaoGovernance = () => {
  const proposals = [
    {
      id: "HIP-001",
      title: "Curriculum AI Integration Enhancement",
      description: "Proposal to enhance AI curriculum suggestion engine with real-time industry feedback",
      status: "Active",
      votes: { for: 65, against: 25, abstain: 10 },
      endTime: "2025-06-01"
    },
    {
      id: "HIP-002",
      title: "Cross-Regional Knowledge Exchange Protocol",
      description: "Implement a decentralized knowledge exchange protocol between regional hubs",
      status: "Passed",
      votes: { for: 82, against: 12, abstain: 6 },
      endTime: "2025-05-15"
    },
    {
      id: "HIP-003",
      title: "Government Policy Validation Framework",
      description: "Establish a transparent framework for validating policy efficacy using on-chain data",
      status: "Pending",
      votes: { for: 0, against: 0, abstain: 0 },
      endTime: "2025-06-15"
    }
  ];
  
  const members = [
    { name: "Academia Representatives", tokens: 30, percentage: 30 },
    { name: "Industry Partners", tokens: 30, percentage: 30 },
    { name: "Government Entities", tokens: 20, percentage: 20 },
    { name: "Community Members", tokens: 15, percentage: 15 },
    { name: "Protocol Treasury", tokens: 5, percentage: 5 }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-2 bg-blue-900/30 rounded-full mb-4">
            <Vote className="h-8 w-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-satoshi mb-6">
            Helix<span className="text-blue-400">DAO</span> Governance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Decentralized governance for the HelixHub network, powered by blockchain technology and collective decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: <GanttChartSquare className="h-6 w-6 text-blue-400" />,
              title: "On-Chain Voting",
              description: "All governance decisions are executed transparently on the blockchain"
            },
            {
              icon: <Users className="h-6 w-6 text-blue-400" />,
              title: "Multi-Stakeholder",
              description: "Balanced representation from academia, industry, government, and community"
            },
            {
              icon: <Scale className="h-6 w-6 text-blue-400" />,
              title: "Quadratic Voting",
              description: "Voting power scales with the square root of tokens held for fairer representation"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="border-none glass-card h-full bg-gray-800/50 border border-gray-700 text-white">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-blue-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="proposals" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800 text-gray-300">
            <TabsTrigger value="proposals" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
              Active Proposals
            </TabsTrigger>
            <TabsTrigger value="governance" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
              DAO Structure
            </TabsTrigger>
            <TabsTrigger value="treasury" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
              Treasury
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="proposals" className="pt-6">
            <div className="grid gap-4">
              {proposals.map((proposal) => (
                <Card key={proposal.id} className="bg-gray-800/70 border-gray-700 text-white hover:bg-gray-700/70 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl text-blue-300 flex items-center">
                        {proposal.id}: {proposal.title}
                        {proposal.status === "Active" && (
                          <span className="ml-2 px-2 py-1 text-xs bg-green-900/50 text-green-400 rounded-full">
                            Active
                          </span>
                        )}
                        {proposal.status === "Passed" && (
                          <span className="ml-2 px-2 py-1 text-xs bg-blue-900/50 text-blue-400 rounded-full">
                            Passed
                          </span>
                        )}
                        {proposal.status === "Pending" && (
                          <span className="ml-2 px-2 py-1 text-xs bg-yellow-900/50 text-yellow-400 rounded-full">
                            Pending
                          </span>
                        )}
                      </CardTitle>
                      <span className="text-sm text-gray-400">Ends: {proposal.endTime}</span>
                    </div>
                    <CardDescription className="text-gray-300">
                      {proposal.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {proposal.status !== "Pending" && (
                      <>
                        <div className="grid grid-cols-3 gap-2 mb-2 text-center text-sm">
                          <div className="text-green-400">For: {proposal.votes.for}%</div>
                          <div className="text-red-400">Against: {proposal.votes.against}%</div>
                          <div className="text-gray-400">Abstain: {proposal.votes.abstain}%</div>
                        </div>
                        <div className="flex w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="bg-green-500" 
                            style={{ width: `${proposal.votes.for}%` }} 
                          />
                          <div 
                            className="bg-red-500" 
                            style={{ width: `${proposal.votes.against}%` }} 
                          />
                          <div 
                            className="bg-gray-500" 
                            style={{ width: `${proposal.votes.abstain}%` }} 
                          />
                        </div>
                      </>
                    )}
                    <div className="flex justify-end mt-4">
                      <Button 
                        variant="outline" 
                        className="mr-2 border-blue-500 text-blue-400 hover:bg-blue-900/30"
                      >
                        View Details
                      </Button>
                      {proposal.status === "Active" && (
                        <Button className="bg-blue-700 hover:bg-blue-600 text-white">
                          Cast Vote
                        </Button>
                      )}
                      {proposal.status === "Pending" && (
                        <Button className="bg-yellow-700 hover:bg-yellow-600 text-white">
                          Support
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div className="flex justify-center mt-4">
                <Button className="bg-blue-700 hover:bg-blue-600 text-white px-6">
                  <FileBarChart2 className="mr-2 h-4 w-4" />
                  Create New Proposal
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="governance" className="pt-6">
            <Card className="bg-gray-800/70 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-blue-300">DAO Membership Distribution</CardTitle>
                <CardDescription className="text-gray-300">
                  Balanced representation across all stakeholder groups ensures no single entity can dominate governance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {members.map((member, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{member.name}</span>
                        <span className="text-blue-300">{member.tokens} million HELIX ({member.percentage}%)</span>
                      </div>
                      <Progress value={member.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                  <h3 className="text-lg font-medium text-blue-300 mb-2">Governance Parameters</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Proposal Threshold:</p>
                      <p className="text-white">100,000 HELIX</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Quorum Requirement:</p>
                      <p className="text-white">15% of total supply</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Voting Period:</p>
                      <p className="text-white">7 days</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Timelock Delay:</p>
                      <p className="text-white">48 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="treasury" className="pt-6">
            <Card className="bg-gray-800/70 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-blue-300">DAO Treasury</CardTitle>
                <CardDescription className="text-gray-300">
                  Overview of the HelixDAO treasury assets and allocations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-blue-300">Treasury Balance</h3>
                    <span className="text-2xl font-bold text-white">8.2M HELIX</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <p className="text-gray-400 text-sm">ETH</p>
                      <p className="text-white font-medium">245.8 ETH</p>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <p className="text-gray-400 text-sm">USDC</p>
                      <p className="text-white font-medium">1.2M USDC</p>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <p className="text-gray-400 text-sm">Other Assets</p>
                      <p className="text-white font-medium">$350,000</p>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg">
                      <p className="text-gray-400 text-sm">Total Value</p>
                      <p className="text-white font-medium">$5.8M USD</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-blue-300 mb-3">Treasury Allocation</h3>
                <div className="space-y-3">
                  {[
                    { category: "Education Grants", allocation: 40, color: "bg-blue-500" },
                    { category: "Research & Development", allocation: 25, color: "bg-green-500" },
                    { category: "Operations", allocation: 20, color: "bg-purple-500" },
                    { category: "Liquidity Reserves", allocation: 15, color: "bg-yellow-500" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{item.category}</span>
                        <span className="text-white">{item.allocation}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className={`${item.color} h-2.5 rounded-full`} style={{ width: `${item.allocation}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button className="bg-blue-700 hover:bg-blue-600 text-white px-6">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View Detailed Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-900/30 rounded-xl p-8 text-center mt-12"
        >
          <Bird className="h-12 w-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white font-satoshi mb-6">
            Join the HelixDAO Community
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Participate in shaping the future of education, policy, and industry collaboration through our decentralized governance model.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="button-hover bg-blue-700 text-white hover:bg-blue-600"
            >
              Connect Wallet
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="button-hover border-blue-700 text-blue-300 hover:bg-blue-900/30"
            >
              Read Governance Docs
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default DaoGovernance;
