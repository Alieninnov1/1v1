
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ArchitectureCardProps {
  icon: ReactNode;
  title: string;
  items: string[];
  isUniversal?: boolean;
  deploymentType?: string;
}

const ArchitectureCard = ({ 
  icon, 
  title, 
  items, 
  isUniversal = false,
  deploymentType
}: ArchitectureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 85, 229, 0.1), 0 8px 10px -6px rgba(0, 85, 229, 0.1)" }}
      className="bg-white relative overflow-hidden rounded border-2 border-[#919B9C] shadow-md"
    >
      {isUniversal && (
        <div className="absolute top-0 right-0">
          <div className="bg-[#1E90FF] px-2 py-0.5 text-[10px] text-white font-bold transform rotate-0 origin-top-right">
            UNIVERSAL
          </div>
        </div>
      )}
      
      <div className="bg-gradient-to-b from-[#FFFFFF] to-[#ECE9D8] p-4">
        <div className="mb-4 flex items-center">
          <div className="mr-4 bg-gradient-to-b from-[#f0f0f0] to-[#e1e1e1] p-3 rounded-md border border-[#d1d1d1] shadow-inner">
            {icon}
          </div>
          <h3 className="font-bold text-lg text-[#0A246A]">{title}</h3>
        </div>
        
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <div className="min-w-4 h-4 mr-2 mt-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L12 6M12 6H8M12 6V10" stroke="#0A246A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        
        {deploymentType && (
          <div className="mt-4 bg-[#F0F0F0] border border-[#D0D0D0] rounded p-2">
            <div className="text-xs font-medium text-[#0A246A]">Deployment Type:</div>
            <div className="text-xs text-gray-700">{deploymentType}</div>
          </div>
        )}
      </div>
      
      {/* Windows XP style bottom bar */}
      <div className="bg-[#ECE9D8] border-t border-[#ACA899] px-4 py-2 text-right">
        <button className="bg-gradient-to-b from-[#FFFFFF] to-[#ECE9D8] border border-[#ACA899] text-xs px-3 py-1 rounded hover:from-[#FFE7A2] hover:to-[#FED17E] transition-colors flex items-center gap-1">
          <span>Learn More</span>
          <ExternalLink size={10} />
        </button>
      </div>
    </motion.div>
  );
};

export default ArchitectureCard;
