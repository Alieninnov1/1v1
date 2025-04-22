
import { motion } from "framer-motion";
import { MessageSquare, Users, Database, ArrowRight } from "lucide-react";

const DiscussionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="rounded-xl overflow-hidden shadow-lg border border-purple-500/20">
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-full">
              <MessageSquare className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-0 text-white">
                Triple Helix Discussions
              </h1>
              <p className="text-purple-100 mt-1 text-lg">
                Collaborative conversations between academia, industry, and policymakers
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-6 pb-4 px-6 bg-white dark:bg-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 border-l-4 border-purple-600 pl-3 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-r">
              <MessageSquare className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Share insights and provide feedback
              </p>
            </div>
            <div className="flex items-center gap-3 border-l-4 border-blue-600 pl-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-r">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Bridge skill gaps across stakeholders
              </p>
            </div>
            <div className="flex items-center gap-3 border-l-4 border-green-600 pl-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-r">
              <Database className="h-5 w-5 text-green-600 dark:text-green-400" />
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Enhance curriculum with real-time data
              </p>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium">
              View research paper <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DiscussionHeader;
