
import { useState } from "react";
import type { TargetAndTransition, VariantLabels, Transition } from "framer-motion";

interface AnimatedHoverProps {
  initial?: TargetAndTransition | VariantLabels;
  whileHover?: TargetAndTransition | VariantLabels;
  animate?: TargetAndTransition | VariantLabels;
  whileTap?: TargetAndTransition | VariantLabels;
  whileInView?: TargetAndTransition | VariantLabels;
  transition?: Transition;
  viewport?: {
    once?: boolean;
    margin?: string;
  };
}

export const useAnimatedHover = (props?: AnimatedHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.03, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)" },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.3 },
    viewport: { once: true },
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
