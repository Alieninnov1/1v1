
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import KnowledgeBase from "@/components/knowledge/KnowledgeBase";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Knowledge = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  // Simulate content loading to improve perceived performance
  useState(() => {
    setTimeout(() => setIsPageLoaded(true), 100);
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Card>
            <CardHeader className="bg-gradient-to-r from-purple-700 to-purple-900 text-white">
              <CardTitle className="text-2xl md:text-3xl">VisionNet Knowledge Hub</CardTitle>
              <CardDescription className="text-purple-100">
                Your gateway to connecting academia, industry, and policy insights
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700">
                Explore our comprehensive knowledge base to discover resources, tools, and insights that bridge the gap between education, industry, and government. Filter by role to find content tailored to your specific needs.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        
        <KnowledgeBase />
      </div>
    </Layout>
  );
};

export default Knowledge;
