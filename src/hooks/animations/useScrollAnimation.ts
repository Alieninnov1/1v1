
import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

// Define the exact types that framer-motion expects for ScrollOffset
type Edge = "start" | "end" | "center";
type ScrollOffset = 
  | [Edge | number | string, Edge | number | string] 
  | Edge 
  | number 
  | undefined;

type ScrollAnimationConfig = {
  target?: RefObject<HTMLElement>;
  offset?: ScrollOffset;
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
    offset,
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
