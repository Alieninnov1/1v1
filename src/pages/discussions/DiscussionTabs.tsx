
import { RefreshCcw, MessageSquare, TrendingUp, Link, ArrowRightLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrendingTopicsTab from "./tabs/TrendingTopicsTab";
import FeedbackWallTab from "./tabs/FeedbackWallTab";
import LiveDataTab from "./tabs/LiveDataTab";
import MatchmakingTab from "./tabs/MatchmakingTab";

interface DiscussionTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export const DiscussionTabs = ({ activeTab, setActiveTab }: DiscussionTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="border-b border-gray-200 dark:border-gray-800">
        <TabsList className="bg-transparent h-12">
          <TabsTrigger 
            value="trending" 
            className={`h-12 px-6 text-sm ${activeTab === 'trending' ? 'border-b-2 border-helix-purple' : ''}`}
          >
            <TrendingUp size={16} className="mr-2" />
            Trending Topics
          </TabsTrigger>
          <TabsTrigger 
            value="feedback" 
            className={`h-12 px-6 text-sm ${activeTab === 'feedback' ? 'border-b-2 border-helix-purple' : ''}`}
          >
            <MessageSquare size={16} className="mr-2" />
            Feedback Wall
          </TabsTrigger>
          <TabsTrigger 
            value="livedata" 
            className={`h-12 px-6 text-sm ${activeTab === 'livedata' ? 'border-b-2 border-helix-purple' : ''}`}
          >
            <RefreshCcw size={16} className="mr-2" />
            Live Data
          </TabsTrigger>
          <TabsTrigger 
            value="matchmaking" 
            className={`h-12 px-6 text-sm ${activeTab === 'matchmaking' ? 'border-b-2 border-helix-purple' : ''}`}
          >
            <ArrowRightLeft size={16} className="mr-2" />
            Matchmaking
            <span className="ml-1.5 px-1.5 py-0.5 text-[10px] bg-green-100 text-green-800 rounded-full">NEW</span>
          </TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value="trending" className="mt-6">
        <TrendingTopicsTab />
      </TabsContent>
      
      <TabsContent value="feedback" className="mt-6">
        <FeedbackWallTab />
      </TabsContent>
      
      <TabsContent value="livedata" className="mt-6">
        <LiveDataTab />
      </TabsContent>

      <TabsContent value="matchmaking" className="mt-6">
        <MatchmakingTab />
      </TabsContent>
    </Tabs>
  );
};

export default DiscussionTabs;
