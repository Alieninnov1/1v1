
import Hero from "@/components/home/Hero";
import DemoSection from "@/components/sections/DemoSection";
import TripleHelixSection from "@/components/sections/TripleHelixSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CallToActionSection from "@/components/sections/CallToActionSection";

const WindowContent = () => {
  return (
    <div className="xp-window-content overflow-auto scrollbar-hidden bg-[#0c101d] text-white">
      <Hero />
      <DemoSection />
      <TripleHelixSection />
      <FeaturesSection />
      <CurriculumSection />
      <TechStackSection />
      <CallToActionSection />
    </div>
  );
};

export default WindowContent;
