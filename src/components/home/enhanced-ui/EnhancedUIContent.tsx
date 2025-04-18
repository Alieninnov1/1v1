
import { motion } from "framer-motion";
import TripleHelixAnimation from "@/components/animation/TripleHelixAnimation";
import StakeholderSection from "@/components/stakeholder/StakeholderSection";
import SignalThread from "@/components/animation/SignalThread";
import AnimatedStrainGraph from "@/components/visualization/AnimatedStrainGraph";
import { BookOpen, Building2, Briefcase } from "lucide-react";

interface EnhancedUIContentProps {
  setShowOnboarding: (show: boolean) => void;
}

const EnhancedUIContent = ({ setShowOnboarding }: EnhancedUIContentProps) => {
  const stakeholderData = [
    {
      title: "Academia Hub",
      role: "Educational Institution",
      metric: { label: "Curriculum Relevance", value: "87%", trend: "up" as const },
      influenceChannel: "Faculty can submit curriculum proposals and participate in industry skill gap surveys. Students receive real-time feedback on course alignment with job market demands.",
      useCase: "Metropolitan Community College updated their data science curriculum based on HelixHub signals, resulting in 94% job placement for graduates.",
      backgroundColor: "bg-gradient-to-br from-[#172554]/80 to-[#1e3a8a]/80",
      icon: <BookOpen size={24} className="text-blue-300" />,
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      index: 0
    },
    {
      title: "Industry Nexus",
      role: "Business & Workforce",
      metric: { label: "Skill Gap Reduction", value: "63%", trend: "up" as const },
      influenceChannel: "Companies can broadcast emerging skill needs and collaborate on training programs. HR teams gain insights into educational pipeline metrics.",
      useCase: "TechCorp reduced hiring time by 35% after participating in HelixHub's regional skills matching program with three local universities.",
      backgroundColor: "bg-gradient-to-br from-[#312e81]/80 to-[#4338ca]/80",
      icon: <Briefcase size={24} className="text-indigo-300" />,
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      index: 1
    },
    {
      title: "Government Gateway",
      role: "Policy & Governance",
      metric: { label: "Policy Effectiveness", value: "76%", trend: "up" as const },
      influenceChannel: "Decision makers visualize educational and workforce outcomes in real-time. Grant programs automatically match to highest-impact initiatives.",
      useCase: "State Economic Development Agency improved workforce development grant outcomes by 42% after adopting HelixHub's recommendation engine.",
      backgroundColor: "bg-gradient-to-br from-[#4c1d95]/80 to-[#6d28d9]/80",
      icon: <Building2 size={24} className="text-purple-300" />,
      imageSrc: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      index: 2
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <TripleHelixAnimation />
      
      {stakeholderData.map((stakeholder, index) => (
        <StakeholderSection
          key={index}
          {...stakeholder}
        />
      ))}
      
      <SignalThread className="bg-[#151823]" />
      <AnimatedStrainGraph className="bg-gradient-to-br from-[#151823] to-[#1a1d2d]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            Join the HelixHub Network
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Begin your journey as a contributor to the ecosystem. Share your insights and connect with other stakeholders.
          </p>
          <button 
            onClick={() => setShowOnboarding(true)}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
          >
            Get Started Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EnhancedUIContent;
