
import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import ThreeDModel from "@/components/dashboard/ThreeDModel";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, BookOpen, HardDrive, Building2, User, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/utils/analytics";

const Landing = () => {
  useEffect(() => {
    trackEvent('pageView', { page: 'landing' });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-24 pb-32 px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#121420] via-[#1D1F35] to-[#262D4A] opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0yaC00djJoNHY0aDJ6TTYgMzR2LTRINHY0SDB2MmgzaDEyaDB2LTJINnpNNiA0VjBoLTJ2NEgwdjJoNHY0aDJ2LTRINFY0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-helix-purple text-white px-3 py-1 text-sm font-mono mb-4 border border-purple-400">
                NEXT-GEN CIVIC ALIGNMENT ENGINE
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-helix-purple200 via-helix-purple to-helix-purple700">
                  HelixHub
                </span> 
                <br />
                <span className="text-3xl md:text-5xl block mt-2">
                  Policy. Vision. Students First.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                Synchronizing education, industry, and governance using real-time data and predictive feedback.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-helix-purple hover:bg-helix-purple700 border-2 border-helix-purple300">
                  Get Started <ArrowRight className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-helix-purple text-white hover:bg-helix-purple/30">
                  View Dashboard <LineChart className="ml-2" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block h-[500px] w-full relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-helix-purple/20 via-blue-600/10 to-transparent rounded-lg"></div>
              <div className="h-full w-full bg-black/30 backdrop-blur-sm rounded-lg border-2 border-helix-purple/30 overflow-hidden shadow-[0_0_30px_rgba(94,44,165,0.3)]">
                <ThreeDModel />
              </div>
              <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-helix-purple/30 blur-3xl rounded-full"></div>
              <div className="absolute -top-5 -left-5 h-24 w-24 bg-blue-600/30 blur-3xl rounded-full"></div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-helix-purple w-10 h-10" />
        </motion.div>
      </section>

      {/* Triple Helix Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1A1F2C]/90 to-helix-purple/10 backdrop-blur-md">
        <div className="container mx-auto">
          <ScrollAnimation type="fade">
            <h2 className="text-4xl font-bold mb-16 text-center">The Triple Helix Model</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Academia", 
                icon: <BookOpen size={40} className="text-blue-400" />,
                description: "Curriculum alignment with real-world skills and industry needs.",
                color: "from-blue-500/20 to-blue-700/10",
                border: "border-blue-500/30"
              },
              { 
                title: "Industry", 
                icon: <HardDrive size={40} className="text-green-400" />,
                description: "Real-time skill gap analysis and workforce development insights.",
                color: "from-green-500/20 to-green-700/10",
                border: "border-green-500/30"
              },
              { 
                title: "Government", 
                icon: <Building2 size={40} className="text-purple-400" />,
                description: "Data-driven policy formation and resource allocation optimization.",
                color: "from-purple-500/20 to-purple-700/10",
                border: "border-purple-500/30"
              }
            ].map((item, index) => (
              <ScrollAnimation key={index} type="slide" direction="up" delay={index * 0.2}>
                <motion.div 
                  className={`p-8 rounded-lg bg-gradient-to-br ${item.color} backdrop-blur-md border ${item.border} h-full`}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                >
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#121420]">
        <div className="container mx-auto">
          <ScrollAnimation type="fade">
            <h2 className="text-4xl font-bold mb-4 text-center">Core Capabilities</h2>
            <p className="text-xl text-gray-400 text-center mb-16">Building a synchronized ecosystem for better outcomes</p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Triple Feedback Loop", description: "Academia ↔ Industry ↔ Government real-time synchronization." },
              { title: "AI Curriculum Engine", description: "Job-aligned learning paths based on market demands." },
              { title: "System Strain Index", description: "Ecological and social pressure monitoring for sustainable growth." },
              { title: "Regional Innovation Maps", description: "Real-time skill and opportunity overlays for targeted development." },
              { title: "SignalDAO Voting", description: "Simulate the impact of individual and collective decisions." },
              { title: "Grant Match Engine", description: "AI-powered matching of resources to high-impact initiatives." }
            ].map((feature, index) => (
              <ScrollAnimation key={index} type="scale" delay={index * 0.1}>
                <div className="p-6 bg-[#1D1F35] border-l-4 border-helix-purple rounded-sm">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-helix-purple/30 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <ScrollAnimation type="fade">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Deploy</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the next generation of civic alignment technology. Connect your data, gain insights, and make informed decisions.
              </p>
              <Link to="/dashboard">
                <Button size="lg" className="bg-helix-purple hover:bg-helix-purple700 border-2 border-helix-purple300">
                  Launch Dashboard <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Landing;
