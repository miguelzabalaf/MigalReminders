import React, { PropsWithChildren, ReactNode } from 'react';
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { headerStyles } from '../../styles/components/header';

interface HeaderProps {
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  customStyle?: StyleProp<ViewStyle>;
  onPressIconLeft?: () => void;
  onPressIconRight?: () => void;
  onPressContent?: () => void;
}

export const Header: React.FC<PropsWithChildren<HeaderProps>> = props => {
  const getContainerStyles: HeaderProps['customStyle'] = props.customStyle
    ? [headerStyles.container, props.customStyle]
    : headerStyles.container;

  return (
    <View style={getContainerStyles}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={props.onPressIconLeft}
        style={headerStyles.iconLeft}>
        {props.iconLeft}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.onPressContent}
        style={headerStyles.children}
        activeOpacity={0.75}>
        <Text style={headerStyles.childrenText}>{props.children}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={props.onPressIconRight}
        style={headerStyles.iconRight}>
        {props.iconRight}
      </TouchableOpacity>
    </View>
  );
};
