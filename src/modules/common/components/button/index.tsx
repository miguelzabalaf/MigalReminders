import React, { PropsWithChildren } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Animated,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { buttonStyles } from '../../styles/components/button';
import { useReboundAnimation } from '../../animations/rebound/index';
import { colors } from '../../utils/theme';

type ButtonContentType = 'text' | 'icon';

interface ButtonProps extends TouchableOpacityProps {
  contentType: ButtonContentType;
  customStyle?: StyleProp<ViewStyle>;
  backgroundColor?: StyleProp<ViewStyle['backgroundColor']>;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = props => {
  const configScale = {
    scale1: { toValue: 0.975, duration: 200 },
    scale2: { toValue: 1.015, duration: 100 },
    scale3: { toValue: 1, duration: 150 },
  };

  const { scaleValue, handleScale } = useReboundAnimation(configScale);

  const getContainerStyles: ButtonProps['customStyle'] = props.customStyle ?? {
    ...buttonStyles.containerButton,
    backgroundColor: props.backgroundColor ?? colors.primary,
  };

  const getDisableStyles: StyleProp<ViewStyle> = {
    opacity: props.disabled ? 0.5 : 1,
  };

  return (
    <Animated.View
      style={[{ transform: [{ scale: scaleValue }] }, getDisableStyles]}>
      <TouchableOpacity
        style={getContainerStyles}
        onPressIn={() => {
          handleScale();
        }}
        activeOpacity={0.75}
        {...props}>
        {props.contentType === 'text' ? (
          <Text style={buttonStyles.text}>{props.children}</Text>
        ) : (
          props.children
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};
