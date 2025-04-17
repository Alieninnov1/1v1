
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
      <div className="border-b border-[#2d364c]/40 overflow-x-auto">
        <TabsList className="bg-transparent h-12 flex-nowrap">
          <TabsTrigger 
            value="trending" 
            className={`h-12 px-4 sm:px-6 text-sm whitespace-nowrap flex items-center justify-center ${activeTab === 'trending' ? 'eth-tab-active' : 'text-[#f7f8fc]/70'}`}
          >
            <TrendingUp size={16} className="mr-2" />
            Trending Topics
          </TabsTrigger>
          <TabsTrigger 
            value="feedback" 
            className={`h-12 px-4 sm:px-6 text-sm whitespace-nowrap flex items-center justify-center ${activeTab === 'feedback' ? 'eth-tab-active' : 'text-[#f7f8fc]/70'}`}
          >
            <MessageSquare size={16} className="mr-2" />
            Feedback Wall
          </TabsTrigger>
          <TabsTrigger 
            value="livedata" 
            className={`h-12 px-4 sm:px-6 text-sm whitespace-nowrap flex items-center justify-center ${activeTab === 'livedata' ? 'eth-tab-active' : 'text-[#f7f8fc]/70'}`}
          >
            <RefreshCcw size={16} className="mr-2" />
            Live Data
          </TabsTrigger>
          <TabsTrigger 
            value="matchmaking" 
            className={`h-12 px-4 sm:px-6 text-sm whitespace-nowrap flex items-center justify-center ${activeTab === 'matchmaking' ? 'eth-tab-active' : 'text-[#f7f8fc]/70'}`}
          >
            <ArrowRightLeft size={16} className="mr-2" />
            Matchmaking
            <span className="ml-1.5 px-1.5 py-0.5 text-[10px] bg-[#9b87f5]/20 text-[#9b87f5] rounded-full">NEW</span>
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
