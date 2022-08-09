import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { IconCheck } from '../../assets/icons/check';
import { colorOptionStyles } from '../../styles/components/colorOption';
import { colors } from '../../utils/theme';

interface ColorOptionProps {
  width: number;
  color: string;
  selected: boolean;
}

export const ColorOption: React.FC<PropsWithChildren<ColorOptionProps>> = ({
  width,
  color,
  selected,
}) => {
  const { container } = colorOptionStyles({
    width,
    color,
  });
  return (
    <View style={container}>
      {selected && <IconCheck width={25} height={25} color={colors.white} />}
    </View>
  );
};
