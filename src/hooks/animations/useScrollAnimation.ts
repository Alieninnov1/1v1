
import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

type OffsetValue = [string, string] | number[] | undefined;

type ScrollAnimationConfig = {
  target?: RefObject<HTMLElement>;
  offset?: OffsetValue;
  inputRange?: number[];
  outputRange?: any[];
};

export const useScrollAnimation = ({
  target,
  offset = ["start end", "end start"],
  inputRange = [0, 1],
  outputRange = [0, 1],
}: ScrollAnimationConfig = {}) => {
  const { scrollYProgress } = useScroll({
    target,
    offset: offset as [string, string],
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
