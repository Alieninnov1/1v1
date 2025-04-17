
import { DataScraper } from "@/components/ui/data-scraper";
import { X } from "lucide-react";

interface DiscussionSidebarProps {
  onClose?: () => void;
}

const DiscussionSidebar = ({ onClose }: DiscussionSidebarProps) => {
  return (
    <div className="space-y-6">
      <div className="xp-window">
        <div className="xp-title-bar flex justify-between items-center">
          <span>Discussion Stats</span>
          {onClose && (
            <button 
              onClick={onClose}
              className="xp-window-button xp-close h-4 w-4 text-center flex items-center justify-center"
            >
              <X size={10} />
            </button>
          )}
        </div>
        <div className="xp-window-content p-4">
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Active users:</span>
              <span className="font-bold">248</span>
            </li>
            <li className="flex justify-between">
              <span>Posts today:</span>
              <span className="font-bold">47</span>
            </li>
            <li className="flex justify-between">
              <span>Industry participants:</span>
              <span className="font-bold">34</span>
            </li>
            <li className="flex justify-between">
              <span>Academia participants:</span>
              <span className="font-bold">92</span>
            </li>
            <li className="flex justify-between">
              <span>Government participants:</span>
              <span className="font-bold">16</span>
            </li>
          </ul>
        </div>
      </div>
      
      <DataScraper isCompact />
      
      <div className="xp-window">
        <div className="xp-title-bar">
          <span>Upcoming Roundtables</span>
        </div>
        <div className="xp-window-content p-4">
          <ul className="space-y-3 text-sm">
            <li className="border-b pb-2">
              <div className="font-semibold">AI Ethics Framework</div>
              <div className="text-xs text-gray-600">Apr 25, 2025 • 15 Participants</div>
            </li>
            <li className="border-b pb-2">
              <div className="font-semibold">Regional Skills Summit</div>
              <div className="text-xs text-gray-600">May 12, 2025 • 32 Participants</div>
            </li>
            <li>
              <div className="font-semibold">Policy Innovation Lab</div>
              <div className="text-xs text-gray-600">May 30, 2025 • 28 Participants</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DiscussionSidebar;
