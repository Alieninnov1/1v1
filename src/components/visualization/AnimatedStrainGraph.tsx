
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

// Sample data
const baseData = [
  { year: '2020', civicLoad: 4.5, resourceBuffer: 5.8, usagePerCitizen: 1.2, strainIndex: 0.78 },
  { year: '2021', civicLoad: 4.7, resourceBuffer: 5.6, usagePerCitizen: 1.25, strainIndex: 0.84 },
  { year: '2022', civicLoad: 4.9, resourceBuffer: 5.3, usagePerCitizen: 1.3, strainIndex: 0.92 },
  { year: '2023', civicLoad: 5.2, resourceBuffer: 5.0, usagePerCitizen: 1.4, strainIndex: 1.04 },
  { year: '2024', civicLoad: 5.4, resourceBuffer: 4.8, usagePerCitizen: 1.5, strainIndex: 1.12 },
  { year: '2025', civicLoad: 5.7, resourceBuffer: 4.6, usagePerCitizen: 1.55, strainIndex: 1.24 }
];

const scenarioData = {
  statusQuo: [
    ...baseData,
    { year: '2026', civicLoad: 6.0, resourceBuffer: 4.3, usagePerCitizen: 1.6, strainIndex: 1.39 },
    { year: '2027', civicLoad: 6.3, resourceBuffer: 4.0, usagePerCitizen: 1.65, strainIndex: 1.57 },
    { year: '2028', civicLoad: 6.6, resourceBuffer: 3.7, usagePerCitizen: 1.7, strainIndex: 1.78 },
  ],
  rebalanced: [
    ...baseData,
    { year: '2026', civicLoad: 5.8, resourceBuffer: 4.9, usagePerCitizen: 1.4, strainIndex: 1.18 },
    { year: '2027', civicLoad: 5.9, resourceBuffer: 5.2, usagePerCitizen: 1.25, strainIndex: 1.13 },
    { year: '2028', civicLoad: 6.0, resourceBuffer: 5.5, usagePerCitizen: 1.1, strainIndex: 1.09 },
  ],
  collapse: [
    ...baseData,
    { year: '2026', civicLoad: 6.2, resourceBuffer: 4.0, usagePerCitizen: 1.8, strainIndex: 1.55 },
    { year: '2027', civicLoad: 6.7, resourceBuffer: 3.2, usagePerCitizen: 2.1, strainIndex: 2.09 },
    { year: '2028', civicLoad: 7.2, resourceBuffer: 2.3, usagePerCitizen: 2.4, strainIndex: 3.13 },
  ]
};

type ScenarioKey = 'statusQuo' | 'rebalanced' | 'collapse';

interface AnimatedStrainGraphProps {
  className?: string;
}

const AnimatedStrainGraph = ({ className = '' }: AnimatedStrainGraphProps) => {
  const [scenario, setScenario] = useState<ScenarioKey>('statusQuo');
  const [currentData, setCurrentData] = useState(scenarioData.statusQuo);
  const [animationProgress, setAnimationProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Map scroll position to animation progress
  const animProgress = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  
  useEffect(() => {
    const unsubscribe = animProgress.onChange(v => {
      setAnimationProgress(Math.min(1, Math.max(0, v)));
    });
    return () => unsubscribe();
  }, [animProgress]);
  
  useEffect(() => {
    setCurrentData(scenarioData[scenario]);
  }, [scenario]);
  
  // Calculate visible data points based on animation progress
  const visibleData = currentData.slice(0, Math.ceil(animationProgress * currentData.length));
  
  // Calculate current strain index for display
  const currentStrainIndex = visibleData.length > 0 
    ? visibleData[visibleData.length - 1].strainIndex
    : 0;
  
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
  
  const getStrainStatusClass = () => {
    if (currentStrainIndex < 1) return "text-green-400";
    if (currentStrainIndex < 1.5) return "text-yellow-400";
    if (currentStrainIndex < 2) return "text-orange-400";
    return "text-red-400";
  };
  
  const getStrainStatusText = () => {
    if (currentStrainIndex < 1) return "Healthy";
    if (currentStrainIndex < 1.5) return "Warning";
    if (currentStrainIndex < 2) return "Critical";
    return "System Failure";
  };
  
  return (
    <div ref={containerRef} className={`min-h-screen flex items-center py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
              System Strain Visualization
            </h2>
            <p className="text-gray-300 mb-8">
              Watch how the interaction between civic load, resource buffer, and usage impacts the overall system strain index.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Scenario</h3>
              <ToggleGroup type="single" value={scenario} onValueChange={(value) => value && setScenario(value as ScenarioKey)}>
                <ToggleGroupItem value="statusQuo" className="text-sm">Status Quo</ToggleGroupItem>
                <ToggleGroupItem value="rebalanced" className="text-sm">Rebalanced</ToggleGroupItem>
                <ToggleGroupItem value="collapse" className="text-sm">Collapse</ToggleGroupItem>
              </ToggleGroup>
              <p className="mt-4 text-sm text-gray-400">
                {getScenarioDescription()}
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-400">Current Strain Index</div>
                  <div className={`text-3xl font-bold ${getStrainStatusClass()}`}>
                    {currentStrainIndex.toFixed(2)}
                  </div>
                  <div className={`text-sm ${getStrainStatusClass()}`}>
                    {getStrainStatusText()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Crisis Threshold</div>
                  <div className="text-3xl font-bold text-gray-300">1.00</div>
                  <div className={`text-sm ${currentStrainIndex >= 1 ? 'text-red-400' : 'text-green-400'}`}>
                    {currentStrainIndex >= 1 ? 'Exceeded' : 'Maintained'}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/20">
                  <div className="text-xs text-gray-400">Civic Load</div>
                  <div className="text-lg font-semibold text-blue-300">
                    {visibleData.length > 0 ? `${visibleData[visibleData.length - 1].civicLoad}M` : '0M'}
                  </div>
                </div>
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/20">
                  <div className="text-xs text-gray-400">Resource Buffer</div>
                  <div className="text-lg font-semibold text-green-300">
                    {visibleData.length > 0 ? `${visibleData[visibleData.length - 1].resourceBuffer}M ha` : '0M ha'}
                  </div>
                </div>
                <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/20">
                  <div className="text-xs text-gray-400">Usage per Citizen</div>
                  <div className="text-lg font-semibold text-amber-300">
                    {visibleData.length > 0 ? `${visibleData[visibleData.length - 1].usagePerCitizen}ha` : '0ha'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={visibleData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="year" 
                    stroke="rgba(255,255,255,0.5)"
                  />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '4px',
                      color: 'white'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="civicLoad" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
                    name="Civic Load"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="resourceBuffer" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
                    name="Resource Buffer"
                  />
                  <Line
                    type="monotone"
                    dataKey="usagePerCitizen"
                    stroke="#F59E0B"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6, stroke: '#F59E0B', strokeWidth: 2 }}
                    name="Usage per Citizen"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="strainIndex" 
                    stroke="#EF4444" 
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    activeDot={{ r: 7, stroke: '#EF4444', strokeWidth: 2 }}
                    name="Strain Index"
                  />
                  
                  {/* Crisis threshold line */}
                  <Line
                    data={Array(visibleData.length).fill({ threshold: 1 })}
                    dataKey="threshold"
                    stroke="#EF4444"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                    dot={false}
                    name="Crisis Threshold"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStrainGraph;
