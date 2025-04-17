
import { Lightbulb } from "lucide-react";

const KnowledgeHelperTip = () => {
  return (
    <div className="mt-10 p-4 border border-dashed border-blue-300 bg-blue-50 rounded-lg flex items-start gap-3">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border border-blue-300">
        <Lightbulb size={20} className="text-blue-600" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-blue-800">HelixHub Helper</h4>
        <p className="text-xs text-blue-700">
          Did you know? You can click on each card to expand detailed information. 
          Try filtering the content by your role to see tailored resources!
        </p>
      </div>
    </div>
  );
};

export default KnowledgeHelperTip;
