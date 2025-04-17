
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { BookOpen } from "lucide-react";
import InsightCard from "@/components/dashboard/InsightCard";
import RoleFilter from "./RoleFilter";
import KnowledgeHelperTip from "./KnowledgeHelperTip";
import { knowledgeSections } from "./knowledgeSections";

const KnowledgeBase = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Filter sections based on active tab using memoization for performance
  const filteredSections = useMemo(() => 
    activeTab === "all" 
      ? knowledgeSections 
      : knowledgeSections.filter(section => section.role === activeTab),
    [activeTab]
  );
  
  // Simulate loading state to improve perceived performance
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeTab]);
  
  return (
    <div className="py-8 px-2 sm:px-4">
      <ScrollAnimation type="fade" direction="up" className="mb-8">
        <div className="xp-window max-w-7xl mx-auto">
          <div className="xp-title-bar">
            <div className="flex items-center">
              <BookOpen size={14} />
              <span className="ml-2">VisionNet Knowledge Base</span>
            </div>
          </div>
          <div className="xp-window-content overflow-auto p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Interactive Knowledge Base</h2>
            <p className="mb-6 sm:mb-8 text-gray-700 text-sm sm:text-base">
              Explore resources and tools tailored for different stakeholders in the education ecosystem.
              Filter by audience to find relevant content for your role.
            </p>
            
            <RoleFilter activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
                ))}
              </div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {filteredSections.map((section, index) => (
                  <ScrollAnimation 
                    key={section.title} 
                    delay={0.05 * index}
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
              </motion.div>
            )}

            <KnowledgeHelperTip />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default KnowledgeBase;
