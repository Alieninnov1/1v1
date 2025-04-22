
import { useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

// Define proper type for Framer Motion's edge values
type Edge = "start" | "end" | "center";

// Update the FramerScrollOffset type to be compatible with Framer Motion's ScrollOffset
// This is crucial for fixing the type error
type FramerScrollOffset = 
  | [string | number, string | number]
  | Edge
  | `${number} ${number}`
  | `${number} ${Edge}`
  | `${Edge} ${number}`
  | "start start"
  | "start end"
  | "end start"
  | "end end"
  | "center center"
  | `${number}px ${number}px`
  | `${number}% ${number}%`;

type ScrollAnimationConfig = {
  target?: RefObject<HTMLElement>;
  offset?: FramerScrollOffset;
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
  // The offset is now correctly typed to match Framer Motion's expectations
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
