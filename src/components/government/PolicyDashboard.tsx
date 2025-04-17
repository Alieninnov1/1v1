
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, ThumbsUp, ThumbsDown, MessageSquare, AlertCircle, CheckCircle } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { useNavigate } from "react-router-dom";

// Mock policy data
const policies = [
  {
    id: 1,
    title: "Digital Skills Integration Framework",
    description: "A comprehensive framework to integrate digital skills across all educational levels and workforce development programs.",
    status: "active",
    sector: "education",
    endorsements: 347,
    comments: 52,
    lastUpdated: "2025-03-14",
  },
  {
    id: 2,
    title: "Industry-Academia Partnership Initiative",
    description: "Setting standards for industry collaborations with educational institutions, including internships, research partnerships, and curriculum advisory.",
    status: "draft",
    sector: "industry",
    endorsements: 218,
    comments: 37,
    lastUpdated: "2025-03-28",
  },
  {
    id: 3,
    title: "Regional Innovation Hub Funding",
    description: "Guidelines for establishing and funding regional innovation hubs that connect educational institutions, local businesses, and government agencies.",
    status: "active",
    sector: "innovation",
    endorsements: 485,
    comments: 93,
    lastUpdated: "2025-03-05",
  },
  {
    id: 4,
    title: "AI Ethics in Education Policy",
    description: "Standards for the ethical use of AI in educational settings, including transparency requirements, privacy protections, and accessibility guidelines.",
    status: "review",
    sector: "ethics",
    endorsements: 278,
    comments: 124,
    lastUpdated: "2025-03-22",
  },
];

const PolicyDashboard = () => {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  
  const filteredPolicies = filter === "all" 
    ? policies 
    : policies.filter(policy => policy.sector === filter);
  
  return (
    <ScrollAnimation type="fade" direction="up" className="space-y-8">
      <div className="flex flex-wrap gap-2 mb-6">
        <Button 
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
          className={filter === "all" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
        >
          All Policies
        </Button>
        <Button 
          variant={filter === "education" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("education")}
          className={filter === "education" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
        >
          Education
        </Button>
        <Button 
          variant={filter === "industry" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("industry")}
          className={filter === "industry" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
        >
          Industry
        </Button>
        <Button 
          variant={filter === "innovation" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("innovation")}
          className={filter === "innovation" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
        >
          Innovation
        </Button>
        <Button 
          variant={filter === "ethics" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("ethics")}
          className={filter === "ethics" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
        >
          Ethics
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPolicies.map((policy, index) => (
          <motion.div
            key={policy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-none shadow-card">
              <CardHeader className="flex flex-row items-start justify-between pb-2">
                <div>
                  <CardTitle className="text-xl">{policy.title}</CardTitle>
                  <CardDescription className="mt-1">Updated {policy.lastUpdated}</CardDescription>
                </div>
                <Badge className={`
                  ${policy.status === 'active' ? 'bg-green-100 text-green-800' : ''} 
                  ${policy.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${policy.status === 'review' ? 'bg-blue-100 text-blue-800' : ''}
                `}>
                  {policy.status === 'active' && <CheckCircle className="h-3 w-3 mr-1" />}
                  {policy.status === 'draft' && <FileText className="h-3 w-3 mr-1" />}
                  {policy.status === 'review' && <AlertCircle className="h-3 w-3 mr-1" />}
                  {policy.status.charAt(0).toUpperCase() + policy.status.slice(1)}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{policy.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <span className="flex items-center text-gray-500 text-sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {policy.endorsements}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {policy.comments}
                    </span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-helix-purple hover:text-helix-purple/90 hover:bg-helix-purple/10 p-0 h-auto"
                    onClick={() => navigate(`/policy-sandbox?policy=${policy.id}`)}
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button 
          onClick={() => navigate("/policy-sandbox")} 
          className="bg-helix-purple hover:bg-helix-purple/90"
        >
          Create New Policy Proposal
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </ScrollAnimation>
  );
};

export default PolicyDashboard;
