
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type FadeAnimationConfig = {
  delay?: number;
  duration?: number;
  once?: boolean;
};

/**
 * Custom hook for creating fade animations with Framer Motion
 * @param {FadeAnimationConfig} config - Configuration for the fade animation
 * @returns {Object} - Object with animation properties for motion components
 */
export const useFadeAnimation = ({
  delay = 0,
  duration = 0.5,
  once = true,
}: FadeAnimationConfig = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once,
    margin: '-50px 0px'
  });
  
  return {
    ref,
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration, delay },
  };
};
