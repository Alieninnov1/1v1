
import { Database, Layers, Cloud, Box } from "lucide-react";
import ArchitectureCard from "./ArchitectureCard";
import HelixModelDemo from "@/components/3d/HelixModelDemo";
import { motion } from "framer-motion";

const TechArchitecture = () => {
  return (
    <div className="mt-12 space-y-12">
      {/* Windows XP Folder Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#ECE9D8] border-2 border-[#0055E5] rounded-lg overflow-hidden xp-window"
      >
        <div className="bg-gradient-to-r from-[#0A246A] to-[#A6CAF0] px-3 py-1 flex items-center">
          <Box className="h-5 w-5 text-white mr-2" />
          <h3 className="text-white text-sm font-bold">HelixHub - Interactive Demo</h3>
        </div>
        <div className="p-4">
          <HelixModelDemo />
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#ECE9D8] p-6 rounded-lg border-2 border-[#0055E5] xp-window"
      >
        <div className="bg-gradient-to-r from-[#0A246A] to-[#A6CAF0] -m-6 mb-6 px-3 py-1 flex items-center">
          <Box className="h-5 w-5 text-white mr-2" />
          <h3 className="text-white text-sm font-bold">System Architecture</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ArchitectureCard 
            icon={<Database className="h-10 w-10 text-blue-400" />}
            title="Data Layer" 
            items={[
              "Supabase PostgreSQL",
              "Redis Cache", 
              "OpenAI Embeddings",
              "Real-time Subscriptions"
            ]} 
          />
          <ArchitectureCard 
            icon={<Layers className="h-10 w-10 text-purple-400" />}
            title="Application Layer" 
            items={[
              "React Components",
              "TanStack Query",
              "React Context",
              "Framer Motion"
            ]} 
          />
          <ArchitectureCard 
            icon={<Cloud className="h-10 w-10 text-green-400" />}
            title="Deployment Layer" 
            items={[
              "Vercel Edge Functions",
              "Cloudflare CDN",
              "Analytics",
              "CI/CD Pipeline"
            ]} 
          />
        </div>
      </motion.div>
      
      {/* Windows XP Presentation Viewer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-[#ECE9D8] p-6 rounded-lg border-2 border-[#0055E5] xp-window"
      >
        <div className="bg-gradient-to-r from-[#0A246A] to-[#A6CAF0] -m-6 mb-6 px-3 py-1 flex items-center">
          <Box className="h-5 w-5 text-white mr-2" />
          <h3 className="text-white text-sm font-bold">HelixHub Pitch Deck & Demo Video</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 border border-gray-300 shadow-md rounded">
            <h4 className="font-bold text-lg mb-2">Pitch Deck</h4>
            <div className="aspect-video bg-gray-100 mb-3 flex items-center justify-center overflow-hidden">
              <img 
                src="https://placehold.co/800x450?text=HelixHub+Pitch+Deck" 
                alt="HelixHub Pitch Deck" 
                className="w-full h-auto"
              />
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">10 slides • Updated May 2025</p>
              <button className="xp-button">
                View Presentation
              </button>
            </div>
          </div>
          
          <div className="bg-white p-4 border border-gray-300 shadow-md rounded">
            <h4 className="font-bold text-lg mb-2">Demo Video</h4>
            <div className="aspect-video bg-gray-100 mb-3 flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <img 
                  src="https://placehold.co/800x450?text=HelixHub+Demo+Video" 
                  alt="HelixHub Demo Video Thumbnail" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">1:32 • Interactive Demo</p>
              <button className="xp-button">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechArchitecture;
