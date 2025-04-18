
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

interface StakeholderSectionProps {
  title: string;
  role: string;
  metric: {
    label: string;
    value: string;
    trend: 'up' | 'down' | 'stable';
  };
  influenceChannel: string;
  useCase: string;
  backgroundColor: string;
  icon: ReactNode;
  imageSrc?: string;
  index: number;
}

const StakeholderSection = ({
  title,
  role,
  metric,
  influenceChannel,
  useCase,
  backgroundColor,
  icon,
  imageSrc,
  index
}: StakeholderSectionProps) => {
  return (
    <section 
      className={`min-h-screen flex items-center py-24 ${backgroundColor}`}
      id={`stakeholder-${role.toLowerCase()}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation
            type="slide"
            direction="left"
            delay={0.2}
            className="order-2 lg:order-1"
          >
            <div className="bg-black/20 backdrop-blur-md rounded-xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="bg-white/10 p-3 rounded-lg mr-3">
                  {icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{title}</h2>
                  <p className="text-gray-300">{role} Portal</p>
                </div>
              </div>
              
              <div className="mb-8 p-6 bg-white/5 rounded-lg border border-white/5">
                <div className="text-sm text-gray-400 mb-1">Real-time Metric:</div>
                <div className="flex items-center justify-between">
                  <span className="text-xl">{metric.label}</span>
                  <div className="flex items-center">
                    <span className={`text-3xl font-bold ${
                      metric.trend === 'up' ? 'text-green-400' : 
                      metric.trend === 'down' ? 'text-red-400' : 
                      'text-blue-400'
                    }`}>
                      {metric.value}
                    </span>
                    <svg 
                      className={`ml-2 w-5 h-5 ${
                        metric.trend === 'up' ? 'text-green-400' : 
                        metric.trend === 'down' ? 'text-red-400' : 
                        'text-blue-400'
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      {metric.trend === 'up' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />}
                      {metric.trend === 'down' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />}
                      {metric.trend === 'stable' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />}
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-white">Influence Channel</h3>
                <p className="text-gray-300">{influenceChannel}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Example Use Case</h3>
                <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                  <p className="text-gray-300">{useCase}</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation
            type="slide"
            direction="right"
            delay={0.4}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-2xl">
              {imageSrc ? (
                <img 
                  src={imageSrc} 
                  alt={`${role} visualization`} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{icon}</div>
                    <p className="text-xl text-gray-300">Visualization coming soon</p>
                  </div>
                </div>
              )}
              
              {/* Interactive elements overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <div className="flex justify-between items-center">
                    <div className="text-white">
                      <div className="text-sm opacity-75">Role Index</div>
                      <div className="text-2xl font-semibold">{index + 1}/3</div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white font-medium border border-white/20"
                    >
                      Enter Portal
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default StakeholderSection;
