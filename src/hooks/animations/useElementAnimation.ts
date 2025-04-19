
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

type ElementAnimationProps = {
  threshold?: number;
  once?: boolean;
  delay?: number;
};

export const useElementAnimation = ({ threshold = 0.1, once = true, delay = 0 }: ElementAnimationProps = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold 
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay, hasAnimated]);

  return {
    ref,
    isVisible: hasAnimated,
    inView: isInView,
  };
};
