import React, { PropsWithChildren } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Animated,
} from 'react-native';
import { buttonStyles } from '../../styles/components/button';
import { useReboundAnimation } from '../../animations/rebound/index';

export const Button: React.FC<
  PropsWithChildren<TouchableOpacityProps>
> = props => {
  const configScale = {
    scale1: { toValue: 0.975, duration: 200 },
    scale2: { toValue: 1.015, duration: 100 },
    scale3: { toValue: 1, duration: 150 },
  };

  const { scaleValue, handleScale } = useReboundAnimation(configScale);

  return (
    <Animated.View
      style={{ transform: [{ scale: scaleValue }], ...buttonStyles.container }}>
      <TouchableOpacity
        style={[buttonStyles.containerButton]}
        onPress={() => {
          handleScale();
          props.onPress;
        }}
        activeOpacity={0.9}
        {...props}>
        <Text style={buttonStyles.text}>{props.children}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
