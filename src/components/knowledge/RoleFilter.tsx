
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Lightbulb, Landmark, BarChart3, Briefcase } from "lucide-react";

interface RoleFilterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const RoleFilter = ({ activeTab, setActiveTab }: RoleFilterProps) => {
  const tabButtons = [
    { id: "all", label: "All", icon: <BookOpen size={16} /> },
    { id: "student", label: "For Students", icon: <GraduationCap size={16} /> },
    { id: "teacher", label: "For Teachers", icon: <Lightbulb size={16} /> },
    { id: "policy", label: "For Policy", icon: <Landmark size={16} /> },
    { id: "industry", label: "For Industry", icon: <Briefcase size={16} /> },
    { id: "admin", label: "For Admins", icon: <BarChart3 size={16} /> }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-300 pb-3">
      {tabButtons.map(tab => (
        <motion.button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center px-4 py-2 rounded-t-lg ${
            activeTab === tab.id 
              ? 'xp-button font-bold bg-[#D7E4F2] border-b-2 border-[#0055E5]' 
              : 'xp-button'
          }`}
          whileHover={{ backgroundColor: "#E3E1D1" }}
          whileTap={{ scale: 0.97 }}
        >
          {tab.icon}
          <span className="ml-2 text-sm">{tab.label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default RoleFilter;
