
import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

type ScrollAnimationConfig = {
  target?: RefObject<HTMLElement>;
  offset?: [string, string];
  inputRange?: number[];
  outputRange?: number[] | string[];
};

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

  const transformValue: MotionValue = useTransform(
    scrollYProgress,
    inputRange,
    outputRange
  );

  return {
    scrollYProgress,
    transformValue,
  };
};
