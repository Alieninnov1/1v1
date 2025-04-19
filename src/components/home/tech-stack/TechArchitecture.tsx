
import { Database, Cpu, Globe } from "lucide-react";
import ArchitectureCard from "./ArchitectureCard";
import HelixModelDemo from "@/components/3d/HelixModelDemo";

const TechArchitecture = () => {
  return (
    <div className="mt-12 space-y-12">
      <HelixModelDemo />
      
      <div className="bg-gray-800/30 p-6 rounded-xl border border-purple-500/20">
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
    </div>
  );
};

export default TechArchitecture;

