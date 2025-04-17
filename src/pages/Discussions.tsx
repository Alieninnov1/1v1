
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import FeedbackCard, { FeedbackPostProps } from "@/components/feedback/FeedbackCard";
import FeedbackForm from "@/components/feedback/FeedbackForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Briefcase,
  Building2,
  SlidersHorizontal,
  Search,
  TrendingUp,
} from "lucide-react";

// Mock data for feedback posts
const mockPosts: FeedbackPostProps[] = [
  {
    id: 1,
    author: {
      name: "Dr. Alex Johnson",
      avatar: "",
      organization: "State University",
      sector: "academia"
    },
    date: "2 hours ago",
    title: "Integrating AI Ethics into Computer Science Curriculum",
    content: "There's a growing need to incorporate AI ethics into our computer science programs. Based on industry feedback, our graduates lack awareness of ethical implications in AI development. I'm proposing a new module that addresses algorithmic bias, privacy concerns, and the societal impact of AI systems.",
    likes: 42,
    comments: 12,
    tags: ["AI Ethics", "Curriculum Development", "Computer Science"]
  },
  {
    id: 2,
    author: {
      name: "Sarah Williams",
      avatar: "",
      organization: "TechInnovate Inc.",
      sector: "industry"
    },
    date: "1 day ago",
    title: "Critical Cloud Skills Missing in Recent Graduates",
    content: "Our company has been struggling to find entry-level engineers with adequate cloud computing knowledge. Specifically, we need graduates familiar with containerization, microservices architecture, and serverless computing. Universities should prioritize these topics in their cloud computing courses.",
    likes: 35,
    comments: 8,
    tags: ["Cloud Computing", "Skills Gap", "Hiring Challenges"]
  },
  {
    id: 3,
    author: {
      name: "Michael Chen",
      avatar: "",
      organization: "Department of Labor",
      sector: "government"
    },
    date: "3 days ago",
    title: "Proposed Framework for Public-Private Training Programs",
    content: "We're developing a new framework for public-private partnerships in workforce development. This would allow companies to collaborate with community colleges on specialized training programs with partial government funding. Looking for feedback on implementation challenges from both academic institutions and industry partners.",
    likes: 67,
    comments: 23,
    tags: ["Public-Private Partnership", "Workforce Development", "Policy"]
  }
];

const Discussions = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showForm, setShowForm] = useState(false);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-satoshi">
                Discussions & Feedback
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Share ideas and provide feedback on curriculum, skills, and policy proposals
              </p>
            </div>
            
            <Button 
              onClick={() => setShowForm(!showForm)}
              className="button-hover"
            >
              {showForm ? "Hide Form" : "Start New Discussion"}
            </Button>
          </div>
          
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FeedbackForm />
            </motion.div>
          )}
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="hidden sm:inline">All Posts</span>
                </TabsTrigger>
                <TabsTrigger value="academia" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Academia</span>
                </TabsTrigger>
                <TabsTrigger value="industry" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">Industry</span>
                </TabsTrigger>
                <TabsTrigger value="government" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Government</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6 space-y-6">
                {mockPosts.map((post) => (
                  <FeedbackCard key={post.id} post={post} />
                ))}
              </TabsContent>
              
              <TabsContent value="academia" className="mt-6 space-y-6">
                {mockPosts
                  .filter((post) => post.author.sector === "academia")
                  .map((post) => (
                    <FeedbackCard key={post.id} post={post} />
                  ))
                }
              </TabsContent>
              
              <TabsContent value="industry" className="mt-6 space-y-6">
                {mockPosts
                  .filter((post) => post.author.sector === "industry")
                  .map((post) => (
                    <FeedbackCard key={post.id} post={post} />
                  ))
                }
              </TabsContent>
              
              <TabsContent value="government" className="mt-6 space-y-6">
                {mockPosts
                  .filter((post) => post.author.sector === "government")
                  .map((post) => (
                    <FeedbackCard key={post.id} post={post} />
                  ))
                }
              </TabsContent>
            </Tabs>
            
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="Search discussions..." 
                  className="pl-9 w-full md:w-[250px]" 
                />
              </div>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Discussions;
