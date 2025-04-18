
import { Database, Layers, Cloud, Box, Network, Lock, GitBranch } from "lucide-react";
import ArchitectureCard from "./ArchitectureCard";
import HelixModelDemo from "@/components/3d/HelixModelDemo";
import { motion } from "framer-motion";

const TechArchitecture = () => {
  return (
    <div className="mt-12 space-y-12">
      {/* Windows XP Folder Header - VisionNet Demo */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#ECE9D8] border-2 border-[#0055E5] rounded-lg overflow-hidden xp-window"
      >
        <div className="bg-gradient-to-r from-[#0A246A] to-[#A6CAF0] px-3 py-1 flex items-center">
          <Box className="h-5 w-5 text-white mr-2" />
          <h3 className="text-white text-sm font-bold">VisionNet: Universal Trust Engine - Interactive Demo</h3>
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
          <h3 className="text-white text-sm font-bold">VisionNet System Architecture</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ArchitectureCard 
            icon={<Database className="h-10 w-10 text-blue-400" />}
            title="Trust Engine Core" 
            items={[
              "Semantic Vector Analysis",
              "FAISS/Chroma Integration", 
              "Multi-dimensional Trust Score",
              "Async Trust Loop Protocol"
            ]} 
            isUniversal={true}
            deploymentType="Self-hosted or Cloud API"
          />
          <ArchitectureCard 
            icon={<Network className="h-10 w-10 text-purple-400" />}
            title="Universal Plugin Layer" 
            items={[
              "React Widget Components",
              "Iframe Integration",
              "RESTful API Interface",
              "Multi-tenant Architecture"
            ]} 
            isUniversal={true}
            deploymentType="Embeddable in any platform"
          />
          <ArchitectureCard 
            icon={<Lock className="h-10 w-10 text-green-400" />}
            title="Security & Governance" 
            items={[
              "Role-based Access Control",
              "Context Separation",
              "Data Privacy Management",
              "Compliance Dashboard"
            ]} 
            deploymentType="Administrative Controls"
          />
        </div>
      </motion.div>
      
      {/* Windows XP Presentation Viewer - Updated for VisionNet */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-[#ECE9D8] p-6 rounded-lg border-2 border-[#0055E5] xp-window"
      >
        <div className="bg-gradient-to-r from-[#0A246A] to-[#A6CAF0] -m-6 mb-6 px-3 py-1 flex items-center">
          <Box className="h-5 w-5 text-white mr-2" />
          <h3 className="text-white text-sm font-bold">VisionNet Pitch Deck & Demo Video</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 border border-gray-300 shadow-md rounded">
            <h4 className="font-bold text-lg mb-2">VisionNet Pitch Deck</h4>
            <div className="aspect-video bg-gray-100 mb-3 flex items-center justify-center overflow-hidden">
              <img 
                src="https://placehold.co/800x450?text=VisionNet+Universal+Trust+Engine" 
                alt="VisionNet Pitch Deck" 
                className="w-full h-auto"
              />
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">12 slides • Updated May 2025</p>
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
                  src="https://placehold.co/800x450?text=VisionNet+Demo+Video" 
                  alt="VisionNet Demo Video Thumbnail" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">2:15 • Trust Engine Demo</p>
              <button className="xp-button">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Universal Plugin Integration */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-[#ECE9D8] p-6 rounded-lg border-2 border-[#0055E5] xp-window"
      >
        <div className="bg-gradient-to-r from-[#0A246A] to-[#A6CAF0] -m-6 mb-6 px-3 py-1 flex items-center">
          <GitBranch className="h-5 w-5 text-white mr-2" />
          <h3 className="text-white text-sm font-bold">Integration Methods</h3>
        </div>
        
        <div className="bg-white rounded border border-gray-300 p-4 mb-6">
          <h4 className="font-bold mb-4">Embed VisionNet in Any Platform</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-dashed border-gray-400 p-4 bg-gray-50 rounded overflow-auto">
              <h5 className="font-medium text-sm mb-2">Iframe Embed Code</h5>
              <pre className="bg-[#F6F6F6] p-3 text-xs text-gray-800 rounded font-mono">
                {`<iframe
  src="https://visionnet.app/embed?context=education"
  width="100%" 
  height="500px"
  style="border: 1px solid #ccc; border-radius: 4px;"
  allow="camera; microphone"
></iframe>`}
              </pre>
            </div>
            
            <div className="border border-dashed border-gray-400 p-4 bg-gray-50 rounded overflow-auto">
              <h5 className="font-medium text-sm mb-2">API Integration</h5>
              <pre className="bg-[#F6F6F6] p-3 text-xs text-gray-800 rounded font-mono">
                {`const visionnet = require('visionnet-client');

const trustEngine = visionnet.initialize({
  apiKey: 'YOUR_API_KEY',
  context: 'startups'
});

// Get trust match score
const score = await trustEngine.matchProfiles(
  profileA, profileB
);`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Available for all platforms and frameworks</p>
          <button className="xp-button flex items-center gap-1">
            <span className="text-xs">Get Integration Guide</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TechArchitecture;
