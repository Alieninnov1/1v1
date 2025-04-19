
import { motion } from "framer-motion";
import HelixModelDemo from "@/components/3d/HelixModelDemo";
import { useFadeAnimation } from "@/hooks/animations";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const titleAnimation = useFadeAnimation();
  const contentAnimation = useFadeAnimation(0.2);
  const modelAnimation = useFadeAnimation(0.4);
  const isMobile = useIsMobile();

  return (
    <section className="bg-[#0f1221] py-12 sm:py-16 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1 
              {...titleAnimation}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-satoshi leading-tight"
            >
              Synchronizing Innovation Networks
            </motion.h1>
            <motion.p 
              {...contentAnimation}
              className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              HelixHub creates dynamic ecosystems where education, workforce, and policy collaborate to drive innovation through real-time data and predictive analytics.
            </motion.p>
            
            {isMobile ? null : (
              <motion.div 
                {...contentAnimation}
                className="mt-6 sm:mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <a 
                  href="#features" 
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Explore Features
                </a>
                <a 
                  href="#demo" 
                  className="px-6 py-3 bg-transparent border border-purple-500/30 text-white rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  View Demo
                </a>
              </motion.div>
            )}
          </div>

          <motion.div 
            {...modelAnimation}
            className="relative order-first lg:order-last"
          >
            <div className="aspect-square w-full max-w-md mx-auto">
              <HelixModelDemo />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle overlay gradient */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0f1221] to-transparent"></div>
    </section>
  );
};

export default Hero;
