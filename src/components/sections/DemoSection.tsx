
import { useState } from "react";
import XPDemoWindow from "@/components/demo/XPDemoWindow";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, LineChart, Blocks, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState<'curriculum' | 'metrics' | 'governance'>('curriculum');
  
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#151823] to-[#1a1d2d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="inline-block mb-3">
            <Badge variant="outline" className="border-purple-500/30 bg-purple-900/20 text-purple-300 px-3 py-1 text-xs">
              ENTERPRISE READY
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            HelixHub Platform In Action
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our live demo showcases how the Triple Helix Model synchronizes education, industry, and governance through real-time data and predictive feedback loops.
          </p>
        </motion.div>
        
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          <Button 
            onClick={() => setActiveDemo('curriculum')}
            variant={activeDemo === 'curriculum' ? "default" : "outline"}
            className={`rounded-full ${activeDemo === 'curriculum' ? 'bg-purple-700 hover:bg-purple-800' : 'border-purple-500/30 hover:border-purple-500/50'}`}
          >
            <Brain className="mr-2 h-4 w-4" /> AI Curriculum Engine
          </Button>
          <Button 
            onClick={() => setActiveDemo('metrics')}
            variant={activeDemo === 'metrics' ? "default" : "outline"}
            className={`rounded-full ${activeDemo === 'metrics' ? 'bg-blue-700 hover:bg-blue-800' : 'border-purple-500/30 hover:border-purple-500/50'}`}
          >
            <LineChart className="mr-2 h-4 w-4" /> System Strain Index
          </Button>
          <Button 
            onClick={() => setActiveDemo('governance')}
            variant={activeDemo === 'governance' ? "default" : "outline"}
            className={`rounded-full ${activeDemo === 'governance' ? 'bg-indigo-700 hover:bg-indigo-800' : 'border-purple-500/30 hover:border-purple-500/50'}`}
          >
            <Blocks className="mr-2 h-4 w-4" /> SignalDAO Voting
          </Button>
        </div>
        
        <XPDemoWindow demoType={activeDemo} />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black/40 backdrop-blur-sm border border-purple-500/20 p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="mb-4 h-12 w-12 rounded-full bg-purple-800/30 flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Academia Hub</h3>
            <p className="text-gray-300 mb-4">
              Real-time curriculum alignment with industry demands through predictive AI feedback loops.
            </p>
            <ul className="mb-4 text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                Skill relevance tracking
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                Course optimization engine
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                Student outcome predictions
              </li>
            </ul>
            <Link to="/academia">
              <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0 flex items-center">
                Explore Academia <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
          
          <Card className="bg-black/40 backdrop-blur-sm border border-blue-500/20 p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="mb-4 h-12 w-12 rounded-full bg-blue-800/30 flex items-center justify-center">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Industry Nexus</h3>
            <p className="text-gray-300 mb-4">
              Broadcast emerging skill needs and track workforce development with predictive analytics.
            </p>
            <ul className="mb-4 text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Real-time talent pipeline
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Workforce forecasting
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Training program ROI metrics
              </li>
            </ul>
            <Link to="/industry">
              <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0 flex items-center">
                Explore Industry <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
          
          <Card className="bg-black/40 backdrop-blur-sm border border-indigo-500/20 p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10">
            <div className="mb-4 h-12 w-12 rounded-full bg-indigo-800/30 flex items-center justify-center">
              <span className="text-2xl">🏛️</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Government Gateway</h3>
            <p className="text-gray-300 mb-4">
              Visualize policy impact in real-time and optimize public resource allocation with AI assistance.
            </p>
            <ul className="mb-4 text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                Policy outcome simulator
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                Grant ROI optimization
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                Regional performance tracking
              </li>
            </ul>
            <Link to="/government">
              <Button variant="link" className="text-indigo-400 hover:text-indigo-300 p-0 flex items-center">
                Explore Government <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/dashboard">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 py-6 px-8 rounded-xl transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-500/20">
              <Gauge className="mr-2 h-5 w-5" />
              Explore Full Enterprise Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
