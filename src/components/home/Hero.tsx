
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const proofConcepts = [
  {
    label: "Academia",
    desc: "Live curriculum benchmarking & student skill tracking.",
    color: "bg-blue-700",
    icon: "🎓",
  },
  {
    label: "Industry",
    desc: "Realtime workforce needs, employer feedback, talent signals.",
    color: "bg-amber-600",
    icon: "💼",
  },
  {
    label: "Government",
    desc: "Policy modeling, grant impact, regional resource overlays.",
    color: "bg-purple-700",
    icon: "🏛️",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen py-16 flex flex-col justify-center items-center overflow-x-hidden">
      {/* Clean, crisp headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white"
      >
        Triple Helix Proof of Concept
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.3 }}
        className="max-w-2xl mx-auto text-lg text-center text-gray-300 mb-8"
      >
        Explore a clear prototype aligning <span className="text-purple-200 font-semibold">Academia</span>, <span className="text-blue-200 font-semibold">Industry</span>, and <span className="text-indigo-200 font-semibold">Government</span> as live, interacting blocks.
      </motion.p>
      
      {/* High-quality image placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="mb-10"
      >
        <img
          src="/lovable-uploads/261b8a7f-e6a4-4b35-b826-2641f23da6d7.png"
          alt="Triple Helix Concept Diagram"
          className="rounded-lg shadow-xl mx-auto h-52 md:h-72 w-auto object-contain"
        />
      </motion.div>
      
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {proofConcepts.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + idx * 0.09, duration: 0.6 }}
            className={`rounded-xl p-6 min-h-[180px] flex flex-col items-center ${item.color} shadow-lg`}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-xl text-white mb-1">{item.label}</h3>
            <p className="text-white text-center text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-10 text-center"
      >
        <a
          href="#features"
          className="inline-flex items-center px-7 py-3 text-base font-semibold rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all"
        >
          Explore Features <ArrowRight className="ml-3 h-5 w-5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
