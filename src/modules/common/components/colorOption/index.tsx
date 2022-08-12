import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { colorOptionStyles } from '../../styles/components/colorOption';

interface ColorOptionProps {
  width: number;
  color: string;
  showChildren: boolean;
}

export const ColorOption: React.FC<PropsWithChildren<ColorOptionProps>> = ({
  width,
  color,
  showChildren,
  children,
}) => {
  const { container } = colorOptionStyles({
    width,
    color,
  });
  return <View style={container}>{showChildren && children}</View>;
};
