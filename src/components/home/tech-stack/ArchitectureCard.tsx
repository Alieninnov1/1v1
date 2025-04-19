
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ArchitectureCardProps {
  icon: ReactNode;
  title: string;
  items: string[];
}

const ArchitectureCard = ({ icon, title, items }: ArchitectureCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1)" }}
      transition={{ duration: 0.2 }}
      className="bg-gray-800/60 rounded-xl border border-gray-700 flex flex-col items-start p-6 relative overflow-hidden group"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/80 z-0"></div>
      
      {/* Animated background glow */}
      <div className="absolute -inset-x-2 -inset-y-2 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mb-4 bg-gray-900/60 p-3 rounded-lg border border-gray-700/50 inline-flex">
          {icon}
        </div>
        
        <h4 className="text-lg font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
          {title}
        </h4>
        
        <ul className="space-y-2 w-full">
          {items.map((item, index) => (
            <li key={index} className="flex items-center text-left">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
              <span className="text-gray-300 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ArchitectureCard;
