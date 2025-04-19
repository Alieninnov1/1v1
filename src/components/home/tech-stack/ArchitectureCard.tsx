
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
      className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center relative overflow-hidden"
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/80 z-0"></div>
      
      {/* Card content */}
      <div className="relative z-10">
        <div className="mb-4 bg-gray-900/60 p-3 rounded-full border border-gray-700/50">
          {icon}
        </div>
        <h4 className="text-lg font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">{title}</h4>
        <ul className="text-sm space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center justify-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ArchitectureCard;
