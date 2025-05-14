
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isMobile = useIsMobile();

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] to-[#262d4a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        {/* Purple light elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        
        {/* Animated particles */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/4 left-1/5 w-2 h-2 bg-purple-400 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-indigo-400 rounded-full"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className={`text-3xl ${isMobile ? "" : "sm:text-4xl lg:text-5xl"} font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 font-satoshi mb-6`}>
            Join the HelixHub Network
          </h2>
          <p className={`${isMobile ? "text-lg" : "text-xl"} mb-8 sm:mb-10 text-gray-300 leading-relaxed`}>
            Connect with the Triple Helix ecosystem of institutions, industries, and policymakers 
            working together to drive innovation. Use real-time data and predictive analytics to make 
            better decisions and create meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className={`w-full sm:w-auto inline-flex items-center ${isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'} font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg transform hover:scale-105`}
              asChild
            >
              <a href="/dashboard">
                Explore Platform <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline"
              className={`w-full sm:w-auto inline-flex items-center ${isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'} font-medium text-white border-purple-500/30 hover:bg-purple-500/10 rounded-lg transition-all duration-300`}
              asChild
            >
              <a href="/discussions">
                Join Discussion
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
