
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import FeedbackCard from "./FeedbackCard";
import { MessageSquare, ThumbsUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeedbackItem {
  id: string;
  author: string;
  role: "student" | "teacher" | "policy" | "industry";
  message: string;
  timestamp: string;
  likes: number;
  comments: number;
  hasLiked?: boolean;
}

// Sample feedback data to simulate real-time activity
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

const newFeedbackMessages = [
  "The skills gap in advanced ML engineering is growing - our company plans to sponsor specialized bootcamps.",
  "Curriculum alignment with sustainability practices should be mandatory across all engineering disciplines.",
  "Regional analysis shows tech clusters forming around universities with flexible credit transfer systems.",
  "Students coming through the new data visualization track are excelling in our UX research department.",
  "New policy framework for microcredentials being evaluated. Seeking educational partners for pilot."
];

const RealTimeFeedbackWall = () => {
  const [feedback, setFeedback] = useState<FeedbackItem[]>(initialFeedback);
  const [newPostVisible, setNewPostVisible] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [filter, setFilter] = useState<"all" | "student" | "teacher" | "policy" | "industry">("all");

  // Simulate real-time feedback coming in
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

  const handleNewPost = () => {
    if (!newPostContent.trim()) {
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
      message: newPostContent,
      timestamp: "Just now",
      likes: 0,
      comments: 0
    };
    
    setFeedback(prev => [newPost, ...prev]);
    setNewPostContent("");
    setNewPostVisible(false);
    
    toast({
      title: "Feedback Posted",
      description: "Your feedback has been shared with the community",
    });
  };

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

  const filteredFeedback = filter === "all" 
    ? feedback 
    : feedback.filter(item => item.role === filter);

  return (
    <div className="xp-window w-full">
      <div className="xp-title-bar">
        <div className="flex items-center">
          <MessageSquare size={14} />
          <span className="ml-2">Live Feedback Wall</span>
        </div>
      </div>
      <div className="xp-window-content p-4">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant={filter === "all" ? "default" : "outline"} 
              onClick={() => setFilter("all")}
              className="text-xs"
            >
              All
            </Button>
            <Button 
              size="sm" 
              variant={filter === "student" ? "default" : "outline"} 
              onClick={() => setFilter("student")}
              className="text-xs"
            >
              Students
            </Button>
            <Button 
              size="sm" 
              variant={filter === "teacher" ? "default" : "outline"} 
              onClick={() => setFilter("teacher")}
              className="text-xs"
            >
              Academia
            </Button>
            <Button 
              size="sm" 
              variant={filter === "industry" ? "default" : "outline"} 
              onClick={() => setFilter("industry")}
              className="text-xs"
            >
              Industry
            </Button>
            <Button 
              size="sm" 
              variant={filter === "policy" ? "default" : "outline"} 
              onClick={() => setFilter("policy")}
              className="text-xs"
            >
              Policy
            </Button>
          </div>
          <Button 
            size="sm" 
            className="bg-[#92CD00] hover:bg-[#7DB600]"
            onClick={() => setNewPostVisible(!newPostVisible)}
          >
            + New Feedback
          </Button>
        </div>

        <AnimatePresence>
          {newPostVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4"
            >
              <div className="xp-window">
                <div className="xp-title-bar student">
                  <div className="flex items-center">
                    <User size={14} />
                    <span className="ml-2">New Feedback</span>
                  </div>
                </div>
                <div className="xp-window-content">
                  <textarea 
                    className="w-full border rounded p-2 mb-3 h-24"
                    placeholder="Share your thoughts, ideas or feedback..."
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                  />
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setNewPostVisible(false); 
                        setNewPostContent("");
                      }}
                    >
                      Cancel
                    </Button>
                    <Button size="sm" onClick={handleNewPost}>Post Feedback</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-4">
          <AnimatePresence>
            {filteredFeedback.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <FeedbackCard
                  author={item.author}
                  role={item.role}
                  message={item.message}
                  timestamp={item.timestamp}
                  onLike={() => handleLike(item.id)}
                  likes={item.likes}
                  comments={item.comments}
                  isLiked={item.hasLiked}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RealTimeFeedbackWall;
