
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useAnimatedHover } from "@/hooks/useAnimatedHover";
import { useIsMobile } from "@/hooks/use-mobile";

interface InsightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const InsightCard = ({ title, description, icon, color }: InsightCardProps) => {
  const { isHovered, hoverHandlers, animationProps } = useAnimatedHover();
  const isMobile = useIsMobile();
  
  // Adjust animations based on device type
  const animations = {
    initial: animationProps.initial,
    animate: animationProps.animate,
    transition: animationProps.transition,
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    // Only apply hover effects on non-mobile devices
    ...(isMobile ? {} : {
      whileHover: animationProps.whileHover,
      whileTap: animationProps.whileTap,
    })
  };
  
  return (
    <motion.div
      {...animations}
      {...hoverHandlers}
      className="w-full"
    >
      <Card className={`relative overflow-hidden shadow-lg border-none h-full transform transition-all duration-300`}>
        <motion.div
          className="absolute inset-0 z-0 opacity-10"
          style={{ background: color }}
          animate={{
            opacity: isHovered ? 0.2 : 0.1,
          }}
        />
        <CardHeader className="relative z-10">
          <div 
            className={`p-3 rounded-full inline-flex bg-opacity-10 mb-2`} 
            style={{ background: color }}
          >
            {icon}
          </div>
          <CardTitle className="text-xl font-satoshi">{title}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered || isMobile ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
            className="h-[1px] bg-gray-300 dark:bg-gray-700 mt-4"
          />
          
          <motion.div 
            className="mt-4 flex items-center text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered || isMobile ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span>Explore details</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.div>
        </CardContent>

        {/* Subtle 3D effect with gradient highlight on hover */}
        <motion.div
          className="absolute inset-0 z-0 opacity-0 bg-gradient-to-tr from-transparent to-white dark:to-gray-700"
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );
};

export default InsightCard;
