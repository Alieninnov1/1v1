
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Search, Database, Eye, FileText, Code, Link, History, ArrowDownToLine, ArrowUpToLine, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const BlockchainExplorer = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
    }, 1500);
  };

  const transactions = [
    {
      hash: "0x1a2b...3c4d",
      from: "0xab12...ef56",
      to: "0xff78...cd90",
      value: "0.125 ETH",
      timestamp: "12 min ago",
      type: "Knowledge Update"
    },
    {
      hash: "0x5e6f...7g8h",
      from: "0xbc23...de45",
      to: "0xaa67...bb89",
      value: "0.001 ETH",
      timestamp: "34 min ago",
      type: "Feedback Submission"
    },
    {
      hash: "0x9i0j...1k2l",
      from: "0xcd34...ef56",
      to: "0x12ab...34cd",
      value: "0.05 ETH",
      timestamp: "1 hr ago",
      type: "Policy Vote"
    },
    {
      hash: "0x3m4n...5o6p",
      from: "0xde45...fg67",
      to: "0x56ef...78gh",
      value: "0.075 ETH",
      timestamp: "2 hr ago",
      type: "Curriculum Update"
    },
    {
      hash: "0x7q8r...9s0t",
      from: "0xef56...gh78",
      to: "0x90ij...12kl",
      value: "0.2 ETH",
      timestamp: "3 hr ago",
      type: "Industry Partnership"
    }
  ];

  const blocks = [
    { number: 14352893, time: "12 min ago", txn: 125, proposer: "0x1ab...2cd" },
    { number: 14352892, time: "15 min ago", txn: 87, proposer: "0x3de...4fg" },
    { number: 14352891, time: "18 min ago", txn: 103, proposer: "0x5hi...6jk" },
    { number: 14352890, time: "21 min ago", txn: 94, proposer: "0x7lm...8no" }
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
            <Database className="h-8 w-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-satoshi mb-6">
            HelixHub <span className="text-blue-400">Blockchain</span> Explorer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the transparent and immutable record of all activities across the HelixHub decentralized network.
          </p>
        </motion.div>

        <Card className="glass-card mb-8 bg-gray-800/50 border border-gray-700 text-white">
          <CardContent className="pt-6">
            <form onSubmit={handleSearch} className="flex w-full max-w-3xl mx-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search by TX Hash, Block Number, or Address"
                  className="pl-10 bg-gray-900 border-gray-700 text-white focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                type="submit" 
                className="ml-2 bg-blue-700 hover:bg-blue-600 text-white"
                disabled={isSearching}
              >
                {isSearching ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Searching
                  </>
                ) : (
                  "Search"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: <Eye className="h-6 w-6 text-blue-400" />,
              title: "Transparent Records",
              description: "All HelixHub activities are recorded on a public blockchain for full transparency"
            },
            {
              icon: <FileText className="h-6 w-6 text-blue-400" />,
              title: "Smart Contracts",
              description: "Policy changes and curriculum updates are managed via audited smart contracts"
            },
            {
              icon: <Code className="h-6 w-6 text-blue-400" />,
              title: "Open Protocol",
              description: "Built on open standards to ensure interoperability with other education systems"
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

        <Tabs defaultValue="transactions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800 text-gray-300">
            <TabsTrigger value="transactions" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
              Latest Transactions
            </TabsTrigger>
            <TabsTrigger value="blocks" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
              Recent Blocks
            </TabsTrigger>
            <TabsTrigger value="stats" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
              Network Stats
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="transactions" className="pt-6">
            <Card className="bg-gray-800/50 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-blue-300">Latest Transactions</CardTitle>
                <CardDescription className="text-gray-300">
                  The most recent transactions recorded on the HelixHub blockchain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700">
                        <TableHead className="text-gray-300">TX Hash</TableHead>
                        <TableHead className="text-gray-300">Type</TableHead>
                        <TableHead className="text-gray-300">From</TableHead>
                        <TableHead className="text-gray-300">To</TableHead>
                        <TableHead className="text-gray-300">Value</TableHead>
                        <TableHead className="text-gray-300">Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((tx, index) => (
                        <TableRow key={index} className="border-gray-700 hover:bg-gray-700/30">
                          <TableCell className="text-blue-400 font-mono">{tx.hash}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <span className={`w-2 h-2 rounded-full mr-2 ${
                                tx.type === "Knowledge Update" ? "bg-green-500" :
                                tx.type === "Feedback Submission" ? "bg-blue-500" :
                                tx.type === "Policy Vote" ? "bg-purple-500" :
                                tx.type === "Curriculum Update" ? "bg-yellow-500" : "bg-red-500"
                              }`}></span>
                              {tx.type}
                            </div>
                          </TableCell>
                          <TableCell className="font-mono text-gray-300">{tx.from}</TableCell>
                          <TableCell className="font-mono text-gray-300">{tx.to}</TableCell>
                          <TableCell className="text-white">{tx.value}</TableCell>
                          <TableCell className="text-gray-400">{tx.timestamp}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex justify-center mt-6">
                  <Button 
                    variant="outline" 
                    className="border-blue-700 text-blue-300 hover:bg-blue-900/30"
                  >
                    <Link className="mr-2 h-4 w-4" />
                    View All Transactions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="blocks" className="pt-6">
            <Card className="bg-gray-800/50 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-blue-300">Recent Blocks</CardTitle>
                <CardDescription className="text-gray-300">
                  The latest blocks added to the HelixHub blockchain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700">
                        <TableHead className="text-gray-300">Block</TableHead>
                        <TableHead className="text-gray-300">Age</TableHead>
                        <TableHead className="text-gray-300">Txn</TableHead>
                        <TableHead className="text-gray-300">Proposer</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {blocks.map((block, index) => (
                        <TableRow key={index} className="border-gray-700 hover:bg-gray-700/30">
                          <TableCell className="text-blue-400 font-mono">{block.number}</TableCell>
                          <TableCell className="text-gray-400">{block.time}</TableCell>
                          <TableCell className="text-white">{block.txn}</TableCell>
                          <TableCell className="font-mono text-gray-300">{block.proposer}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex justify-center mt-6">
                  <Button 
                    variant="outline" 
                    className="border-blue-700 text-blue-300 hover:bg-blue-900/30"
                  >
                    <History className="mr-2 h-4 w-4" />
                    View All Blocks
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="stats" className="pt-6">
            <Card className="bg-gray-800/50 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-blue-300">Network Statistics</CardTitle>
                <CardDescription className="text-gray-300">
                  Real-time statistics for the HelixHub blockchain network
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                    <h3 className="text-lg text-blue-300 mb-4">Transaction Activity</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Transactions (24h)</p>
                        <p className="text-xl font-medium text-white">24,893</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Average TX Fee</p>
                        <p className="text-xl font-medium text-white">0.0023 ETH</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Pending TXs</p>
                        <p className="text-xl font-medium text-white">127</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">TPS (current)</p>
                        <p className="text-xl font-medium text-white">12.3</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                    <h3 className="text-lg text-blue-300 mb-4">Network Health</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Active Validators</p>
                        <p className="text-xl font-medium text-white">456</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Network Uptime</p>
                        <p className="text-xl font-medium text-white">99.998%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Block Time</p>
                        <p className="text-xl font-medium text-white">~3.2 sec</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Total Nodes</p>
                        <p className="text-xl font-medium text-white">1,248</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-900 rounded-lg border border-gray-700 md:col-span-2">
                    <h3 className="text-lg text-blue-300 mb-4">Token Statistics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">HELIX Price</p>
                        <p className="text-xl font-medium text-white">$2.34</p>
                        <p className="text-xs text-green-400">+3.2% (24h)</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Market Cap</p>
                        <p className="text-xl font-medium text-white">$234M</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Circulating Supply</p>
                        <p className="text-xl font-medium text-white">100M HELIX</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Total Supply</p>
                        <p className="text-xl font-medium text-white">200M HELIX</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4">
                  <Button className="bg-blue-700 hover:bg-blue-600 text-white">
                    <ArrowDownToLine className="mr-2 h-4 w-4" />
                    Download Network Report
                  </Button>
                  <Button variant="outline" className="border-blue-700 text-blue-300 hover:bg-blue-900/30">
                    <ArrowUpToLine className="mr-2 h-4 w-4" />
                    Submit Network Data
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
          <h2 className="text-2xl md:text-3xl font-bold text-white font-satoshi mb-6">
            Contribute to the HelixHub Network
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Run a node, stake your HELIX tokens, or participate in governance to help secure and improve the network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="button-hover bg-blue-700 text-white hover:bg-blue-600"
            >
              Run a Node
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="button-hover border-blue-700 text-blue-300 hover:bg-blue-900/30"
            >
              Stake HELIX Tokens
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default BlockchainExplorer;
