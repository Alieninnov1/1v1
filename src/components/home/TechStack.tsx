
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TechStackHeader from "./tech-stack/TechStackHeader";
import TechArchitecture from "./tech-stack/TechArchitecture";
import { motion } from "framer-motion";
import { stackCategories } from "@/data/stackCategories";

const TechStack = () => {
  return (
    <section className="py-16 bg-gray-900/60 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <TechStackHeader />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                {stackCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    {category.icon}
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {stackCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="px-4">
                {category.content}
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <TechArchitecture />

        <div className="text-center mt-12">
          <Button className="bg-purple-600 hover:bg-purple-700">
            Learn More About Our Tech <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
