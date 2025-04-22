
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Info } from "lucide-react";
import { trackEvent } from "@/utils/analytics";

const InteractiveDemo = () => {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    trackEvent('simulationStarted', { demo: '3D Triple Helix' });
  };

  const handleComplete = () => {
    setCompleted(true);
    trackEvent('simulationStopped', { demo: '3D Triple Helix' });
  };

  return (
    <section 
      id="interactive-demo"
      className="my-12 w-full max-w-2xl mx-auto bg-white dark:bg-[#151823] rounded-lg shadow-lg p-6 ring-1 ring-purple-500/10"
      aria-labelledby="interactive-demo-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <Info size={20} aria-hidden="true" className="text-purple-500" />
        <h2 id="interactive-demo-title" className="text-xl font-bold text-purple-800 dark:text-purple-200">
          Triple Helix Interactive Demo
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Try the interactive 3D model below to see how academia, industry, and government networks connect in real-time.
      </p>
      <div role="region" aria-label="Triple Helix 3D Model Demo" tabIndex={0} className="outline-none focus:ring-2 focus:ring-purple-500 rounded-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: started ? 1 : 0.4, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-b from-purple-50/90 to-indigo-50/80 dark:from-[#28294b] dark:to-[#161930] border rounded-lg p-4 mb-4"
        >
          {/* For demo purposes, using the existing 3D model demo */}
          <div className="w-full h-64 flex items-center justify-center">
            <img 
              src="/lovable-uploads/261b8a7f-e6a4-4b35-b826-2641f23da6d7.png"
              alt="Triple Helix Demo Placeholder"
              className="h-40 object-contain"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
      {!started ? (
        <Button aria-label="Start interactive demo" onClick={handleStart} className="mt-2">
          Start Demo <ArrowRight size={18} className="ml-2" />
        </Button>
      ) : !completed ? (
        <Button aria-label="Complete interactive demo" onClick={handleComplete} variant="success" className="mt-2">
          Complete Demo <Check size={18} className="ml-2" />
        </Button>
      ) : (
        <span className="mt-2 flex items-center text-green-600 font-medium">
          <Check size={18} className="mr-1" /> Demo Completed! 
        </span>
      )}
    </section>
  );
};

export default InteractiveDemo;
