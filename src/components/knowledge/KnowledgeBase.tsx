
import { motion } from "framer-motion";
import { useState } from "react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { 
  BookOpen, 
  Building2, 
  FileText, 
  GraduationCap, 
  Landmark, 
  LightbulbIcon, 
  Lightbulb, 
  MapPin,
  BarChart3,
  Brain,
  Briefcase,
  Globe,
  Puzzle
} from "lucide-react";
import InsightCard from "@/components/dashboard/InsightCard";

interface KnowledgeSection {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  role: "student" | "teacher" | "policy" | "industry" | "admin";
  contentType: string;
  actionUrl?: string;
  resourceType: "document" | "tool" | "data" | "guide" | "video";
}

const KnowledgeBase = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  // Knowledge base sections matching the markdown document content
  const knowledgeSections: KnowledgeSection[] = [
    {
      title: "Triple Feedback Loop",
      description: "Real-time 3-way input and reflection from students, industry, and government.",
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      color: "#0055E5",
      role: "teacher",
      contentType: "curriculum",
      resourceType: "tool",
      actionUrl: "#feedback-loop"
    },
    {
      title: "Curriculum AI Engine",
      description: "Dynamically suggests education adjustments using job data and policy trends.",
      icon: <LightbulbIcon className="h-6 w-6 text-yellow-600" />,
      color: "#ED9564",
      role: "teacher",
      contentType: "curriculum",
      resourceType: "tool"
    },
    {
      title: "Innovation Map",
      description: "Visualizes skill voids, SME needs, and policy friction by region.",
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      color: "#92CD00",
      role: "policy",
      contentType: "innovation",
      resourceType: "data"
    },
    {
      title: "Policy Sandbox",
      description: "Simulate and crowdsource feedback on draft policy or curriculum.",
      icon: <Landmark className="h-6 w-6 text-purple-600" />,
      color: "#A75ADB",
      role: "policy",
      contentType: "policy",
      resourceType: "tool"
    },
    {
      title: "Opportunity Zones",
      description: "Location-Based Incentive Hacking to unlock tax incentives + policy pilot collaboration.",
      icon: <Building2 className="h-6 w-6 text-red-600" />,
      color: "#D24726",
      role: "industry",
      contentType: "funding",
      resourceType: "guide"
    },
    {
      title: "Frugal Innovation",
      description: "Do More with Less using minimal infrastructure + open tooling for hyperlocal builds.",
      icon: <Puzzle className="h-6 w-6 text-indigo-600" />,
      color: "#5E2CA5",
      role: "admin",
      contentType: "innovation",
      resourceType: "guide"
    },
    {
      title: "Non-dilutive Grants",
      description: "Apply for SBIR, Horizon Europe, or other R&D funding pools.",
      icon: <FileText className="h-6 w-6 text-emerald-600" />,
      color: "#10B981",
      role: "admin",
      contentType: "funding",
      resourceType: "document"
    },
    {
      title: "Global Datasets",
      description: "Integrate open datasets from UNESCO, OECD, O*NET, LinkedIn Trends.",
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      color: "#0055E5",
      role: "teacher",
      contentType: "data",
      resourceType: "data"
    }
  ];
  
  const filteredSections = activeTab === "all" 
    ? knowledgeSections 
    : knowledgeSections.filter(section => section.role === activeTab);
  
  const tabButtons = [
    { id: "all", label: "All", icon: <BookOpen size={16} /> },
    { id: "student", label: "For Students", icon: <GraduationCap size={16} /> },
    { id: "teacher", label: "For Teachers", icon: <Lightbulb size={16} /> },
    { id: "policy", label: "For Policy", icon: <Landmark size={16} /> },
    { id: "industry", label: "For Industry", icon: <Briefcase size={16} /> },
    { id: "admin", label: "For Admins", icon: <BarChart3 size={16} /> }
  ];
  
  return (
    <div className="py-8">
      <ScrollAnimation type="fade" direction="up" className="mb-8">
        <div className="xp-window max-w-7xl mx-auto">
          <div className="xp-title-bar">
            <div className="flex items-center">
              <BookOpen size={14} />
              <span className="ml-2">HelixHub Knowledge Base</span>
            </div>
          </div>
          <div className="xp-window-content overflow-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Interactive Knowledge Base</h2>
            <p className="mb-8 text-gray-700">
              Explore resources and tools tailored for different stakeholders in the education ecosystem.
              Filter by audience to find relevant content for your role.
            </p>
            
            {/* Filter Tabs - Windows XP Style */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-300 pb-3">
              {tabButtons.map(tab => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-t-lg ${
                    activeTab === tab.id 
                      ? 'xp-button font-bold bg-[#D7E4F2] border-b-2 border-[#0055E5]' 
                      : 'xp-button'
                  }`}
                  whileHover={{ backgroundColor: "#E3E1D1" }}
                  whileTap={{ scale: 0.97 }}
                >
                  {tab.icon}
                  <span className="ml-2 text-sm">{tab.label}</span>
                </motion.button>
              ))}
            </div>
            
            {/* Knowledge Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSections.map((section, index) => (
                <ScrollAnimation 
                  key={section.title} 
                  delay={0.1 * index}
                  type="fade"
                  direction="up"
                >
                  <InsightCard 
                    title={section.title}
                    description={section.description}
                    icon={section.icon}
                    color={section.color}
                    role={section.role}
                    contentType={section.contentType}
                    actionUrl={section.actionUrl}
                    resourceType={section.resourceType}
                  />
                </ScrollAnimation>
              ))}
            </div>

            {/* Windows XP Help Tip */}
            <div className="mt-10 p-4 border border-dashed border-blue-300 bg-blue-50 rounded-lg flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border border-blue-300">
                <Lightbulb size={20} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-800">HelixHub Helper</h4>
                <p className="text-xs text-blue-700">
                  Did you know? You can click on each card to expand detailed information. 
                  Try filtering the content by your role to see tailored resources!
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default KnowledgeBase;
