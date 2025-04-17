
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Database } from "lucide-react";

const DiscussionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-700 to-purple-900 text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-2xl md:text-3xl">Triple Helix Discussions</CardTitle>
              <p className="text-purple-100 mt-1">
                Collaborative conversations between academia, industry, and policymakers
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6 bg-gradient-to-r from-gray-50 to-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 border-l-4 border-purple-600 pl-3 py-1">
              <MessageSquare className="h-5 w-5 text-purple-600" />
              <p className="text-gray-700 text-sm">Share insights and provide feedback</p>
            </div>
            <div className="flex items-center gap-3 border-l-4 border-blue-600 pl-3 py-1">
              <Users className="h-5 w-5 text-blue-600" />
              <p className="text-gray-700 text-sm">Bridge skill gaps across stakeholders</p>
            </div>
            <div className="flex items-center gap-3 border-l-4 border-green-600 pl-3 py-1">
              <Database className="h-5 w-5 text-green-600" />
              <p className="text-gray-700 text-sm">Enhance curriculum alignment with data</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DiscussionHeader;
