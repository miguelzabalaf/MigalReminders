import React from 'react';
import { StatusBar, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useProfileSelectors } from '../../../../store/reducers/profile/selectors';
import { Text } from '../../../common/components/text';
import { colors } from '../../../common/utils/theme';
import { heroStyles } from '../../styles/components/hero';
import { HeroRemindersList } from '../heroRemindersList';

interface HeroProps {
  actualDay: number;
  actualDayName: string;
  actualMonth: string;
  actualYear: number;
}

export const Hero: React.FC<HeroProps> = ({
  actualDay,
  actualDayName,
  actualMonth,
  actualYear,
}) => {
  const { getProfileSelector } = useProfileSelectors();
  const { colorPreference } = useSelector(getProfileSelector);
  const {
    container,
    containerDate,
    containerDateDay,
    containerDateRest,
    containerDateExtra,
    containerDateTop,
    containerDateBottom,
    containerDateBottomText,
  } = heroStyles({
    color: colorPreference?.color || colors.primary,
  });

  return (
    <View style={container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      <View style={containerDate}>
        <View style={containerDateTop}>
          <Text type={'title'} customStyle={containerDateDay}>
            {actualDay}
          </Text>
          <View style={containerDateExtra}>
            <Text type={'subTitle'} customStyle={containerDateRest}>
              {actualMonth}
            </Text>
            <Text type={'subTitle'} customStyle={containerDateRest}>
              {actualYear}
            </Text>
          </View>
        </View>
        <View style={containerDateBottom}>
          <Text type={'subTitle'} customStyle={containerDateBottomText}>
            {actualDayName}
          </Text>
        </View>
      </View>
      {/* Hero Reminders List */}
      <HeroRemindersList />
    </View>
  );
};
