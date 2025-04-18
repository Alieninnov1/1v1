
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const steps = [
  { id: 'signal', label: 'Signal', description: 'Community feedback and data inputs' },
  { id: 'match', label: 'Match', description: 'Connect needs with resources' },
  { id: 'vote', label: 'Vote', description: 'Collective decision making' },
  { id: 'recalibrate', label: 'Recalibrate', description: 'Adjust systems based on outcomes' }
];

interface SignalThreadProps {
  className?: string;
}

const SignalThread = ({ className = '' }: SignalThreadProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const pathLength = useTransform(smoothProgress, [0, 0.9], [0, 1]);
  const pathOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
  
  const [activeStep, setActiveStep] = useState(0);
  
  // Update active step based on scroll progress
  useEffect(() => {
    const unsubscribe = smoothProgress.onChange(value => {
      const step = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(value * steps.length))
      );
      setActiveStep(step);
    });
    
    return () => unsubscribe();
  }, [smoothProgress]);
  
  return (
    <div ref={containerRef} className={`relative min-h-[80vh] py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
          >
            The Signal Thread
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Follow how civic feedback flows through the HelixHub system
          </motion.p>
        </div>
        
        <div className="relative">
          {/* SVG Path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 2 800" preserveAspectRatio="none">
              {/* Background line */}
              <path
                d="M1,0 L1,800"
                stroke="#3d3d50"
                strokeWidth="2"
                fill="none"
              />
              
              {/* Animated path */}
              <motion.path
                d="M1,0 L1,800"
                stroke="url(#signalGradient)"
                strokeWidth="4"
                fill="none"
                style={{ pathLength, opacity: pathOpacity }}
              />
              
              {/* Glowing effect */}
              <motion.path
                d="M1,0 L1,800"
                stroke="url(#signalGlowGradient)"
                strokeWidth="6"
                fill="none"
                style={{ pathLength, opacity: pathOpacity }}
                filter="blur(4px)"
              />
              
              <defs>
                <linearGradient id="signalGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="800">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient id="signalGlowGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="800">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#6366F1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Moving particle */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.8)]"
              style={{ top: useTransform(pathLength, [0, 1], ["0%", "100%"]) }}
            />
          </div>
          
          {/* Steps */}
          <div className="relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`mb-48 ${index % 2 === 0 ? 'ml-auto pr-12' : 'mr-auto pl-12'} w-full max-w-[500px] relative`}
              >
                {/* Step indicator */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-colors duration-300 ${
                    index <= activeStep 
                      ? 'bg-gradient-to-br from-purple-500 to-blue-500'
                      : 'bg-gray-700'
                  }`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`bg-black/30 backdrop-blur-sm rounded-xl p-8 border ${
                  index <= activeStep
                    ? 'border-purple-500/30'
                    : 'border-gray-700/30'
                }`}>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    index <= activeStep
                      ? 'text-purple-300'
                      : 'text-gray-400'
                  }`}>
                    {step.label}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                  
                  {/* Step-specific content */}
                  <div className="mt-6">
                    {step.id === 'signal' && (
                      <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                          <span className="text-sm text-purple-300">Input sources: 12 active</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          Collecting feedback from students, industry partners, and policy makers to identify needs and opportunities.
                        </div>
                      </div>
                    )}
                    
                    {step.id === 'match' && (
                      <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          <span className="text-sm text-blue-300">Current matches: 45</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          AI-powered algorithms connect curriculum gaps with industry needs and available policy resources.
                        </div>
                      </div>
                    )}
                    
                    {step.id === 'vote' && (
                      <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-500/20">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                          <span className="text-sm text-indigo-300">Active proposals: 8</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          Stakeholders vote on proposed solutions using the SignalDAO mechanism for transparent decision-making.
                        </div>
                      </div>
                    )}
                    
                    {step.id === 'recalibrate' && (
                      <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-500/20">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                          <span className="text-sm text-cyan-300">System adjustments: 23</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          Feedback loop closes as systems adjust based on outcome data, continuously optimizing the ecosystem.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignalThread;
