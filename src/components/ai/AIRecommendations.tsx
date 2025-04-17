
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  ThumbsUp,
  ThumbsDown,
  BarChart3,
  BookOpen,
  Laptop,
  Share2,
  RefreshCcw,
  CheckCircle2,
  XCircle,
} from "lucide-react";

// Mock curriculum recommendations based on labor trends
const recommendations = [
  {
    id: 1,
    title: "Data Visualization for Non-Technical Professionals",
    description: "A comprehensive curriculum focused on helping professionals understand and create data visualizations without requiring programming skills.",
    skillGap: 72,
    trendingUp: true,
    marketDemand: "High",
    relevantIndustries: ["Technology", "Finance", "Healthcare", "Marketing"],
    implementationLevel: "Intermediate",
    duration: "8 weeks",
  },
  {
    id: 2,
    title: "Applied Machine Learning for Healthcare",
    description: "Specialized curriculum teaching healthcare professionals to leverage ML for diagnosis, treatment planning, and patient care optimization.",
    skillGap: 85,
    trendingUp: true,
    marketDemand: "Very High",
    relevantIndustries: ["Healthcare", "Biotech", "Research"],
    implementationLevel: "Advanced",
    duration: "12 weeks",
  },
  {
    id: 3,
    title: "Cybersecurity Fundamentals for ALL Employees",
    description: "Essential security practices that all employees should understand regardless of their role to protect organizational assets.",
    skillGap: 68,
    trendingUp: true,
    marketDemand: "High",
    relevantIndustries: ["All Industries"],
    implementationLevel: "Beginner",
    duration: "4 weeks",
  }
];

const AIRecommendations = () => {
  const [feedback, setFeedback] = useState<Record<number, 'positive' | 'negative' | null>>({});
  const [loading, setLoading] = useState(false);

  const handleFeedback = (id: number, type: 'positive' | 'negative') => {
    setFeedback({
      ...feedback,
      [id]: type,
    });
  };

  const handleRefresh = () => {
    setLoading(true);
    // Simulate API call to get new recommendations
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="shadow-card rounded-xl border-none overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-helix-purple to-helix-purple700 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Brain className="h-6 w-6 mr-2" />
            <CardTitle className="text-xl font-satoshi">AI Curriculum Recommendations</CardTitle>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-white border-white hover:bg-white/20 button-hover"
            onClick={handleRefresh}
            disabled={loading}
          >
            <RefreshCcw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Analyzing Trends...' : 'Refresh Recommendations'}
          </Button>
        </div>
        <p className="text-white/80 mt-2">
          AI-powered curriculum suggestions based on labor market trends and skill gap analysis.
        </p>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-6">
          {recommendations.map((rec) => (
            <motion.div 
              key={rec.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: rec.id * 0.1 }}
              className="rounded-lg border p-5 animate-scale-in card-hover"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="font-semibold text-lg">{rec.title}</h3>
                    <Badge variant="outline" className="ml-2 bg-helix-purple100 text-helix-purple border-helix-purple">
                      {rec.marketDemand} Demand
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {rec.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <BarChart3 className="h-4 w-4 text-helix-purple" />
                    <span className="text-sm font-medium">{rec.skillGap}% Gap</span>
                  </div>
                  {rec.trendingUp && (
                    <Badge variant="secondary" className="mt-1">Trending ↑</Badge>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm">Level: {rec.implementationLevel}</span>
                </div>
                <div className="flex items-center">
                  <Laptop className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm">Duration: {rec.duration}</span>
                </div>
                <div className="flex items-center">
                  <Share2 className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm">Industries: {rec.relevantIndustries.length > 1 ? `${rec.relevantIndustries.length} sectors` : rec.relevantIndustries[0]}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                  {feedback[rec.id] === 'positive' && (
                    <span className="text-xs text-green-600 flex items-center">
                      <CheckCircle2 className="h-3 w-3 mr-1" /> Feedback recorded
                    </span>
                  )}
                  {feedback[rec.id] === 'negative' && (
                    <span className="text-xs text-red-600 flex items-center">
                      <XCircle className="h-3 w-3 mr-1" /> Feedback recorded
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleFeedback(rec.id, 'positive')}
                    className={feedback[rec.id] === 'positive' ? 'text-green-600' : ''}
                  >
                    <ThumbsUp className="h-4 w-4 mr-1" /> Helpful
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleFeedback(rec.id, 'negative')}
                    className={feedback[rec.id] === 'negative' ? 'text-red-600' : ''}
                  >
                    <ThumbsDown className="h-4 w-4 mr-1" /> Not Helpful
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIRecommendations;
