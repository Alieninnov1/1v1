
import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

type ElementAnimationProps = {
  threshold?: number;
  once?: boolean;
  delay?: number;
};

export const useElementAnimation = ({ threshold = 0.1, once = true, delay = 0 }: ElementAnimationProps = {}) => {
  const [ref, inView] = useInView({
    threshold,
    once,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay, hasAnimated]);

  return {
    ref,
    isVisible: hasAnimated,
    inView,
  };
};
