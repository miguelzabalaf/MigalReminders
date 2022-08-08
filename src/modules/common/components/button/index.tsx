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

type ButtonContentType = 'text' | 'icon';

interface ButtonProps extends TouchableOpacityProps {
  contentType: ButtonContentType;
  customStyle?: StyleProp<ViewStyle>;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = props => {
  const configScale = {
    scale1: { toValue: 0.975, duration: 200 },
    scale2: { toValue: 1.015, duration: 100 },
    scale3: { toValue: 1, duration: 150 },
  };

  const { scaleValue, handleScale } = useReboundAnimation(configScale);

  const getContainerStyles: ButtonProps['customStyle'] =
    props.customStyle ?? buttonStyles.containerButton;

  const getDisableStyles = props.disabled ? { opacity: 0.5 } : { opacity: 1 };

  return (
    <Animated.View
      style={[{ transform: [{ scale: scaleValue }] }, getDisableStyles]}>
      <TouchableOpacity
        disabled={props.disabled}
        style={getContainerStyles}
        onPressIn={() => {
          handleScale();
        }}
        activeOpacity={0.9}
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
