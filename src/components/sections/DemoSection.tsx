
import { useState } from "react";
import XPDemoWindow from "@/components/demo/XPDemoWindow";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, LineChart, Blocks, Brain, LightbulbIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation, StaggerContainer } from "@/components/animation/ScrollAnimation";

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState<'curriculum' | 'metrics' | 'governance'>('curriculum');
  
  const features = [
    {
      icon: "🎓",
      title: "Academia Hub",
      description: "Real-time curriculum alignment with industry demands through predictive AI feedback loops.",
      features: ["Skill relevance tracking", "Course optimization engine", "Student outcome predictions"],
      link: "/academia",
      color: "purple"
    },
    {
      icon: "💼",
      title: "Industry Nexus",
      description: "Broadcast emerging skill needs and track workforce development with predictive analytics.",
      features: ["Real-time talent pipeline", "Workforce forecasting", "Training program ROI metrics"],
      link: "/industry",
      color: "blue"
    },
    {
      icon: "🏛️",
      title: "Government Gateway",
      description: "Visualize policy impact in real-time and optimize public resource allocation with AI assistance.",
      features: ["Policy outcome simulator", "Grant ROI optimization", "Regional performance tracking"],
      link: "/government",
      color: "indigo"
    }
  ];
  
  return (
    <section id="demo" className="py-20 px-4 bg-gradient-to-b from-[#0c101d] to-[#151823] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollAnimation type="fade" className="mb-12 text-center">
          <div className="inline-block mb-3">
            <Badge variant="outline" className="border-purple-500/30 bg-purple-900/20 text-purple-300 px-3 py-1 text-xs uppercase tracking-wide">
              Enterprise Ready
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            HelixHub Platform In Action
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our live demo showcases how the Triple Helix Model synchronizes education, industry, and governance
            through real-time data and predictive feedback loops.
          </p>
        </ScrollAnimation>
        
        <div className="mb-8 flex flex-wrap justify-center gap-3">
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

        <ScrollAnimation type="fade" className="mb-12">
          <XPDemoWindow demoType={activeDemo} />
        </ScrollAnimation>
        
        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" delayChildren={0.1} staggerChildren={0.15}>
          {features.map((feature, index) => (
            <ScrollAnimation key={index} type="slide" direction="up" className="h-full">
              <Card className="h-full bg-black/40 backdrop-blur-sm border border-purple-500/20 p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="mb-4 h-12 w-12 rounded-full bg-purple-800/30 flex items-center justify-center">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="mb-4 text-sm text-gray-400 space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={feature.link}>
                  <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0 flex items-center">
                    Explore {feature.title.split(' ')[0]} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </ScrollAnimation>
          ))}
        </StaggerContainer>
        
        <ScrollAnimation type="fade" className="mt-12 text-center">
          <Link to="/dashboard">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 py-6 px-8 rounded-xl transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-500/20">
              <Gauge className="mr-2 h-5 w-5" />
              Explore Full Enterprise Dashboard
            </Button>
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default DemoSection;
