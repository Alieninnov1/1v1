
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useFadeAnimation } from '@/hooks/animations';
import ScenarioToggle from './strain/ScenarioToggle';
import StrainMetrics from './strain/StrainMetrics';
import StrainChart from './strain/StrainChart';
import { scenarioData } from './strain/data';

interface AnimatedStrainGraphProps {
  className?: string;
}

const AnimatedStrainGraph = ({ className = '' }: AnimatedStrainGraphProps) => {
  const [scenario, setScenario] = useState<'statusQuo' | 'rebalanced' | 'collapse'>('statusQuo');
  const [currentData, setCurrentData] = useState(scenarioData.statusQuo);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScrollAnimation({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const fadeAnimation = useFadeAnimation();
  
  const getScenarioDescription = () => {
    switch (scenario) {
      case 'statusQuo':
        return "Current trajectory with no intervention. Strain index continues to rise as civic load increases and resource buffer decreases.";
      case 'rebalanced':
        return "Strategic intervention through HelixHub alignment. Education, industry, and policy work together to reduce strain.";
      case 'collapse':
        return "System failure scenario where lack of coordination leads to rapid resource depletion and critical strain levels.";
    }
  };
  
  const handleScenarioChange = (value: string) => {
    setScenario(value as typeof scenario);
    setCurrentData(scenarioData[value as keyof typeof scenarioData]);
  };

  return (
    <div ref={containerRef} className={`min-h-screen flex items-center py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeAnimation}>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
              System Strain Visualization
            </h2>
            <p className="text-gray-300 mb-8">
              Watch how the interaction between civic load, resource buffer, and usage impacts the overall system strain index.
            </p>
            
            <ScenarioToggle 
              scenario={scenario} 
              onScenarioChange={handleScenarioChange} 
            />
            
            <p className="mt-4 text-sm text-gray-400">
              {getScenarioDescription()}
            </p>
            
            <StrainMetrics 
              currentData={currentData[currentData.length - 1]} 
            />
          </motion.div>
          
          <StrainChart data={currentData} />
        </div>
      </div>
    </div>
  );
};

export default AnimatedStrainGraph;
