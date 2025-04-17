
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { FeedbackItem } from "../types";

const newFeedbackMessages = [
  "The skills gap in advanced ML engineering is growing - our company plans to sponsor specialized bootcamps.",
  "Curriculum alignment with sustainability practices should be mandatory across all engineering disciplines.",
  "Regional analysis shows tech clusters forming around universities with flexible credit transfer systems.",
  "Students coming through the new data visualization track are excelling in our UX research department.",
  "New policy framework for microcredentials being evaluated. Seeking educational partners for pilot."
];

const initialFeedback: FeedbackItem[] = [
  {
    id: "feed1",
    author: "Dr. Morgan Chen",
    role: "teacher",
    message: "The AI curriculum recommendations are excellent, but we need more cross-disciplinary integration between data science and ethics courses.",
    timestamp: "2 hours ago",
    likes: 18,
    comments: 5
  },
  {
    id: "feed2", 
    author: "TechVision Corp",
    role: "industry",
    message: "Our latest hiring shows graduates need stronger practical ML deployment skills. Theoretical knowledge is solid but application is lacking.",
    timestamp: "3 hours ago",
    likes: 24,
    comments: 7
  },
  {
    id: "feed3",
    author: "Policy Innovation Office",
    role: "policy",
    message: "New initiative launching next quarter to fund universities implementing AI ethics guidelines in their computer science programs.",
    timestamp: "5 hours ago",
    likes: 32,
    comments: 12
  },
  {
    id: "feed4",
    author: "Alex Winters",
    role: "student",
    message: "Just completed the new XR Development pathway. Amazing content but struggled to find internships that matched the specific skills taught.",
    timestamp: "6 hours ago",
    likes: 15,
    comments: 3
  }
];

export const useFeedbackWall = () => {
  const [feedback, setFeedback] = useState<FeedbackItem[]>(initialFeedback);
  const [filter, setFilter] = useState<"all" | "student" | "teacher" | "policy" | "industry">("all");

  useEffect(() => {
    const interval = setInterval(() => {
      const roles: ("student" | "teacher" | "policy" | "industry")[] = ["student", "teacher", "policy", "industry"];
      const authors = ["Emily Johnson", "TechFuture Inc.", "Education Ministry", "Prof. David Lee", "Maria Rodriguez", "Alex Smith", "Innovation Hub", "Policy Lab"];
      
      const newFeedback: FeedbackItem = {
        id: `feed${Date.now()}`,
        author: authors[Math.floor(Math.random() * authors.length)],
        role: roles[Math.floor(Math.random() * roles.length)],
        message: newFeedbackMessages[Math.floor(Math.random() * newFeedbackMessages.length)],
        timestamp: "Just now",
        likes: Math.floor(Math.random() * 10),
        comments: Math.floor(Math.random() * 5)
      };
      
      setFeedback(prev => [newFeedback, ...prev.slice(0, 5)]);
      
      toast({
        title: "New Feedback",
        description: `${newFeedback.author} just posted feedback`,
      });
    }, 45000);
    
    return () => clearInterval(interval);
  }, []);

  const handleLike = (id: string) => {
    setFeedback(prev => prev.map(item => 
      item.id === id 
        ? { 
            ...item, 
            likes: item.hasLiked ? item.likes - 1 : item.likes + 1, 
            hasLiked: !item.hasLiked 
          }
        : item
    ));
  };

  const handleNewPost = (content: string) => {
    if (!content.trim()) {
      toast({
        title: "Cannot post empty feedback",
        description: "Please enter some content for your feedback",
        variant: "destructive"
      });
      return;
    }
    
    const newPost: FeedbackItem = {
      id: `feed${Date.now()}`,
      author: "You (Demo User)",
      role: "student",
      message: content,
      timestamp: "Just now",
      likes: 0,
      comments: 0
    };
    
    setFeedback(prev => [newPost, ...prev]);
    
    toast({
      title: "Feedback Posted",
      description: "Your feedback has been shared with the community",
    });

    return true;
  };

  const filteredFeedback = filter === "all" 
    ? feedback 
    : feedback.filter(item => item.role === filter);

  return {
    feedback: filteredFeedback,
    filter,
    setFilter,
    handleLike,
    handleNewPost
  };
};
