import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../text';
import { IconCheck } from '../../assets/icons/check/index';
import { checkboxStyles } from '../../styles/components/checkbox';
import { colors } from '../../utils/theme';

interface CheckboxProps {
  selected: boolean;
  label: string;
  color?: string;
  onPressCheck: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  selected,
  label,
  color,
  onPressCheck,
}) => {
  const {
    container,
    containerCheck,
    containerLabel,
    containerCheckContorn,
    containerCheckboxIcon,
  } = checkboxStyles;
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => {
        onPressCheck();
      }}
      style={container}>
      <View style={containerCheck}>
        <View style={containerCheckContorn}>
          {selected && (
            <View
              style={[
                containerCheckboxIcon,
                { backgroundColor: color || colors.primary },
              ]}>
              <IconCheck color={colors.white} />
            </View>
          )}
        </View>
      </View>
      <View style={containerLabel}>
        <Text type={'text'} color={selected ? colors.text : colors.textMuted}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
