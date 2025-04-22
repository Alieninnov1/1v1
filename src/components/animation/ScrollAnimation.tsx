
import { motion, MotionProps } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useScrollAnimation } from "@/hooks/animations/useScrollAnimation";

export type AnimationDirection = "up" | "down" | "left" | "right";
export type AnimationType = "fade" | "slide" | "scale" | "transform";

type ValidOffset = 
  | ["start end", "end start"]
  | ["start center", "end start"]
  | ["center end", "end start"];

export interface ScrollAnimationProps extends MotionProps {
  children: ReactNode;
  type?: AnimationType;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  threshold?: number;
  offset?: ValidOffset;
  className?: string;
  once?: boolean;
}

/**
 * A component that animates its children based on scroll position
 * 
 * @example
 * <ScrollAnimation type="fade" direction="up">
 *   <div>This will fade in from below as you scroll to it</div>
 * </ScrollAnimation>
 */
export const ScrollAnimation = ({
  children,
  type = "fade",
  direction = "up",
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
  offset = ["start end", "end start"],
  className = "",
  once = true,
  ...motionProps
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScrollAnimation({
    target: ref,
    offset: offset as ["start end", "end start"], 
  });

  // Define animation variants based on type and direction
  const getVariants = () => {
    const distance = 50; // Base distance for movement animations
    
    switch (type) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } }
        };
      case "slide":
        const directionMap = {
          up: { y: distance },
          down: { y: -distance },
          left: { x: distance },
          right: { x: -distance }
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
      case "transform":
        return {
          hidden: { opacity: 0, scale: 0.95, y: 20 },
          visible: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: { duration, delay, type: "spring", stiffness: 150, damping: 20 }
          }
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
      ref={ref}
      className={className}
      initial="hidden"
      animate={scrollYProgress.get() > threshold || !once ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

// Export a stagger container for grouped animations
export const StaggerContainer = ({ 
  children, 
  delayChildren = 0.1,
  staggerChildren = 0.1,
  className = "",
  ...props
}: { 
  children: ReactNode; 
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
  [key: string]: any;
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
      {...props}
    >
      {children}
    </motion.div>
  );
};
