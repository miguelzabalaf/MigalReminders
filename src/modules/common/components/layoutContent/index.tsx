import React, { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { layaoutContentStyles } from '../../styles/components/layoutContent';

interface LayoutContentProps {
  customStyles?: StyleProp<ViewStyle>;
}

export const LayoutContent: React.FC<PropsWithChildren<LayoutContentProps>> = ({
  children,
  customStyles,
}) => {
  const contentStyles: LayoutContentProps['customStyles'] = [
    layaoutContentStyles.container,
    customStyles,
  ];

  return <View style={contentStyles}>{children}</View>;
};
