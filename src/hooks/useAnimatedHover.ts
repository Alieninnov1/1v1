
import { useState } from "react";
import type { MotionProps } from "framer-motion";

interface AnimatedHoverProps {
  initial?: MotionProps["initial"];
  whileHover?: MotionProps["animate"]; // Using animate type since whileHover has same structure
  animate?: MotionProps["animate"];
  transition?: MotionProps["transition"];
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
