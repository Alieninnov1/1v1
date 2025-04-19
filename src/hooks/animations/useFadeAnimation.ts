
import { AnimationProps } from 'framer-motion';

export const useFadeAnimation = (delay: number = 0): AnimationProps => {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: {
      duration: 0.5,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  };
};
