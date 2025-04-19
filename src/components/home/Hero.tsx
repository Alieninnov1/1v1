
import { motion } from "framer-motion";
import HelixModelDemo from "@/components/3d/HelixModelDemo";
import { useFadeAnimation } from "@/hooks/animations";

const Hero = () => {
  const titleAnimation = useFadeAnimation();
  const contentAnimation = useFadeAnimation(0.2);
  const modelAnimation = useFadeAnimation(0.4);

  return (
    <section className="bg-[#0f1221] py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1 
              {...titleAnimation}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-satoshi"
            >
              Synchronizing Innovation Networks
            </motion.h1>
            <motion.p 
              {...contentAnimation}
              className="mt-6 text-xl text-gray-300 max-w-2xl lg:mx-0 mx-auto leading-relaxed"
            >
              HelixHub creates dynamic ecosystems where education, workforce, and policy collaborate to drive innovation through real-time data and predictive analytics.
            </motion.p>
          </div>

          <motion.div 
            {...modelAnimation}
            className="relative"
          >
            <div className="aspect-square w-full max-w-2xl mx-auto">
              <HelixModelDemo />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
