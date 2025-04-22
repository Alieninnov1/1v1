
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  type?: "fade" | "slide" | "scale" | "stagger";
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  once?: boolean;
  threshold?: number;
  staggerChildren?: number;
  staggerDirection?: "forward" | "reverse";
}

/**
 * Performance-optimized scroll animation component
 */
export const ScrollAnimation = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  type = "fade",
  direction = "up",
  distance = 20,
  once = true,
  threshold = 0.1,
  staggerChildren,
  staggerDirection = "forward",
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const isMobile = useIsMobile();
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Use a throttled mobile distance to improve performance on mobile
  const mobileDistance = isMobile ? distance * 0.6 : distance;
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay, hasAnimated]);
  
  // Get the appropriate animation variants based on type and direction
  const getVariants = () => {
    // Check for reduced motion preference
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
      if (prefersReducedMotion) {
        return {
          hidden: { opacity: 0.9 },
          visible: { opacity: 1 }
        };
      }
    }
    
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
            transition: { duration, delay, type: "spring", bounce: 0.2 }
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
              delay: delay + (i * (staggerChildren || 0.1)) 
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
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      custom={staggerDirection === "reverse" ? -1 : 1}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Container component for staggered animations
 */
export const StaggerContainer = ({ 
  children, 
  delayChildren = 0.1,
  staggerChildren = 0.1,
  className = "",
  once = true,
  threshold = 0.1
}: { 
  children: ReactNode; 
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
