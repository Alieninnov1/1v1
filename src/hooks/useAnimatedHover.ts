
import { useState } from "react";
import type { MotionProps } from "framer-motion";

type AnimatedHoverProps = {
  initial?: MotionProps["initial"];
  whileHover?: MotionProps["whileHover"];
  animate?: MotionProps["animate"];
  whileTap?: MotionProps["whileTap"];
  whileInView?: MotionProps["whileInView"];
  transition?: MotionProps["transition"];
  viewport?: {
    once?: boolean;
    margin?: string;
  };
  xpStyle?: boolean; // Special Windows XP style animations
};

export const useAnimatedHover = (props?: AnimatedHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const xpHoverEffects = props?.xpStyle ? {
    whileHover: { 
      boxShadow: "inset 0 0 0 1px rgba(0, 85, 229, 0.9), 0 0 3px rgba(0, 85, 229, 0.6)",
      backgroundColor: "#F0F7FD"
    },
    whileTap: { 
      scale: 0.97, 
      boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.2)"
    },
  } : {};

  const defaultAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.03, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)" },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.3 },
    viewport: { once: true },
    ...xpHoverEffects,
    ...props
  };

  const hoverHandlers = {
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
    onTapStart: () => setIsClicked(true),
    onTapCancel: () => setIsClicked(false),
    onTap: () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    },
  };

  return {
    isHovered,
    isClicked,
    hoverHandlers,
    animationProps: defaultAnimation,
  };
};

// Special XP effects for Windows XP styled components
export const useXPAnimation = () => {
  const [isPressed, setIsPressed] = useState(false);
  
  const buttonHandlers = {
    onMouseDown: () => setIsPressed(true),
    onMouseUp: () => setIsPressed(false),
    onMouseLeave: () => setIsPressed(false),
  };
  
  const buttonClasses = isPressed 
    ? "active:shadow-[inset_-1px_-1px_0_white,_inset_1px_1px_0_#888]"
    : "shadow-[inset_1px_1px_0_white,_inset_-1px_-1px_0_#888]";
  
  return {
    isPressed,
    buttonHandlers,
    buttonClasses
  };
};
