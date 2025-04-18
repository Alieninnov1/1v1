
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Database, Sparkles, BookOpen } from "lucide-react";
import { useState } from "react";

const feedbackData = [
  "No one's listening to us.",
  "My teacher left without saying goodbye.",
  "The funding priorities shift every quarter, we can't plan.",
  "We need more stability in the curriculum.",
  "Industry partnerships are inconsistent."
];

const SignalVault = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="my-10"
    >
      <Card className="p-4 bg-black/50 backdrop-blur-md border-0 shadow-2xl overflow-hidden relative">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 via-blue-900/5 to-indigo-900/10 z-0">
          <motion.div
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
                "radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
                "radial-gradient(circle at 30% 70%, rgba(147, 51, 234, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
                "radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              ]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <Database size={18} className="text-purple-400 mr-2" />
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
              Signal Vault: Governance Memory
            </h2>
            <motion.div
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 3
              }}
              className="ml-2"
            >
              <Sparkles size={16} className="text-yellow-400" />
            </motion.div>
          </div>
          
          <div className="space-y-4">
            {feedbackData.map((quote, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + idx * 0.2 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-3 bg-black/30 backdrop-blur-sm rounded-md border border-indigo-500/20 shadow-lg text-sm font-medium text-indigo-100 transition-all duration-300 ${hoveredIndex === idx ? 'border-indigo-500/40 bg-black/40' : ''}`}
              >
                <div className="flex justify-between items-center">
                  <span>{quote}</span>
                  <motion.div
                    animate={hoveredIndex === idx ? { rotate: 360 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <BookOpen size={14} className={`ml-2 ${hoveredIndex === idx ? 'text-purple-400' : 'text-indigo-500/30'}`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default SignalVault;
