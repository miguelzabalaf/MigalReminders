import React, { PropsWithChildren } from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { layaoutContainerStyles } from '../../styles/components/layoutContainer';
import { colors } from '../../utils/theme';

type BgTypes = 'default' | 'white';

interface LayoutContainerProps {
  backgroundColor?: BgTypes;
}

export const LayoutContainer: React.FC<
  PropsWithChildren<LayoutContainerProps>
> = ({ children, backgroundColor }) => {
  const containerStyles: StyleProp<ViewStyle> = {
    ...layaoutContainerStyles.container,
    backgroundColor:
      backgroundColor === 'white' ? colors[backgroundColor] : colors.background,
  };

  return <SafeAreaView style={containerStyles}>{children}</SafeAreaView>;
};
