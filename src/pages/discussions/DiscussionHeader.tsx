
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DiscussionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <Card>
        <CardHeader className="bg-gradient-to-r from-purple-700 to-purple-900 text-white">
          <CardTitle className="text-2xl md:text-3xl">Triple Helix Discussions</CardTitle>
          <p className="text-purple-100 mt-1">
            Collaborative conversations between academia, industry, and policymakers
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-gray-700">
            Share insights, provide feedback, and engage in discussions to bridge skill gaps and enhance curriculum alignment. 
            Filter by stakeholder group to find relevant conversations.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DiscussionHeader;
