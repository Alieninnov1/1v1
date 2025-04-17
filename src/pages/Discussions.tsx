
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import RealTimeFeedbackWall from "@/components/feedback/RealTimeFeedbackWall";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DataScraper } from "@/components/ui/data-scraper";

const Discussions = () => {
  const [activeTab, setActiveTab] = useState("feedback");
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Card>
            <CardHeader className="bg-gradient-to-r from-purple-700 to-purple-900 text-white">
              <CardTitle className="text-2xl md:text-3xl">Triple Helix Discussions</CardTitle>
              <p className="text-purple-100 mt-1">
                Collaborative conversations between academia, industry, and policymakers
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700">
                Share insights, provide feedback, and engage in discussions to bridge skill gaps and enhance curriculum alignment. 
                Filter by stakeholder group to find relevant conversations.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        
        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4 bg-gray-50 p-1 rounded-lg">
              <TabsTrigger value="feedback" className="text-base px-6 py-2">
                Feedback Wall
              </TabsTrigger>
              <TabsTrigger value="topics" className="text-base px-6 py-2">
                Trending Topics
              </TabsTrigger>
              <TabsTrigger value="data" className="text-base px-6 py-2">
                Live Data
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="feedback">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <RealTimeFeedbackWall />
                </div>
                <div className="md:col-span-1">
                  <div className="space-y-6">
                    <div className="xp-window">
                      <div className="xp-title-bar">
                        <span>Discussion Stats</span>
                      </div>
                      <div className="xp-window-content p-4">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Active users:</span>
                            <span className="font-bold">248</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Posts today:</span>
                            <span className="font-bold">47</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Industry participants:</span>
                            <span className="font-bold">34</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Academia participants:</span>
                            <span className="font-bold">92</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Government participants:</span>
                            <span className="font-bold">16</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <DataScraper isCompact />
                    
                    <div className="xp-window">
                      <div className="xp-title-bar">
                        <span>Upcoming Roundtables</span>
                      </div>
                      <div className="xp-window-content p-4">
                        <ul className="space-y-3 text-sm">
                          <li className="border-b pb-2">
                            <div className="font-semibold">AI Ethics Framework</div>
                            <div className="text-xs text-gray-600">Apr 25, 2025 • 15 Participants</div>
                          </li>
                          <li className="border-b pb-2">
                            <div className="font-semibold">Regional Skills Summit</div>
                            <div className="text-xs text-gray-600">May 12, 2025 • 32 Participants</div>
                          </li>
                          <li>
                            <div className="font-semibold">Policy Innovation Lab</div>
                            <div className="text-xs text-gray-600">May 30, 2025 • 28 Participants</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="topics">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="xp-window">
                  <div className="xp-title-bar">
                    <span>Hot Topics - Industry</span>
                  </div>
                  <div className="xp-window-content p-4">
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">AI Engineering Talent Gap</span>
                        <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">Critical</span>
                      </li>
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Sustainable Tech Curriculum</span>
                        <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">High</span>
                      </li>
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Cybersecurity Workforce</span>
                        <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">Critical</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="font-medium">Digital Marketing Evolution</span>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Medium</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="xp-window">
                  <div className="xp-title-bar">
                    <span>Hot Topics - Academia</span>
                  </div>
                  <div className="xp-window-content p-4">
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Interdisciplinary Data Science</span>
                        <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">High</span>
                      </li>
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Research to Industry Pipeline</span>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Medium</span>
                      </li>
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Ethical Technology Integration</span>
                        <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">High</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="font-medium">Credential Innovation</span>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Medium</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="xp-window">
                  <div className="xp-title-bar">
                    <span>Hot Topics - Policy</span>
                  </div>
                  <div className="xp-window-content p-4">
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">AI Ethics Regulations</span>
                        <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">Critical</span>
                      </li>
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Workforce Reskilling Programs</span>
                        <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">High</span>
                      </li>
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Educational Funding Reform</span>
                        <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">High</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="font-medium">Cross-Border Skill Recognition</span>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Medium</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="xp-window">
                  <div className="xp-title-bar">
                    <span>Hot Topics - Regional</span>
                  </div>
                  <div className="xp-window-content p-4">
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Rural Tech Education Access</span>
                        <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">High</span>
                      </li>
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Urban Innovation Hubs</span>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Medium</span>
                      </li>
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Local Industry Partnerships</span>
                        <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">High</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="font-medium">Remote Workforce Development</span>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Medium</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="data">
              <DataScraper />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Discussions;
