
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CallToAction from "@/components/home/CallToAction";
import TechStack from "@/components/home/TechStack";
import CurriculumAIDemo from "@/components/curriculum/CurriculumAIDemo";
import DemoSection from "@/components/sections/DemoSection";
import TripleHelixSection from "@/components/sections/TripleHelixSection";

const WindowContent = () => {
  return (
    <div className="xp-window-content overflow-auto scrollbar-hidden bg-[#0c101d] text-white">
      <Hero />
      <DemoSection />
      <TripleHelixSection />
      <Features />
      <CurriculumAIDemo />
      <TechStack />
      <CallToAction />
    </div>
  );
};

export default WindowContent;
