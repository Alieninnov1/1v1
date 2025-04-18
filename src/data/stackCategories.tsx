
import { Code2, Server, Brush } from "lucide-react";
import StackItem from "@/components/home/tech-stack/StackItem";

export const stackCategories = [
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
