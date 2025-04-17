
import { motion } from "framer-motion";
import { useState } from "react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { BookOpen } from "lucide-react";
import InsightCard from "@/components/dashboard/InsightCard";
import RoleFilter from "./RoleFilter";
import KnowledgeHelperTip from "./KnowledgeHelperTip";
import { knowledgeSections } from "./knowledgeSections";

const KnowledgeBase = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const filteredSections = activeTab === "all" 
    ? knowledgeSections 
    : knowledgeSections.filter(section => section.role === activeTab);
  
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
            
            <RoleFilter activeTab={activeTab} setActiveTab={setActiveTab} />
            
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

            <KnowledgeHelperTip />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default KnowledgeBase;
