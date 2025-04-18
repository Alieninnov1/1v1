import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Building2, Briefcase } from "lucide-react";
const Hero = () => {
  return <section className="bg-gradient-to-br from-white to-helix-purple50 dark:from-gray-900 dark:to-helix-purple900 py-16 sm:py-20 md:py-28 bg-indigo-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero text */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white font-satoshi">
              Uniting <span className="text-helix-purple">Academia</span>, <span className="text-helix-purple">Industry</span>, and <span className="text-helix-purple">Government</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl lg:mx-0 mx-auto">
              HelixHub creates a dynamic ecosystem where education, workforce, and policy collaborate to bridge skill gaps and drive innovation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="button-hover">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="button-hover">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="flex justify-center">
            <div className="relative">
              {/* Central hub */}
              <div className="h-48 w-48 flex items-center justify-center rounded-full bg-helix-purple shadow-lg text-white text-2xl font-bold font-satoshi">
                HelixHub
              </div>
              
              {/* Academia node */}
              <motion.div initial={{
              x: -20,
              opacity: 0
            }} animate={{
              x: 0,
              opacity: 1
            }} transition={{
              delay: 0.4,
              duration: 0.6
            }} className="absolute -left-16 -top-10 flex items-center justify-center h-24 w-24 rounded-full border-2 border-helix-purple shadow-md bg-blue-400">
                <div className="text-center">
                  <BookOpen className="h-8 w-8 mx-auto text-helix-purple" />
                  <p className="mt-1 text-sm font-medium">Academia</p>
                </div>
              </motion.div>
              
              {/* Industry node */}
              <motion.div initial={{
              x: 20,
              opacity: 0
            }} animate={{
              x: 0,
              opacity: 1
            }} transition={{
              delay: 0.6,
              duration: 0.6
            }} className="absolute -right-16 -top-10 flex items-center justify-center h-24 w-24 rounded-full border-2 border-helix-purple shadow-md bg-indigo-400">
                <div className="text-center">
                  <Briefcase className="h-8 w-8 mx-auto text-helix-purple" />
                  <p className="mt-1 text-sm font-medium">Industry</p>
                </div>
              </motion.div>
              
              {/* Government node */}
              <motion.div initial={{
              y: 20,
              opacity: 0
            }} animate={{
              y: 0,
              opacity: 1
            }} transition={{
              delay: 0.8,
              duration: 0.6
            }} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center h-24 w-24 rounded-full border-2 border-helix-purple shadow-md bg-indigo-800">
                <div className="text-center">
                  <Building2 className="h-8 w-8 mx-auto text-helix-purple" />
                  <p className="mt-1 text-sm font-medium">Government</p>
                </div>
              </motion.div>

              {/* Connection lines */}
              <svg className="absolute top-0 left-0 w-full h-full" style={{
              zIndex: -1
            }}>
                <line x1="24" y1="24" x2="124" y2="124" stroke="#5E2CA5" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="224" y1="24" x2="124" y2="124" stroke="#5E2CA5" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="124" y1="224" x2="124" y2="124" stroke="#5E2CA5" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;