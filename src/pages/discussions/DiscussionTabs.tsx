
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FeedbackWallTab from "./tabs/FeedbackWallTab";
import TrendingTopicsTab from "./tabs/TrendingTopicsTab";
import LiveDataTab from "./tabs/LiveDataTab";

const DiscussionTabs = () => {
  const [activeTab, setActiveTab] = useState("feedback");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="mb-4 bg-gray-50 p-1 rounded-lg">
        <TabsTrigger value="feedback" className="text-base px-6 py-2">
          Feedback Wall
        </TabsTrigger>
        <TabsTrigger value="topics" className="text-base px-6 py-2">
          Trending Topics
        </TabsTrigger>
        <TabsTrigger value="data" className="text-base px-6 py-2">
          Live Data
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="feedback">
        <FeedbackWallTab />
      </TabsContent>
      
      <TabsContent value="topics">
        <TrendingTopicsTab />
      </TabsContent>
      
      <TabsContent value="data">
        <LiveDataTab />
      </TabsContent>
    </Tabs>
  );
};

export default DiscussionTabs;
