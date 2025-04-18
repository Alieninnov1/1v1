
import { motion } from "framer-motion";
import { Brain, Database, Gauge, Laptop } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const XPDemoWindow = () => {
  const [strain, setStrain] = useState(7.3);
  const [placement, setPlacement] = useState(68);
  const { toast } = useToast();
  
  const handleOptimize = () => {
    setStrain(2.8);
    setPlacement(94);
    toast({
      title: "System Optimized",
      description: "Curriculum alignment complete. Placement rates improved!"
    });
  };

  return (
    <div className="xp-window max-w-4xl mx-auto">
      <div className="xp-title-bar bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-between p-2">
        <div className="flex items-center">
          <Laptop className="h-4 w-4 text-blue-100 mr-2" />
          <span className="text-white text-sm">HelixHub Explorer</span>
        </div>
      </div>

      <div className="xp-window-content bg-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4 border border-blue-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Gauge className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="font-bold">System Strain</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">{strain}/10</div>
            <div className="text-sm text-gray-600">Current system pressure index</div>
          </Card>

          <Card className="p-4 border border-green-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Database className="h-5 w-5 text-green-500 mr-2" />
              <h3 className="font-bold">Placement Rate</h3>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">{placement}%</div>
            <div className="text-sm text-gray-600">Graduate employment success</div>
          </Card>
        </div>

        <motion.div 
          className="mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-blue-200"
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-center mb-4">
            <Brain className="h-6 w-6 text-purple-500 mr-2" />
            <h2 className="text-xl font-bold">AI Curriculum Guide</h2>
          </div>
          
          <ul className="space-y-2 mb-4">
            <li className="flex items-center text-sm">
              <span className="h-2 w-2 bg-green-400 rounded-full mr-2" />
              Add Python for Data Science (6-week module)
            </li>
            <li className="flex items-center text-sm">
              <span className="h-2 w-2 bg-blue-400 rounded-full mr-2" />
              Integrate Cloud ML Operations
            </li>
            <li className="flex items-center text-sm">
              <span className="h-2 w-2 bg-purple-400 rounded-full mr-2" />
              Launch Industry Capstone Projects
            </li>
          </ul>

          <Button 
            onClick={handleOptimize}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Brain className="mr-2 h-4 w-4" />
            Optimize Curriculum
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default XPDemoWindow;
