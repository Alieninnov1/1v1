
/**
 * Animation constants and configurations for consistent animations
 */

// Base animation durations
export const DURATIONS = {
  extraFast: 0.15,
  fast: 0.25,
  normal: 0.4,
  slow: 0.6,
  extraSlow: 1,
};

// Easing functions
export const EASINGS = {
  // Standard easings
  linear: [0, 0, 1, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  
  // Cubic bezier easings
  emphasized: [0.2, 0, 0, 1],
  decelerated: [0, 0, 0.2, 1],
  accelerated: [0.4, 0, 1, 1],
  
  // Spring-like easings
  spring: [0.25, 0.1, 0.25, 1],
  bounce: [0.5, -0.5, 0.5, 1.5],
};

// Spring configurations
export const SPRINGS = {
  gentle: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
    mass: 1,
  },
  bouncy: {
    type: 'spring',
    stiffness: 300,
    damping: 10,
    mass: 0.75,
  },
  responsive: {
    type: 'spring',
    stiffness: 200,
    damping: 20,
    mass: 0.8,
  },
  stiff: {
    type: 'spring',
    stiffness: 400,
    damping: 30,
    mass: 1,
  }
};

// Media query breakpoints
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

// Animation variants factory functions
export const createFadeVariants = (
  direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none',
  distance = 20
) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
});

export const createScaleVariants = (initialScale = 0.95) => ({
  hidden: {
    opacity: 0,
    scale: initialScale,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
});

// Responsive animation settings
export const getResponsiveSettings = (isMobile: boolean) => ({
  duration: isMobile ? DURATIONS.normal * 0.75 : DURATIONS.normal,
  distance: isMobile ? 15 : 30,
  staggerDelay: isMobile ? 0.05 : 0.1,
});
