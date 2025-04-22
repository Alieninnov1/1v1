
import { AnimationProps } from 'framer-motion';

export type FadeAnimationOptions = {
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  type?: 'tween' | 'spring' | 'inertia';
  stiffness?: number;
  damping?: number;
  mass?: number;
  initialOpacity?: number;
};

/**
 * Hook that provides consistent fade animation properties for Framer Motion components
 * 
 * @param options - Configuration options for the animation
 * @returns AnimationProps object for use with Framer Motion components
 * 
 * @example
 * const animation = useFadeAnimation({ delay: 0.2, y: 30 });
 * return <motion.div {...animation}>Content</motion.div>;
 */
export const useFadeAnimation = (options: FadeAnimationOptions = {}): AnimationProps => {
  const {
    delay = 0,
    duration = 0.5,
    y = 20,
    x = 0,
    type = 'tween',
    stiffness = 100,
    damping = 15,
    mass = 1,
    initialOpacity = 0,
  } = options;

  const transitionProps = type === 'spring'
    ? { type, stiffness, damping, mass }
    : { type, duration };

  return {
    initial: { opacity: initialOpacity, y, x },
    animate: { opacity: 1, y: 0, x: 0 },
    exit: { opacity: 0, y: -10, x },
    transition: {
      ...transitionProps,
      delay,
    },
  };
};

/**
 * Hook that provides staggered fade animation properties for multiple children
 */
export const useStaggerFadeAnimation = (
  count: number, 
  options: FadeAnimationOptions & {
    staggerDelay?: number;
  } = {}
): AnimationProps => {
  const { staggerDelay = 0.1, ...fadeOptions } = options;
  
  return {
    ...useFadeAnimation(fadeOptions),
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: fadeOptions.delay || 0,
    },
    variants: {
      initial: { opacity: fadeOptions.initialOpacity || 0 },
      animate: { opacity: 1 },
    }
  };
};
