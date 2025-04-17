
import { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import KnowledgeBase from "@/components/knowledge/KnowledgeBase";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import RealTimeFeedbackWall from "@/components/feedback/RealTimeFeedbackWall";
import { DataScraper } from "@/components/ui/data-scraper";
import { 
  ArrowRight, BookOpen, Briefcase, Building2, 
  Lightbulb, Search, BookMarked, BarChart2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useSkillTrends } from "@/services/apiDataService";
import SkillTile from "@/components/knowledge/SkillTile";

const Knowledge = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("resources");
  const { data: skillTrends, isLoading: trendsLoading } = useSkillTrends();
  const { toast } = useToast();
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Optimize page loading and performance
  useEffect(() => {
    // Set initial state with a slight delay for smoother appearance
    const loadTimer = setTimeout(() => setIsPageLoaded(true), 100);
    
    // Intersection Observer for lazy loading content
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe lazy-load sections
    if (pageRef.current) {
      const sections = pageRef.current.querySelectorAll('.lazy-load');
      sections.forEach(section => observer.observe(section));
    }
    
    return () => {
      clearTimeout(loadTimer);
      observer.disconnect();
    };
  }, []);

  // Enhanced tab management
  const handleTabChange = (value: string) => {
    // Smooth transition
    const tabContent = document.getElementById(`tab-${activeTab}`);
    if (tabContent) {
      tabContent.style.opacity = '0';
      setTimeout(() => {
        setActiveTab(value);
        setTimeout(() => {
          const newTabContent = document.getElementById(`tab-${value}`);
          if (newTabContent) newTabContent.style.opacity = '1';
        }, 50);
      }, 200);
    } else {
      setActiveTab(value);
    }
  };

  return (
    <Layout>
      <div ref={pageRef} className="container mx-auto px-4 py-6 md:py-8 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8"
        >
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-900 text-white p-6">
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
                <BookMarked className="h-6 w-6" />
                <span>HelixHub Knowledge Hub</span>
              </CardTitle>
              <CardDescription className="text-purple-100 text-balance">
                Your gateway to connecting academia, industry, and policy insights
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4 text-pretty">
                Explore our comprehensive knowledge base to discover resources, tools, and insights that bridge the gap between education, industry, and government. Filter by role to find content tailored to your specific needs.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <Button size="sm" variant="outline" className="bg-white flex items-center" onClick={() => toast({
                  title: "Search Feature",
                  description: "Knowledge search would activate here"
                })}>
                  <Search size={16} className="mr-1.5" />
                  Search Resources
                </Button>
                <Button size="sm" variant="outline" className="bg-white flex items-center" onClick={() => toast({
                  title: "Suggestion",
                  description: "AI-powered resource recommendations would appear here"
                })}>
                  <Lightbulb size={16} className="mr-1.5" />
                  Personalized Suggestions
                </Button>
                <Button size="sm" variant="default" className="flex items-center" onClick={() => toast({
                  title: "Categories",
                  description: "Resource categories would expand here"
                })}>
                  <span>Explore All Categories</span>
                  <ArrowRight size={16} className="ml-1.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="bg-white border rounded-t-lg overflow-hidden">
              <TabsList className="w-full bg-white border-b justify-start space-x-0 p-0 h-auto">
                <TabsTrigger 
                  value="resources" 
                  className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-purple-500 rounded-none py-3 px-4"
                >
                  <BookOpen className="mr-2 h-4 w-4" /> Resources
                </TabsTrigger>
                <TabsTrigger 
                  value="industry" 
                  className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-purple-500 rounded-none py-3 px-4"
                >
                  <Briefcase className="mr-2 h-4 w-4" /> Industry Insights
                </TabsTrigger>
                <TabsTrigger 
                  value="policy" 
                  className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-purple-500 rounded-none py-3 px-4"
                >
                  <Building2 className="mr-2 h-4 w-4" /> Policy Framework
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="resources" id="tab-resources" className="mt-6 transition-opacity duration-300">
              <KnowledgeBase />
            </TabsContent>
            
            <TabsContent value="industry" id="tab-industry" className="mt-6 transition-opacity duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="mb-6 lazy-load opacity-0">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-xl font-bold flex items-center">
                        <BarChart2 className="mr-2 h-5 w-5 text-purple-600" />
                        Industry Skill Trends
                      </h2>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs"
                        onClick={() => toast({
                          title: "Trends Data",
                          description: "Full skill trend analytics would open here"
                        })}
                      >
                        View all trends
                      </Button>
                    </div>

                    {trendsLoading ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Array(4).fill(0).map((_, idx) => (
                          <div 
                            key={idx} 
                            className="h-36 bg-gray-200 rounded-xl animate-pulse"
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    )}
                  </div>
                  
                  <div className="lazy-load opacity-0">
                    <DataScraper />
                  </div>
                </div>
                
                <div className="md:col-span-1 space-y-6">
                  <div className="xp-window lazy-load opacity-0">
                    <div className="xp-title-bar">
                      <span>Industry Partners</span>
                    </div>
                    <div className="xp-window-content p-4">
                      <ul className="space-y-3 mb-4">
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
                      
                      <Button size="sm" variant="outline" className="w-full" onClick={() => toast({
                        title: "Industry Partners",
                        description: "Full partner directory would open here"
                      })}>
                        View All Partners
                      </Button>
                    </div>
                  </div>
                  
                  <div className="xp-window lazy-load opacity-0">
                    <div className="xp-title-bar">
                      <span>Upcoming Industry Events</span>
                    </div>
                    <div className="xp-window-content p-4">
                      <ul className="space-y-3 mb-4">
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
                      
                      <Button size="sm" variant="outline" className="w-full" onClick={() => toast({
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
            
            <TabsContent value="policy" id="tab-policy" className="mt-6 transition-opacity duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 lazy-load opacity-0">
                  <RealTimeFeedbackWall />
                </div>
                <div className="md:col-span-1 space-y-6">
                  <div className="xp-window lazy-load opacity-0">
                    <div className="xp-title-bar">
                      <span>Policy Resources</span>
                    </div>
                    <div className="xp-window-content p-4">
                      <ul className="space-y-3 mb-4">
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
                      
                      <Button size="sm" variant="outline" className="w-full" onClick={() => toast({
                        title: "Policy Resources",
                        description: "Full resource library would open here"
                      })}>
                        View All Resources
                      </Button>
                    </div>
                  </div>
                  
                  <div className="xp-window lazy-load opacity-0">
                    <div className="xp-title-bar">
                      <span>Policy Stakeholders</span>
                    </div>
                    <div className="xp-window-content p-4">
                      <ul className="space-y-3 mb-4">
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
                      
                      <Button size="sm" variant="outline" className="w-full" onClick={() => toast({
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
