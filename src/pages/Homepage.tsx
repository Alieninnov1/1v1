
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Building2, Briefcase, ChevronDown } from "lucide-react";
import TripleHelixAnimation from "@/components/animation/TripleHelixAnimation";
import ThreeDModel from "@/components/dashboard/ThreeDModel";

const Homepage = () => {
  const [showModel, setShowModel] = useState(false);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-16 pb-24 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-helix-purple/20 via-transparent to-transparent z-0"></div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center z-10 text-center max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-3 rounded-full mb-6 backdrop-blur-sm">
            <img 
              src="/lovable-uploads/261b8a7f-e6a4-4b35-b826-2641f23da6d7.png" 
              alt="HelixHub Logo" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            HelixHub
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Synchronizing <span className="text-blue-400">academia</span>,{" "} 
            <span className="text-indigo-400">industry</span>, and{" "} 
            <span className="text-purple-400">governance</span> through 
            real-time data and predictive feedback.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-lg text-lg"
              onClick={() => window.location.href = '/dashboard'}
            >
              Enter Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border border-purple-500/30 text-white hover:bg-purple-900/20 px-8 py-6 rounded-lg text-lg"
              onClick={() => setShowModel(prev => !prev)}
            >
              {showModel ? "Hide 3D Model" : "View 3D Model"}
            </Button>
          </div>
          
          {/* Triple helix icons */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 mt-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-600/20 flex items-center justify-center mb-3">
                <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
              </div>
              <p className="text-blue-300 font-medium">Academia</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-indigo-600/20 flex items-center justify-center mb-3">
                <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-indigo-400" />
              </div>
              <p className="text-indigo-300 font-medium">Industry</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-purple-600/20 flex items-center justify-center mb-3">
                <Building2 className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
              </div>
              <p className="text-purple-300 font-medium">Government</p>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
            onClick={() => {
              document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-purple-400 text-sm mb-2">Learn More</span>
            <ChevronDown className="text-purple-400 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>
      
      {/* 3D Model Section (conditionally rendered) */}
      {showModel && (
        <section className="py-16 bg-gradient-to-b from-[#151823] to-[#262d4a]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Interactive Helix Model
            </h2>
            <div className="max-w-4xl mx-auto">
              <ThreeDModel />
            </div>
            <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
              Interact with the 3D model to explore the relationships between academia, industry, and government in our triple helix framework.
            </p>
          </div>
        </section>
      )}
      
      {/* About Section */}
      <section id="about-section" className="py-16 md:py-24 bg-gradient-to-b from-[#1e2338] to-[#262d4a]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
              >
                About HelixHub
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6"
              >
                HelixHub is a next-gen civic alignment engine designed to synchronize education, industry, and governance using real-time data and predictive feedback.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6"
              >
                Built on the Triple Helix Model, it integrates SignalDAO logic for live decision impact, grant matching, and regional optimization.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button 
                  onClick={() => window.location.href = '/policy-sandbox'}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Explore Policy Sandbox
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <TripleHelixAnimation />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Capabilities */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#262d4a] to-[#151823]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Core Capabilities</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              HelixHub provides powerful tools to align education with industry needs while informing governmental policy decisions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/30"
              >
                <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Ready to Transform Your Region?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Join the HelixHub network and start aligning education with industry needs while optimizing governance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6"
                onClick={() => window.location.href = '/dashboard'}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border border-purple-500/30 text-white hover:bg-purple-900/20 text-lg px-8 py-6"
                onClick={() => window.location.href = '/discussions'}
              >
                Join Community
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Capabilities data
const capabilities = [
  {
    title: "Triple Feedback Loop",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>,
    description: "Real-time data flow between academia, industry, and government creating a continuous improvement cycle."
  },
  {
    title: "AI Curriculum Relevance",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>,
    description: "Automated analysis of industry needs to ensure educational curriculum remains relevant and forward-looking."
  },
  {
    title: "System Strain Index",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    description: "Real-time monitoring of ecological and social pressures to identify stress points before they become critical."
  },
  {
    title: "Regional Innovation Maps",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>,
    description: "Visualize skill distributions and opportunity zones across regions to optimize resource allocation."
  },
  {
    title: "SignalDAO Voting Simulators",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    description: "Model the potential impacts of policy decisions before implementation to prevent unintended consequences."
  },
  {
    title: "Grant Match Engine",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    description: "AI-powered funding recommendations to connect innovative initiatives with available grants and resources."
  }
];

export default Homepage;
