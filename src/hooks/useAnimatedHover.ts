
import { useState } from "react";
import { AnimationProps } from "framer-motion";

interface AnimatedHoverProps {
  initial?: AnimationProps["initial"];
  whileHover?: AnimationProps["whileHover"];
  animate?: AnimationProps["animate"];
  transition?: AnimationProps["transition"];
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
