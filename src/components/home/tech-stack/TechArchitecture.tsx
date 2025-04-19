import { Database, Cpu, Globe, Layers, Server, Shield, LineChart } from "lucide-react";
import ArchitectureCard from "./ArchitectureCard";
import HelixModelDemo from "@/components/3d/HelixModelDemo";
import { motion } from "framer-motion";

const TechArchitecture = () => {
  return (
    <div className="mt-12 space-y-12">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-xl"></div>
        <HelixModelDemo />
      </div>
      
      <div className="bg-gray-800/30 p-6 rounded-xl border border-purple-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center relative z-10"
        >
          <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            Enterprise-Grade Architecture
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built on a scalable, resilient multi-tier architecture that handles real-time data processing
            and integrates with existing systems through standard APIs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <ArchitectureCard 
            icon={<Database className="h-10 w-10 text-blue-400" />}
            title="Data Layer" 
            items={[
              "Time-series database",
              "Graph relationships",
              "Vector embeddings", 
              "Real-time subscriptions"
            ]} 
          />
          <ArchitectureCard 
            icon={<Server className="h-10 w-10 text-green-400" />}
            title="API Layer" 
            items={[
              "GraphQL endpoints",
              "REST compatibility",
              "WebSockets",
              "Webhook triggers"
            ]} 
          />
          <ArchitectureCard 
            icon={<Cpu className="h-10 w-10 text-purple-400" />}
            title="Application Layer" 
            items={[
              "React components",
              "State management",
              "Real-time rendering",
              "Offline capabilities"
            ]} 
          />
          <ArchitectureCard 
            icon={<Layers className="h-10 w-10 text-amber-400" />}
            title="Integration Layer" 
            items={[
              "LMS connectors",
              "HR system APIs",
              "Government data feeds",
              "Legacy system bridges"
            ]} 
          />
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <ArchitectureCard 
            icon={<Shield className="h-10 w-10 text-red-400" />}
            title="Security Layer" 
            items={[
              "Role-based access",
              "Data encryption",
              "Audit logging",
              "Compliance controls"
            ]} 
          />
          <ArchitectureCard 
            icon={<LineChart className="h-10 w-10 text-indigo-400" />}
            title="Analytics Layer" 
            items={[
              "Real-time metrics",
              "Predictive models",
              "Custom reports",
              "Decision support"
            ]} 
          />
          <ArchitectureCard 
            icon={<Globe className="h-10 w-10 text-teal-400" />}
            title="Deployment Layer" 
            items={[
              "Multi-region hosting",
              "Edge computing",
              "Auto-scaling",
              "Disaster recovery"
            ]} 
          />
        </div>
      </div>
    </div>
  );
};

export default TechArchitecture;
