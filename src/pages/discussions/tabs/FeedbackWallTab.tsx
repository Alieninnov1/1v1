
import RealTimeFeedbackWall from "@/components/feedback/RealTimeFeedbackWall";
import DiscussionSidebar from "../DiscussionSidebar";

const FeedbackWallTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <RealTimeFeedbackWall />
      </div>
      <div className="md:col-span-1">
        <DiscussionSidebar />
      </div>
    </div>
  );
};

export default FeedbackWallTab;
