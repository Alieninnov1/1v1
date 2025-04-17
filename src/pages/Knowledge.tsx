
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import KnowledgeBase from "@/components/knowledge/KnowledgeBase";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import RealTimeFeedbackWall from "@/components/feedback/RealTimeFeedbackWall";
import { DataScraper } from "@/components/ui/data-scraper";
import { ArrowRight, BookOpen, Briefcase, Building2, Lightbulb, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useSkillTrends } from "@/services/apiDataService";
import SkillTile from "@/components/knowledge/SkillTile";

const Knowledge = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("resources");
  const { data: skillTrends } = useSkillTrends();
  const { toast } = useToast();
  
  // Simulate content loading to improve perceived performance
  useEffect(() => {
    setTimeout(() => setIsPageLoaded(true), 100);
  }, []);

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
              <CardTitle className="text-2xl md:text-3xl">HelixHub Knowledge Hub</CardTitle>
              <CardDescription className="text-purple-100">
                Your gateway to connecting academia, industry, and policy insights
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700">
                Explore our comprehensive knowledge base to discover resources, tools, and insights that bridge the gap between education, industry, and government. Filter by role to find content tailored to your specific needs.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <Button size="sm" variant="outline" className="bg-white" onClick={() => toast({
                  title: "Search Feature",
                  description: "Knowledge search would activate here"
                })}>
                  <Search size={16} className="mr-1" />
                  Search Resources
                </Button>
                <Button size="sm" variant="outline" className="bg-white" onClick={() => toast({
                  title: "Suggestion",
                  description: "AI-powered resource recommendations would appear here"
                })}>
                  <Lightbulb size={16} className="mr-1" />
                  Get Personalized Suggestions
                </Button>
                <Button size="sm" variant="default" onClick={() => toast({
                  title: "Categories",
                  description: "Resource categories would expand here"
                })}>
                  Explore All Categories
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full bg-white border-b justify-start space-x-0">
              <TabsTrigger value="resources" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-purple-500 rounded-none">
                <BookOpen className="mr-2 h-4 w-4" /> Resources
              </TabsTrigger>
              <TabsTrigger value="industry" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-purple-500 rounded-none">
                <Briefcase className="mr-2 h-4 w-4" /> Industry Insights
              </TabsTrigger>
              <TabsTrigger value="policy" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-purple-500 rounded-none">
                <Building2 className="mr-2 h-4 w-4" /> Policy Framework
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="resources" className="mt-6">
              <KnowledgeBase />
            </TabsContent>
            
            <TabsContent value="industry" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-3">Industry Skill Trends</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                      {skillTrends?.slice(0, 4).map((skill, idx) => (
                        <SkillTile
                          key={skill.name}
                          name={skill.name}
                          growth={skill.growth}
                          demand={skill.demand}
                          relevance={skill.relevance}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <DataScraper />
                </div>
                <div className="md:col-span-1">
                  <div className="xp-window mb-6">
                    <div className="xp-title-bar">
                      <span>Industry Partners</span>
                    </div>
                    <div className="xp-window-content p-4">
                      <ul className="space-y-3">
                        <li className="border-b pb-2 flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">T</div>
                          <div>
                            <div className="font-semibold">TechCorp Global</div>
                            <div className="text-xs text-gray-600">AI & Cloud Solutions</div>
                          </div>
                        </li>
                        <li className="border-b pb-2 flex items-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">B</div>
                          <div>
                            <div className="font-semibold">BioGen Research</div>
                            <div className="text-xs text-gray-600">Biotechnology</div>
                          </div>
                        </li>
                        <li className="border-b pb-2 flex items-center">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-2">F</div>
                          <div>
                            <div className="font-semibold">FinTech Solutions</div>
                            <div className="text-xs text-gray-600">Financial Technology</div>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">G</div>
                          <div>
                            <div className="font-semibold">Global Manufacturing</div>
                            <div className="text-xs text-gray-600">Advanced Manufacturing</div>
                          </div>
                        </li>
                      </ul>
                      
                      <Button size="sm" variant="outline" className="w-full mt-4" onClick={() => toast({
                        title: "Industry Partners",
                        description: "Full partner directory would open here"
                      })}>
                        View All Partners
                      </Button>
                    </div>
                  </div>
                  
                  <div className="xp-window">
                    <div className="xp-title-bar">
                      <span>Upcoming Industry Events</span>
                    </div>
                    <div className="xp-window-content p-4">
                      <ul className="space-y-3">
                        <li className="border-b pb-2">
                          <div className="font-semibold">Tech Skills Summit 2025</div>
                          <div className="text-xs text-gray-600">May 15-17 • San Francisco</div>
                        </li>
                        <li className="border-b pb-2">
                          <div className="font-semibold">Future of Work Conference</div>
                          <div className="text-xs text-gray-600">June 8-10 • Virtual</div>
                        </li>
                        <li>
                          <div className="font-semibold">Industry-Academia Partnership Day</div>
                          <div className="text-xs text-gray-600">June 25 • Boston</div>
                        </li>
                      </ul>
                      
                      <Button size="sm" variant="outline" className="w-full mt-4" onClick={() => toast({
                        title: "Industry Events",
                        description: "Full events calendar would open here"
                      })}>
                        View All Events
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="policy" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <RealTimeFeedbackWall />
                </div>
                <div className="md:col-span-1">
                  <div className="xp-window mb-6">
                    <div className="xp-title-bar">
                      <span>Policy Resources</span>
                    </div>
                    <div className="xp-window-content p-4">
                      <ul className="space-y-3">
                        <li className="border-b pb-2">
                          <div className="font-semibold">Education-Industry Framework 2025</div>
                          <div className="text-xs text-gray-600">Official Guidelines • PDF</div>
                        </li>
                        <li className="border-b pb-2">
                          <div className="font-semibold">Skills Gap Analysis Toolkit</div>
                          <div className="text-xs text-gray-600">Interactive Resource • Web</div>
                        </li>
                        <li className="border-b pb-2">
                          <div className="font-semibold">Policy Impact Assessment Guide</div>
                          <div className="text-xs text-gray-600">Research Paper • PDF</div>
                        </li>
                        <li>
                          <div className="font-semibold">Regional Innovation Mapping</div>
                          <div className="text-xs text-gray-600">Interactive Tool • Web</div>
                        </li>
                      </ul>
                      
                      <Button size="sm" variant="outline" className="w-full mt-4" onClick={() => toast({
                        title: "Policy Resources",
                        description: "Full resource library would open here"
                      })}>
                        View All Resources
                      </Button>
                    </div>
                  </div>
                  
                  <div className="xp-window">
                    <div className="xp-title-bar">
                      <span>Policy Stakeholders</span>
                    </div>
                    <div className="xp-window-content p-4">
                      <ul className="space-y-3">
                        <li className="border-b pb-2 flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">E</div>
                          <div>
                            <div className="font-semibold">Education Ministry</div>
                            <div className="text-xs text-gray-600">National</div>
                          </div>
                        </li>
                        <li className="border-b pb-2 flex items-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">R</div>
                          <div>
                            <div className="font-semibold">Regional Skills Council</div>
                            <div className="text-xs text-gray-600">West Region</div>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-2">I</div>
                          <div>
                            <div className="font-semibold">Innovation Policy Lab</div>
                            <div className="text-xs text-gray-600">Independent</div>
                          </div>
                        </li>
                      </ul>
                      
                      <Button size="sm" variant="outline" className="w-full mt-4" onClick={() => toast({
                        title: "Policy Stakeholders",
                        description: "Full stakeholder directory would open here"
                      })}>
                        View All Stakeholders
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Knowledge;
