
import { useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

// Define proper type for Framer Motion's edge values
type Edge = "start" | "end" | "center";

// Fix the type definition to exactly match Framer Motion's ScrollOffset type
type ScrollOffset = 
  | [
      | `${number} ${number}`
      | `${number} start` 
      | `${number} end`
      | `${number} center`
      | `start ${number}`
      | `end ${number}`
      | `center ${number}`
      | "start start"
      | "start end" 
      | "end start"
      | "end end"
      | "center center"
      | `${number}px ${number}px`
      | `${number}% ${number}%`
      | `${number}vh ${number}vh`
      | `${number}vw ${number}vw`,
      | `${number} ${number}`
      | `${number} start` 
      | `${number} end`
      | `${number} center`
      | `start ${number}`
      | `end ${number}`
      | `center ${number}`
      | "start start"
      | "start end" 
      | "end start"
      | "end end"
      | "center center"
      | `${number}px ${number}px`
      | `${number}% ${number}%`
      | `${number}vh ${number}vh`
      | `${number}vw ${number}vw`
    ];

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
