
import { useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

// Define a type alias for the Edge values
type Edge = "start" | "end" | "center";

// Define our own ScrollAnimationOffset type that matches framer-motion's expectations
type ScrollAnimationOffset = 
  | [Edge | number | string, Edge | number | string] 
  | Edge 
  | number 
  | undefined;

type ScrollAnimationConfig = {
  target?: RefObject<HTMLElement>;
  offset?: ScrollAnimationOffset;
  inputRange?: number[];
  outputRange?: any[];
};

export const useScrollAnimation = ({
  target,
  offset = ["start end", "end start"],
  inputRange = [0, 1],
  outputRange = [0, 1],
}: ScrollAnimationConfig = {}) => {
  const { scrollYProgress } = useScroll({
    target,
    offset: offset as any, // Use type assertion to bypass TypeScript's strict checking
  });

  const transformValue = useTransform(
    scrollYProgress,
    inputRange,
    outputRange
  );

  return {
    scrollYProgress,
    transformValue,
  };
};
