
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  type?: "fade" | "slide" | "scale" | "stagger";
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export const ScrollAnimation = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  type = "fade",
  direction = "up",
  distance = 20,
}: ScrollAnimationProps) => {
  const isMobile = useIsMobile();
  
  // Reduce animation intensity on mobile devices
  const mobileDistance = isMobile ? distance * 0.6 : distance;
  
  // Set up animation variants based on type and direction
  const getVariants = () => {
    switch (type) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case "slide":
        const directionMap = {
          up: { y: mobileDistance },
          down: { y: -mobileDistance },
          left: { x: mobileDistance },
          right: { x: -mobileDistance }
        };
        return {
          hidden: { opacity: 0, ...directionMap[direction] },
          visible: { 
            opacity: 1, 
            x: 0, 
            y: 0,
            transition: { duration, delay }
          }
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration, delay }
          }
        };
      case "stagger":
        return {
          hidden: { opacity: 0, y: mobileDistance },
          visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { 
              duration, 
              delay: delay + (i * 0.1) 
            }
          })
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };
  
  const variants = getVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
      custom={delay}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ 
  children, 
  delayChildren = 0.1,
  staggerChildren = 0.1,
  className = "" 
}: { 
  children: ReactNode; 
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
