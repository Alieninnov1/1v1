
import { useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

// Define a proper type for Framer Motion's edge values
type Edge = "start" | "end" | "center";

// Define proper type for Framer Motion's scroll offset
type ScrollOffset = 
  | [Edge | number | string, Edge | number | string]
  | Edge
  | number
  | string;

type ScrollAnimationConfig = {
  target?: RefObject<HTMLElement>;
  offset?: ScrollOffset;
  inputRange?: number[];
  outputRange?: any[];
};

/**
 * Custom hook for scroll-based animations
 * @param {ScrollAnimationConfig} config - Configuration for the scroll animation
 * @returns {Object} - Scroll progress value and transformed value
 */
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
