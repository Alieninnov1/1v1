
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Radio, Zap } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface DataUpdate {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "policy" | "industry" | "academia";
}

const MOCK_UPDATES: DataUpdate[] = [
  { id: "update1", title: "New Policy Framework", message: "Federal guidelines for AI curriculum updated", time: "Just now", type: "policy" },
  { id: "update2", title: "Industry Demand Spike", message: "15% increase in XR developers needed", time: "2m ago", type: "industry" },
  { id: "update3", title: "Course Alignment", message: "Stanford updated ML curriculum based on feedback", time: "5m ago", type: "academia" },
  { id: "update4", title: "Regional Grant Opening", message: "New funding available for vocational training", time: "18m ago", type: "policy" },
  { id: "update5", title: "Skills Gap Alert", message: "Critical shortage in cybersecurity specialists", time: "25m ago", type: "industry" }
];

const LiveDataFeed = () => {
  const [updates, setUpdates] = useState<DataUpdate[]>(MOCK_UPDATES);
  const [newUpdate, setNewUpdate] = useState<boolean>(false);
  
  // Simulate real-time updates coming in
  useEffect(() => {
    const interval = setInterval(() => {
      const randomUpdate = {
        id: `update${Date.now()}`,
        title: ["Curriculum Change", "Industry Alert", "Policy Amendment", "Regional Update"][Math.floor(Math.random() * 4)],
        message: ["New data science requirements added", "Startup ecosystem requesting ML engineers", "Education funding priorities shifted", "Cross-sector collaboration initiative launched"][Math.floor(Math.random() * 4)],
        time: "Just now",
        type: ["policy", "industry", "academia"][Math.floor(Math.random() * 3)] as "policy" | "industry" | "academia"
      };
      
      setUpdates(prev => [randomUpdate, ...prev.slice(0, 4)]);
      setNewUpdate(true);
      
      setTimeout(() => setNewUpdate(false), 3000);
    }, 12000);
    
    return () => clearInterval(interval);
  }, []);
  
  const getTypeIcon = (type: DataUpdate["type"]) => {
    switch(type) {
      case "policy":
        return <Bell size={16} className="text-orange-500" />;
      case "industry":
        return <Zap size={16} className="text-blue-500" />;
      case "academia":
        return <Radio size={16} className="text-green-500" />;
    }
  };
  
  const handleUpdateClick = (update: DataUpdate) => {
    toast({
      title: update.title,
      description: update.message,
    });
  };
  
  return (
    <Card className="border shadow-sm bg-white dark:bg-gray-800">
      <CardHeader className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-2 px-4">
        <CardTitle className="text-sm flex items-center">
          <Radio className="mr-2 h-4 w-4" />
          Live Updates Feed
          {newUpdate && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="ml-2 w-2 h-2 bg-red-500 rounded-full"
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="space-y-2 max-h-60 overflow-auto">
          {updates.map((update, index) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`p-2 border-l-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                update.type === 'policy' ? 'border-orange-400' : 
                update.type === 'industry' ? 'border-blue-400' : 'border-green-400'
              }`}
              onClick={() => handleUpdateClick(update)}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  {getTypeIcon(update.type)}
                  <span className="font-medium ml-2 text-xs">{update.title}</span>
                </div>
                <span className="text-xs text-gray-500">{update.time}</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{update.message}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveDataFeed;
