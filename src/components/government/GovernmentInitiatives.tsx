
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Calendar, Users, Target, Clock, ArrowRight } from "lucide-react";

// Mock initiatives data
const initiatives = [
  {
    id: 1,
    title: "Future Skills Development Program",
    description: "A collaborative initiative to identify, develop, and integrate future-focused skills into educational programs and workforce training.",
    participants: 28,
    category: "education",
    progress: 65,
    deadline: "2025-06-15",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    title: "Industry 5.0 Readiness Framework",
    description: "Developing standards and best practices for industries transitioning to more advanced, sustainable, and human-centered production models.",
    participants: 42,
    category: "industry",
    progress: 40,
    deadline: "2025-08-30",
    image: "https://images.unsplash.com/photo-1581091226033-c6e0f4f37cd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    title: "Regional Innovation Ecosystem Mapping",
    description: "Creating comprehensive maps of regional innovation ecosystems to identify strengths, gaps, and collaboration opportunities.",
    participants: 35,
    category: "innovation",
    progress: 80,
    deadline: "2025-05-10",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    title: "Responsible AI Governance Framework",
    description: "Establishing guidelines and regulatory frameworks for the ethical development and deployment of AI across sectors.",
    participants: 53,
    category: "ethics",
    progress: 30,
    deadline: "2025-09-20",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
];

const GovernmentInitiatives = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredInitiatives = activeCategory === "all" 
    ? initiatives 
    : initiatives.filter(initiative => initiative.category === activeCategory);
    
  // Calculate days remaining for each initiative
  const calculateDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  
  return (
    <ScrollAnimation type="fade" direction="up">
      <div className="space-y-8">
        <div className="flex flex-wrap gap-2 mb-6">
          <Button 
            variant={activeCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("all")}
            className={activeCategory === "all" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
          >
            All Initiatives
          </Button>
          <Button 
            variant={activeCategory === "education" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("education")}
            className={activeCategory === "education" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
          >
            Education
          </Button>
          <Button 
            variant={activeCategory === "industry" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("industry")}
            className={activeCategory === "industry" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
          >
            Industry
          </Button>
          <Button 
            variant={activeCategory === "innovation" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("innovation")}
            className={activeCategory === "innovation" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
          >
            Innovation
          </Button>
          <Button 
            variant={activeCategory === "ethics" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("ethics")}
            className={activeCategory === "ethics" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
          >
            Ethics
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredInitiatives.map((initiative, index) => (
            <motion.div
              key={initiative.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-card">
                <div className="h-40 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white text-helix-purple">
                      {initiative.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle>{initiative.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">
                        {calculateDaysRemaining(initiative.deadline)} days remaining
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {initiative.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-500">{initiative.participants} participants</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-500">{initiative.progress}% complete</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Progress value={initiative.progress} className="h-2" />
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                  >
                    View Initiative Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button className="bg-helix-purple hover:bg-helix-purple/90">
            Propose New Initiative
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default GovernmentInitiatives;
