import React from 'react';
import { View } from 'react-native';
import { IconPlusCircle } from '../../assets/icons/plusCircle';
import { buttonCreateStyles } from '../../styles/components/buttonCreate';
import { colors } from '../../utils/theme';

export const ButtonCreate: React.FC = () => {
  const { container } = buttonCreateStyles;
  return (
    <View style={container}>
      <IconPlusCircle width={30} color={colors.white} />
    </View>
  );
};
