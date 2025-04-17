
import { useState } from "react";
import type { TargetAndTransition, VariantLabels } from "framer-motion";

interface AnimatedHoverProps {
  initial?: TargetAndTransition | VariantLabels;
  whileHover?: TargetAndTransition | VariantLabels;
  animate?: TargetAndTransition | VariantLabels;
  transition?: {
    duration?: number;
    ease?: string | number[];
    delay?: number;
  };
}

export const useAnimatedHover = (props?: AnimatedHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.03 },
    transition: { duration: 0.5 },
    ...props
  };

  const hoverHandlers = {
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
  };

  return {
    isHovered,
    hoverHandlers,
    animationProps: defaultAnimation,
  };
};
