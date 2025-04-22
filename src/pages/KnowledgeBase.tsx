
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BookMarked, Lightbulb } from "lucide-react";
import KnowledgeStructure from "@/components/knowledge/KnowledgeStructure";
import KnowledgeBase from "@/components/knowledge/KnowledgeBase";

const KnowledgeBasePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 md:py-8 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8"
        >
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-900 text-white p-6">
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
                <BookMarked className="h-6 w-6" />
                <span>HelixHub Knowledge Base</span>
              </CardTitle>
              <CardDescription className="text-purple-100 text-balance">
                Comprehensive documentation of project objectives, stakeholders, design guidelines, and technical specifications
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4 text-pretty">
                This knowledge base provides a structured repository of information about the HelixHub project. 
                Use the tabs below to navigate between the structured knowledge database and the resource library.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3 mb-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Lightbulb size={18} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-800">Project Overview</h4>
                  <p className="text-xs text-blue-700">
                    HelixHub is a civic alignment engine designed to synchronize education, industry, and governance using 
                    real-time data and predictive feedback. Built on the Triple Helix Model, it integrates SignalDAO logic 
                    for live decision impact, grant matching, and regional optimization.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <div className="mb-8">
          <Tabs defaultValue="structured">
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="structured" className="flex-1">Structured Knowledge</TabsTrigger>
              <TabsTrigger value="resources" className="flex-1">Resource Library</TabsTrigger>
            </TabsList>
            
            <TabsContent value="structured" className="mt-0">
              <KnowledgeStructure />
            </TabsContent>
            
            <TabsContent value="resources" className="mt-0">
              <KnowledgeBase />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default KnowledgeBasePage;
