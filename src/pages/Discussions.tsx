
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import DiscussionHeader from "./discussions/DiscussionHeader";
import DiscussionTabs from "./discussions/DiscussionTabs";

const Discussions = () => {
  const [activeTab, setActiveTab] = useState("trending");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <DiscussionHeader />
        <div className="mb-8">
          <DiscussionTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </Layout>
  );
};

export default Discussions;
