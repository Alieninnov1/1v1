
import Layout from "@/components/layout/Layout";
import DiscussionHeader from "./discussions/DiscussionHeader";
import DiscussionTabs from "./discussions/DiscussionTabs";

const Discussions = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <DiscussionHeader />
        <div className="mb-8">
          <DiscussionTabs />
        </div>
      </div>
    </Layout>
  );
};

export default Discussions;
