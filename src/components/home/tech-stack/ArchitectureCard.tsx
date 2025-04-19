
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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center"
    >
      <div className="mb-4 bg-gray-900/60 p-3 rounded-full">
        {icon}
      </div>
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      <ul className="text-sm text-gray-300 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ArchitectureCard;
