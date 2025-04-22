
import { motion } from "framer-motion";
import HelixModelDemo from "@/components/3d/HelixModelDemo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/animation/ScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[90vh] py-12 sm:py-16 md:py-24 lg:py-28 flex items-center overflow-hidden">
      {/* Optimized background for better performance */}
      <div className="absolute inset-0 bg-[#0c101d]">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-transparent to-[#0c101d]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ScrollAnimation type="fade" direction="up" className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-satoshi leading-tight">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                Synchronizing Innovation Networks
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              HelixHub creates dynamic ecosystems where education, workforce, and policy collaborate to drive innovation through real-time data and predictive analytics.
            </p>
            
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <a href="#features">
                  Explore Features
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="px-6 py-3 bg-transparent border border-purple-500/30 text-white rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <a href="/dashboard">
                  View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </ScrollAnimation>

          {/* Optimized 3D model rendering for crisp display */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-first lg:order-last"
          >
            <div className="aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 blur-3xl"></div>
              <div className="transform-gpu will-change-transform">
                <HelixModelDemo />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simplified scrolling indicator with better performance */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="h-12 w-6 rounded-full border-2 border-purple-500/30 flex items-start justify-center p-1">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-purple-400"
            />
          </div>
          <p className="text-purple-400/70 text-xs mt-2">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
