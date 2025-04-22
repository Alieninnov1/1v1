
import { motion } from "framer-motion";
import { features } from "./feature/featuresData";
import FeaturesHeader from "./feature/FeaturesHeader";
import FeatureCard from "./feature/FeatureCard";
import { ScrollAnimation, StaggerContainer } from "@/components/animation/ScrollAnimation";

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#151823] to-[#1a1d2d] pointer-events-none"></div>
      
      {/* Animated light orbs */}
      <motion.div 
        animate={{
          x: [-10, 10, -10],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"
      />
      
      <motion.div 
        animate={{
          x: [10, -10, 10],
          y: [10, -10, 10],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation type="fade" className="mb-16">
          <FeaturesHeader />
        </ScrollAnimation>
        
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          delayChildren={0.2} 
          staggerChildren={0.15}
        >
          {features.map((feature, index) => (
            <ScrollAnimation key={index} type="fade" direction="up" className="h-full">
              <FeatureCard
                index={index}
                {...feature}
              />
            </ScrollAnimation>
          ))}
        </StaggerContainer>
        
        <ScrollAnimation type="fade" className="mt-16 text-center">
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/dashboard" 
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white border-2 border-purple-500/30 hover:border-purple-500/70 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              View All Features
            </a>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Features;
