
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useAnimatedHover } from "@/hooks/useAnimatedHover";

interface InsightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const InsightCard = ({ title, description, icon, color }: InsightCardProps) => {
  const { isHovered, hoverHandlers, animationProps } = useAnimatedHover();
  
  return (
    <motion.div
      initial={animationProps.initial}
      animate={animationProps.animate}
      whileHover={animationProps.whileHover}
      transition={animationProps.transition}
      onHoverStart={hoverHandlers.onHoverStart}
      onHoverEnd={hoverHandlers.onHoverEnd}
      className="w-full"
    >
      <Card className={`relative overflow-hidden shadow-lg border-none h-full`}>
        <motion.div
          className="absolute inset-0 z-0 opacity-10"
          style={{ background: color }}
          animate={{
            opacity: isHovered ? 0.2 : 0.1,
          }}
        />
        <CardHeader className="relative z-10">
          <div className={`p-3 rounded-full inline-flex bg-opacity-10 mb-2`} style={{ background: color }}>
            {icon}
          </div>
          <CardTitle className="text-xl font-satoshi">{title}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
            className="h-[1px] bg-gray-300 dark:bg-gray-700 mt-4"
          />
          
          <motion.div 
            className="mt-4 flex items-center text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span>Explore details</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InsightCard;
