import { useRef } from 'react';
import { Animated } from 'react-native';

const reboundanimationInitialConfig = {
  scale1: { toValue: 0.5, duration: 50 },
  scale2: { toValue: 1.25, duration: 200 },
  scale3: { toValue: 1, duration: 100 },
};

export const useReboundAnimation = (
  config = reboundanimationInitialConfig,
  onAnimationFinish?: () => any,
) => {
  // Hooks
  const scaleValue = useRef(new Animated.Value(1)).current;

  // Methods
  const handleScale = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: config.scale1.toValue,
        duration: config.scale1.duration,
        useNativeDriver: false,
      }),
      Animated.timing(scaleValue, {
        toValue: config.scale2.toValue,
        duration: config.scale2.duration,
        useNativeDriver: false,
      }),
      Animated.timing(scaleValue, {
        toValue: config.scale3.toValue,
        duration: config.scale3.duration,
        useNativeDriver: false,
      }),
    ]).start(() => onAnimationFinish && onAnimationFinish());
  };

  return {
    scaleValue,
    handleScale,
  };
};
