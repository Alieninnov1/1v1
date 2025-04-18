
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Code2, Server, Brush, ArrowRight } from "lucide-react";
import TechStackHeader from "./tech-stack/TechStackHeader";
import StackItem from "./tech-stack/StackItem";
import TechArchitecture from "./tech-stack/TechArchitecture";
import { motion } from "framer-motion";

const TechStack = () => {
  const stackCategories = [
    {
      id: "frontend",
      label: "Frontend",
      icon: <Code2 className="h-4 w-4" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StackItem 
            title="React.js" 
            description="Component-based UI library for building interactive interfaces"
            color="text-blue-500"
          />
          <StackItem 
            title="TailwindCSS" 
            description="Utility-first CSS framework for rapid UI development"
            color="text-cyan-500"
          />
          <StackItem 
            title="Framer Motion" 
            description="Animation library for React with fluid transitions"
            color="text-purple-500"
          />
          <StackItem 
            title="React Three Fiber" 
            description="React renderer for Three.js, powering 3D visualizations"
            color="text-emerald-500"
          />
        </div>
      )
    },
    {
      id: "backend",
      label: "Backend",
      icon: <Server className="h-4 w-4" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StackItem 
            title="Supabase" 
            description="Open source Firebase alternative with real-time capabilities"
            color="text-green-500"
          />
          <StackItem 
            title="OpenAI API" 
            description="Powers AI curriculum recommendations and data analysis"
            color="text-pink-500"
          />
          <StackItem 
            title="Vercel" 
            description="Serverless deployment platform with edge functions"
            color="text-gray-500"
          />
          <StackItem 
            title="TanStack Query" 
            description="Data fetching library for efficient API integration"
            color="text-red-500"
          />
        </div>
      )
    },
    {
      id: "design",
      label: "Design",
      icon: <Brush className="h-4 w-4" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StackItem 
            title="Shadcn UI" 
            description="Beautifully designed components built with Radix UI and Tailwind"
            color="text-indigo-500"
          />
          <StackItem 
            title="Lucide Icons" 
            description="Beautiful & consistent icon set with over 1000 icons"
            color="text-yellow-500"
          />
          <StackItem 
            title="Recharts" 
            description="Composable charting library for data visualization"
            color="text-blue-400"
          />
          <StackItem 
            title="Neubrutalism Design" 
            description="Bold, direct design system with playful components"
            color="text-orange-500"
          />
        </div>
      )
    },
  ];

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
