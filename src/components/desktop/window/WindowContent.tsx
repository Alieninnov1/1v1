
import Hero from "@/components/home/Hero";
import DemoSection from "@/components/sections/DemoSection";
import TripleHelixSection from "@/components/sections/TripleHelixSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import { motion } from "framer-motion";

const WindowContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="xp-window-content overflow-auto scrollbar-hidden bg-[#0c101d] text-white"
    >
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FeaturesSection />
      </motion.div>
      
      <DemoSection />
      <TripleHelixSection />
      <CurriculumSection />
      <TechStackSection />
      <CallToActionSection />
    </motion.div>
  );
};

export default WindowContent;
