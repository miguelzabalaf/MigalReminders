import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../common/components/text';
import { colors } from '../../../common/utils/theme';
import { heroReminderItemStyles } from '../../styles/components/heroReminderItem';

export const HeroReminderItem: React.FC = () => {
  const { container, textCalendarCustomStyle, textDescCustomStyle } =
    heroReminderItemStyles;
  return (
    <View style={container}>
      <Text
        type={'textMuted'}
        color={colors.textMuted}
        customStyle={textCalendarCustomStyle}>
        Today at 11:45 PM
      </Text>
      <Text
        numberOfLines={2}
        type={'text'}
        color={colors.text}
        customStyle={textDescCustomStyle}>
        Serempre: Meet with React Team, enjoy wiht us
      </Text>
    </View>
  );
};
