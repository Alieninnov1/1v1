
import { useState } from "react";
import { 
  ChevronDown, ChevronRight, Search, Filter, 
  Download, BookOpen, Users, Palette, Code
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface KnowledgeItemProps {
  title: string;
  description: string;
  tags: string[];
  category: "objective" | "persona" | "design" | "technical" | "policy";
  expanded?: boolean;
}

const KnowledgeItem = ({ title, description, tags, category, expanded = false }: KnowledgeItemProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  
  const categoryColors = {
    objective: "bg-blue-100 text-blue-800",
    persona: "bg-purple-100 text-purple-800",
    design: "bg-amber-100 text-amber-800",
    technical: "bg-emerald-100 text-emerald-800",
    policy: "bg-red-100 text-red-800"
  };
  
  return (
    <Card className="mb-3 overflow-hidden">
      <div 
        className="flex justify-between items-center p-3 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          {isExpanded ? 
            <ChevronDown className="h-4 w-4 text-gray-500 mr-2" /> : 
            <ChevronRight className="h-4 w-4 text-gray-500 mr-2" />
          }
          <span className="font-medium">{title}</span>
        </div>
        <Badge className={categoryColors[category]}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Badge>
      </div>
      
      {isExpanded && (
        <div className="p-3 pt-0 border-t">
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">{tag}</Badge>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

const KnowledgeStructure = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const { toast } = useToast();
  
  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Knowledge base export initiated. Download will begin shortly."
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input 
            placeholder="Search knowledge base..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleExport}>
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-5 mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="objectives">
            <BookOpen className="mr-2 h-3.5 w-3.5" />
            Objectives
          </TabsTrigger>
          <TabsTrigger value="personas">
            <Users className="mr-2 h-3.5 w-3.5" />
            Personas
          </TabsTrigger>
          <TabsTrigger value="design">
            <Palette className="mr-2 h-3.5 w-3.5" />
            Design
          </TabsTrigger>
          <TabsTrigger value="technical">
            <Code className="mr-2 h-3.5 w-3.5" />
            Technical
          </TabsTrigger>
        </TabsList>
        
        <ScrollArea className="h-[600px] pr-4">
          <TabsContent value="all" className="mt-0">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2 flex items-center">
                  <BookOpen className="mr-2 h-4 w-4 text-blue-600" />
                  Project Objectives
                </h3>
                <KnowledgeItem
                  title="Triple Helix Integration"
                  description="Create a system that integrates academic institutions, industry partners, and government entities into a cohesive ecosystem with real-time data exchange."
                  tags={["Core Concept", "Integration", "Real-time"]}
                  category="objective"
                  expanded={true}
                />
                <KnowledgeItem
                  title="Curriculum Relevance"
                  description="Build an AI-powered system to ensure educational curricula remain aligned with industry demands and policy directions."
                  tags={["AI", "Education", "Industry Alignment"]}
                  category="objective"
                />
                <KnowledgeItem
                  title="Regional Innovation Mapping"
                  description="Create geographic visualizations of skills, opportunities, and resource distributions across regions."
                  tags={["Visualization", "Geographic", "Resource Mapping"]}
                  category="objective"
                />
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2 flex items-center">
                  <Users className="mr-2 h-4 w-4 text-purple-600" />
                  User Personas
                </h3>
                <KnowledgeItem
                  title="Academic Administrator"
                  description="Decision-makers at educational institutions seeking to modernize curricula and align with industry needs."
                  tags={["Education", "Decision Maker", "Curriculum"]}
                  category="persona"
                />
                <KnowledgeItem
                  title="Industry Partner"
                  description="Businesses seeking skilled talent and opportunities to influence educational outcomes to meet future workforce needs."
                  tags={["Business", "Talent", "Workforce"]}
                  category="persona"
                />
                <KnowledgeItem
                  title="Policy Maker"
                  description="Government officials responsible for education and workforce development policies at local, state, or national levels."
                  tags={["Government", "Policy", "Development"]}
                  category="persona"
                />
                <KnowledgeItem
                  title="Student"
                  description="Current and prospective students looking to align their education with future job prospects and industry demands."
                  tags={["Education", "Career", "Future Planning"]}
                  category="persona"
                />
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2 flex items-center">
                  <Palette className="mr-2 h-4 w-4 text-amber-600" />
                  Design Guidelines
                </h3>
                <KnowledgeItem
                  title="Color Scheme"
                  description="Primary: Deep Purple (#5E2CA5), Secondary: Indigo and Blue gradients. Accent colors for each stakeholder group (Academia: Blue, Industry: Amber, Government: Green)."
                  tags={["Colors", "UI", "Branding"]}
                  category="design"
                />
                <KnowledgeItem
                  title="Typography"
                  description="Inter or Satoshi font family for clean, modern interfaces. Font hierarchy: headers (bold), subheaders (medium), body text (regular)."
                  tags={["Fonts", "Typography", "Readability"]}
                  category="design"
                />
                <KnowledgeItem
                  title="Dashboard Components"
                  description="Card-based UI elements with consistent padding, shadows, and interaction states. Visual hierarchy emphasizes data visualizations and actionable insights."
                  tags={["UI Components", "Cards", "Consistency"]}
                  category="design"
                />
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2 flex items-center">
                  <Code className="mr-2 h-4 w-4 text-emerald-600" />
                  Technical Specifications
                </h3>
                <KnowledgeItem
                  title="Technology Stack"
                  description="React + Tailwind CSS frontend with TypeScript. Firebase Realtime Database for backend. OpenAI integration for recommendation engine."
                  tags={["React", "Firebase", "OpenAI", "Tailwind"]}
                  category="technical"
                />
                <KnowledgeItem
                  title="Data Models"
                  description="Core entities include Users (with stakeholder roles), Feedback, Metrics, Projects, and Recommendations with appropriate relationships and access controls."
                  tags={["Data Structure", "Database", "Entities"]}
                  category="technical"
                />
                <KnowledgeItem
                  title="API Integration"
                  description="Connections to external data sources including labor market information, educational outcome databases, and policy repositories."
                  tags={["API", "Integration", "External Data"]}
                  category="technical"
                />
                <KnowledgeItem
                  title="System Architecture"
                  description="Frontend components connect to Firebase backend, with separate services for data analytics, recommendation engine, and authentication."
                  tags={["Architecture", "Services", "Components"]}
                  category="technical"
                />
                <KnowledgeItem
                  title="Performance Requirements"
                  description="Dashboard load time < 2s, real-time updates < 500ms, responsive design across all device types and orientations."
                  tags={["Performance", "Speed", "Optimization"]}
                  category="technical"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="objectives" className="mt-0">
            <div className="space-y-4">
              <KnowledgeItem
                title="Triple Helix Integration"
                description="Create a system that integrates academic institutions, industry partners, and government entities into a cohesive ecosystem with real-time data exchange."
                tags={["Core Concept", "Integration", "Real-time"]}
                category="objective"
                expanded={true}
              />
              <KnowledgeItem
                title="Curriculum Relevance"
                description="Build an AI-powered system to ensure educational curricula remain aligned with industry demands and policy directions."
                tags={["AI", "Education", "Industry Alignment"]}
                category="objective"
              />
              <KnowledgeItem
                title="System Strain Monitoring"
                description="Develop metrics and visualizations to monitor ecological and social pressure created by economic development decisions."
                tags={["Metrics", "Sustainability", "Monitoring"]}
                category="objective"
              />
              <KnowledgeItem
                title="Regional Innovation Mapping"
                description="Create geographic visualizations of skills, opportunities, and resource distributions across regions."
                tags={["Visualization", "Geographic", "Resource Mapping"]}
                category="objective"
              />
              <KnowledgeItem
                title="DAO-Style Governance"
                description="Implement voting simulations and impact analysis for distributed decision-making across stakeholders."
                tags={["Governance", "Voting", "Decision-making"]}
                category="objective"
              />
              <KnowledgeItem
                title="Grant Matching Engine"
                description="Automated system to connect projects with relevant funding opportunities across sectors."
                tags={["Funding", "Automation", "Matching"]}
                category="objective"
              />
            </div>
          </TabsContent>
          
          {/* More TabsContent sections would go here for personas, design, technical */}
          {/* These follow the same pattern as the "objectives" tab above */}
          <TabsContent value="personas" className="mt-0">
            <div className="space-y-4">
              <KnowledgeItem
                title="Academic Administrator"
                description="Decision-makers at educational institutions seeking to modernize curricula and align with industry needs."
                tags={["Education", "Decision Maker", "Curriculum"]}
                category="persona"
                expanded={true}
              />
              <KnowledgeItem
                title="Industry Partner"
                description="Businesses seeking skilled talent and opportunities to influence educational outcomes to meet future workforce needs."
                tags={["Business", "Talent", "Workforce"]}
                category="persona"
              />
              <KnowledgeItem
                title="Policy Maker"
                description="Government officials responsible for education and workforce development policies at local, state, or national levels."
                tags={["Government", "Policy", "Development"]}
                category="persona"
              />
              <KnowledgeItem
                title="Student"
                description="Current and prospective students looking to align their education with future job prospects and industry demands."
                tags={["Education", "Career", "Future Planning"]}
                category="persona"
              />
              <KnowledgeItem
                title="Researcher"
                description="Academic researchers studying workforce development, education policy, and innovation ecosystems."
                tags={["Research", "Academia", "Analysis"]}
                category="persona"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="design" className="mt-0">
            <div className="space-y-4">
              <KnowledgeItem
                title="Color Scheme"
                description="Primary: Deep Purple (#5E2CA5), Secondary: Indigo and Blue gradients. Accent colors for each stakeholder group (Academia: Blue, Industry: Amber, Government: Green)."
                tags={["Colors", "UI", "Branding"]}
                category="design"
                expanded={true}
              />
              <KnowledgeItem
                title="Typography"
                description="Inter or Satoshi font family for clean, modern interfaces. Font hierarchy: headers (bold), subheaders (medium), body text (regular)."
                tags={["Fonts", "Typography", "Readability"]}
                category="design"
              />
              <KnowledgeItem
                title="Dashboard Components"
                description="Card-based UI elements with consistent padding, shadows, and interaction states. Visual hierarchy emphasizes data visualizations and actionable insights."
                tags={["UI Components", "Cards", "Consistency"]}
                category="design"
              />
              <KnowledgeItem
                title="Data Visualization Standards"
                description="Consistent chart types, colors, and legends across all metrics. Interactive elements for exploring data with consistent hover/selection states."
                tags={["Charts", "Graphs", "Interaction"]}
                category="design"
              />
              <KnowledgeItem
                title="Responsive Design"
                description="Mobile-first grid system with breakpoints at 640px, 768px, 1024px, and 1280px. Simplified visualizations and controls on smaller screens."
                tags={["Responsive", "Mobile", "Adaptation"]}
                category="design"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="technical" className="mt-0">
            <div className="space-y-4">
              <KnowledgeItem
                title="Technology Stack"
                description="React + Tailwind CSS frontend with TypeScript. Firebase Realtime Database for backend. OpenAI integration for recommendation engine."
                tags={["React", "Firebase", "OpenAI", "Tailwind"]}
                category="technical"
                expanded={true}
              />
              <KnowledgeItem
                title="Data Models"
                description="Core entities include Users (with stakeholder roles), Feedback, Metrics, Projects, and Recommendations with appropriate relationships and access controls."
                tags={["Data Structure", "Database", "Entities"]}
                category="technical"
              />
              <KnowledgeItem
                title="API Integration"
                description="Connections to external data sources including labor market information, educational outcome databases, and policy repositories."
                tags={["API", "Integration", "External Data"]}
                category="technical"
              />
              <KnowledgeItem
                title="System Architecture"
                description="Frontend components connect to Firebase backend, with separate services for data analytics, recommendation engine, and authentication."
                tags={["Architecture", "Services", "Components"]}
                category="technical"
              />
              <KnowledgeItem
                title="Performance Requirements"
                description="Dashboard load time < 2s, real-time updates < 500ms, responsive design across all device types and orientations."
                tags={["Performance", "Speed", "Optimization"]}
                category="technical"
              />
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default KnowledgeStructure;
