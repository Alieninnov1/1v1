
import XPDemoWindow from "@/components/demo/XPDemoWindow";
import { motion } from "framer-motion";
import { ArrowRight, Box, Laptop, Network, Building, Globe, Heart, Braces } from "lucide-react";
import { useState } from "react";

const contextData = [
  {
    id: "education",
    title: "Education",
    icon: <Box className="text-blue-400" size={20} />,
    description: "Match students to mentors and projects based on mindset alignment and learning style"
  },
  {
    id: "startups",
    title: "Startups",
    icon: <Laptop className="text-green-400" size={20} />,
    description: "Pair co-founders and team members based on values, work rhythms, and complementary skills"
  },
  {
    id: "civic",
    title: "Civic Organizations",
    icon: <Building className="text-amber-400" size={20} />,
    description: "Reduce friction in community initiatives by pre-aligning participants' expectations"
  },
  {
    id: "global",
    title: "Climate & Global Initiatives",
    icon: <Globe className="text-teal-400" size={20} />,
    description: "Synchronize advocates across disciplines without tribal conflicts or partisan gridlock"
  },
  {
    id: "web3",
    title: "DAOs & Web3",
    icon: <Network className="text-purple-400" size={20} />,
    description: "Enable pre-collaboration trust loops in decentralized and distributed team environments"
  },
  {
    id: "wellness",
    title: "Mental Health & Wellness",
    icon: <Heart className="text-red-400" size={20} />,
    description: "Pair support seekers with guides whose approach and philosophy aligns with their needs"
  }
];

const integrationMethods = [
  {
    title: "Iframe Widget",
    icon: <Box size={16} />,
    description: "Drop into any platform with minimal code"
  },
  {
    title: "API Integration",
    icon: <Braces size={16} />,
    description: "Headless trust-as-a-service backend"
  },
  {
    title: "Hosted Instance",
    icon: <Globe size={16} />,
    description: "Dedicated VisionNet for your organization"
  }
];

const DemoSection = () => {
  const [selectedContext, setSelectedContext] = useState("education");

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#151823] to-[#262d4a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-block px-6 py-2 bg-[#0055E5]/20 backdrop-blur-sm border border-[#0055E5]/30 rounded-full mb-4">
            <span className="text-sm font-medium text-blue-300">Introducing VisionNet</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">Universal Trust Engine Demo</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience how VisionNet can plug into any community, organization, or platform to enable 
            semantic trust-matching and asynchronous onboarding before collaboration begins.
          </p>
        </motion.div>
        
        {/* Context Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-3 px-4"
        >
          <div className="bg-[#ECE9D8] rounded-lg p-2 border-2 border-[#919B9C] shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#0A246A] via-[#0A246A] to-[#A6CAF0] px-3 py-1 -mx-2 -mt-2 mb-2">
              <h3 className="text-white text-xs font-bold">Select Use Case Context</h3>
            </div>
            <div className="flex flex-wrap gap-1 p-1">
              {contextData.map(context => (
                <button
                  key={context.id}
                  className={`px-3 py-1.5 text-xs rounded-sm flex items-center gap-2 transition-colors
                    ${selectedContext === context.id 
                      ? 'bg-[#FFE8A6] border border-[#ACA899]' 
                      : 'hover:bg-[#F7F5ED] border border-transparent'}`}
                  onClick={() => setSelectedContext(context.id)}
                >
                  {context.icon}
                  <span className="font-medium">{context.title}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Context Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-[#ECE9D8] mx-auto max-w-3xl rounded-lg border-2 border-[#919B9C] shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#0A246A] via-[#0A246A] to-[#A6CAF0] px-3 py-1">
              <h3 className="text-white text-xs font-bold">Context Details</h3>
            </div>
            <div className="p-4 bg-gradient-to-b from-[#FFFFFF] to-[#ECE9D8]">
              {contextData.find(c => c.id === selectedContext) && (
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-gradient-to-b from-[#f0f0f0] to-[#e1e1e1] p-3 rounded-md border border-[#d1d1d1] shadow-inner">
                    {contextData.find(c => c.id === selectedContext)?.icon}
                  </div>
                  <div>
                    <h3 className="text-[#0A246A] text-lg font-bold">
                      {contextData.find(c => c.id === selectedContext)?.title}
                    </h3>
                    <p className="text-gray-700 mt-2">
                      {contextData.find(c => c.id === selectedContext)?.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Demo Window */}
        <XPDemoWindow />
        
        {/* Integration Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-[#ECE9D8] mx-auto max-w-4xl rounded-lg border-2 border-[#919B9C] shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#0A246A] via-[#0A246A] to-[#A6CAF0] px-3 py-1">
              <h3 className="text-white text-xs font-bold">Integration Methods</h3>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-b from-[#FFFFFF] to-[#ECE9D8]">
              {integrationMethods.map((method, index) => (
                <div 
                  key={index} 
                  className="p-3 bg-white border border-[#ACA899] rounded shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-[#ECE9D8] rounded-full flex items-center justify-center border border-[#ACA899]">
                      {method.icon}
                    </div>
                    <h4 className="font-bold text-sm">{method.title}</h4>
                  </div>
                  <p className="text-xs text-gray-700">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="bg-[#92CD00] hover:bg-[#7DB600] text-white py-3 px-6 rounded-md flex items-center gap-2 mx-auto">
            <span className="font-bold">Request Early Access to VisionNet</span>
            <ArrowRight size={18} />
          </button>
          
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
              <span className="text-gray-300 text-sm">Semantic Matching</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-400"></div>
              <span className="text-gray-300 text-sm">Trust Loop Protocol</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-purple-400"></div>
              <span className="text-gray-300 text-sm">Multi-Context Profiles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <span className="text-gray-300 text-sm">White-Label Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
