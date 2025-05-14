
import { useState } from 'react';
import { useSpring } from '@react-spring/web';

type FormFieldAnimationOptions = {
  focusScale?: number;
  blurScale?: number;
  focusBorderWidth?: number;
  blurBorderWidth?: number;
  focusColor?: string;
  blurColor?: string;
  duration?: number;
};

export const useFormFieldAnimation = (options: FormFieldAnimationOptions = {}) => {
  const {
    focusScale = 1.02,
    blurScale = 1,
    focusBorderWidth = 2,
    blurBorderWidth = 1,
    focusColor = 'rgba(155, 135, 245, 0.6)',
    blurColor = 'rgba(255, 255, 255, 0.1)',
    duration = 200,
  } = options;

  const [isFocused, setIsFocused] = useState(false);

  const animationProps = useSpring({
    scale: isFocused ? focusScale : blurScale,
    borderWidth: isFocused ? focusBorderWidth : blurBorderWidth,
    borderColor: isFocused ? focusColor : blurColor,
    config: {
      tension: 300,
      friction: 20,
      duration,
    },
  });

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return {
    animationProps,
    handleFocus,
    handleBlur,
    isFocused,
  };
};
