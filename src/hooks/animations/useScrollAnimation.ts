
import { useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

// Define valid string literal types for Framer Motion's edge values
type Edge = "start" | "end" | "center";
type EdgeOffset = `${number}%` | `${number}px` | `${number}vh` | `${number}vw` | number;

// Define the combined edge values
type EdgeCombo = 
  | `${Edge} ${Edge}`
  | `${Edge} ${EdgeOffset}`
  | `${EdgeOffset} ${Edge}`
  | `${EdgeOffset} ${EdgeOffset}`;

// Define the ScrollOffset type to match exactly what Framer Motion expects
type ScrollOffset = [EdgeCombo, EdgeCombo];

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
  // Use the correctly typed offset parameter
  const { scrollYProgress } = useScroll({
    target,
    offset: offset as ScrollOffset,
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
