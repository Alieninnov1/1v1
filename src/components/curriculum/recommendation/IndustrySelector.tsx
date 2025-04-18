
import { trackEvent } from "@/utils/analytics";

interface Industry {
  id: string;
  name: string;
  icon: string;
}

const industries: Industry[] = [
  { id: "tech", name: "Tech & Software", icon: "💻" },
  { id: "healthcare", name: "Healthcare", icon: "🏥" },
  { id: "finance", name: "Finance", icon: "💰" },
  { id: "manufacturing", name: "Manufacturing", icon: "🏭" }
];

interface IndustrySelectorProps {
  selectedIndustry: string;
  setSelectedIndustry: (industry: string) => void;
}

export const IndustrySelector = ({ selectedIndustry, setSelectedIndustry }: IndustrySelectorProps) => {
  return (
    <div className="space-y-3">
      {industries.map(industry => (
        <div 
          key={industry.id}
          className={`
            p-3 rounded-lg cursor-pointer transition-all border
            ${selectedIndustry === industry.id ? 
              'bg-purple-900/30 border-purple-500' : 
              'bg-gray-700/30 border-gray-700 hover:bg-gray-700/50'}
          `}
          onClick={() => {
            setSelectedIndustry(industry.id);
            trackEvent('modelInteraction', { action: 'selectIndustry', industry: industry.id });
          }}
        >
          <div className="flex items-center">
            <div className="text-xl mr-3">{industry.icon}</div>
            <div className="font-medium">{industry.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
