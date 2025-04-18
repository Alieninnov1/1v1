
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Code2, Server, Brush, Cpu, Database, Globe, ArrowRight } from "lucide-react";

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
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              HelixHub is built with modern technologies to ensure scalability, performance, and an exceptional user experience.
            </p>
          </motion.div>
        </div>

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

const StackItem = ({ title, description, color }: { title: string; description: string; color: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20 shadow-lg"
    >
      <h3 className={`text-lg font-bold ${color} mb-2`}>{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
};

const TechArchitecture = () => {
  return (
    <div className="mt-12 bg-gray-800/30 p-6 rounded-xl border border-purple-500/20">
      <h3 className="text-xl font-bold mb-4 text-center">Architecture Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ArchitectureCard 
          icon={<Database className="h-10 w-10 text-blue-400" />}
          title="Data Layer" 
          items={["Supabase PostgreSQL", "Redis Cache", "OpenAI Embeddings", "Real-time Subscriptions"]} 
        />
        <ArchitectureCard 
          icon={<Cpu className="h-10 w-10 text-purple-400" />}
          title="Application Layer" 
          items={["React Components", "TanStack Query", "React Context", "Framer Motion"]} 
        />
        <ArchitectureCard 
          icon={<Globe className="h-10 w-10 text-green-400" />}
          title="Deployment Layer" 
          items={["Vercel Edge Functions", "Cloudflare CDN", "Analytics", "CI/CD Pipeline"]} 
        />
      </div>
    </div>
  );
};

const ArchitectureCard = ({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center"
    >
      <div className="mb-4 bg-gray-900/60 p-3 rounded-full">
        {icon}
      </div>
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      <ul className="text-sm text-gray-300 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TechStack;
