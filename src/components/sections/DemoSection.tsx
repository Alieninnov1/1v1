
import XPDemoWindow from "@/components/demo/XPDemoWindow";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DemoSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            Experience HelixHub in Action
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our interactive demo showcasing how the Triple Helix Model connects education, industry, and governance in real-time.
          </p>
        </motion.div>
        
        <XPDemoWindow />
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black/40 backdrop-blur-sm border border-purple-500/20 p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-purple-800/30 flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Academia Hub</h3>
            <p className="text-gray-300 mb-4">
              Access curriculum alignment tools and see real-time industry feedback.
            </p>
            <Link to="/academia">
              <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0 flex items-center">
                Explore Academia <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
          
          <Card className="bg-black/40 backdrop-blur-sm border border-purple-500/20 p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-blue-800/30 flex items-center justify-center">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Industry Nexus</h3>
            <p className="text-gray-300 mb-4">
              Broadcast skill needs and track workforce development metrics.
            </p>
            <Link to="/industry">
              <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0 flex items-center">
                Explore Industry <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
          
          <Card className="bg-black/40 backdrop-blur-sm border border-purple-500/20 p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-indigo-800/30 flex items-center justify-center">
              <span className="text-2xl">🏛️</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Government Gateway</h3>
            <p className="text-gray-300 mb-4">
              Visualize policy impact and optimize grant distribution in real-time.
            </p>
            <Link to="/government">
              <Button variant="link" className="text-indigo-400 hover:text-indigo-300 p-0 flex items-center">
                Explore Government <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/dashboard">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              Explore Full Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
