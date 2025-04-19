
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isMobile = useIsMobile();

  return (
    <section className="bg-gradient-to-br from-[#1A1F2C] to-helix-purple/10 border-t border-purple-900/20 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className={`text-2xl ${isMobile ? "text-3xl" : "sm:text-4xl"} font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 font-satoshi mb-4 sm:mb-6`}>
            Join the Innovation Network
          </h2>
          <p className={`${isMobile ? "text-lg" : "text-xl"} max-w-2xl mx-auto mb-6 sm:mb-10 text-gray-400`}>
            Connect with a growing ecosystem of institutions, industries, and policymakers shaping the future of collaborative innovation.
          </p>
          <div className="inline-block">
            <a 
              href="/dashboard" 
              className={`inline-flex items-center ${isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'} font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg transform hover:scale-105`}
            >
              Explore Platform
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
