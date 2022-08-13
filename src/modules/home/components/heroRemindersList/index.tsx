import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PushNotification from 'react-native-push-notification';
import { useSelector } from 'react-redux';
import { useProfileSelectors } from '../../../../store/reducers/profile/selectors';
import { ButtonCreate } from '../../../common/components/buttonCreate';
import { hexToRGB } from '../../../common/helpers/quickFunctions';
import { colors } from '../../../common/utils/theme';
import { heroRemindersListStyles } from '../../styles/components/heroRemindersList';

export const HeroRemindersList: React.FC = () => {
  const { getColorPreferenceSelector } = useProfileSelectors();
  const colorPreference = useSelector(getColorPreferenceSelector);
  const {
    containerButtonCreate,
    containerRemindersFlatList,
    containerReminder,
    containerReminders,
    containerRemindersGradient,
  } = heroRemindersListStyles;

  const handleNotification = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'migal-channel',
      title: 'Hola',
      message: 'Message',
      date: new Date(Date.now() + 1000),
    });
  };

  return (
    <View style={containerReminders}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[
          hexToRGB(colorPreference?.color || colors.white),
          hexToRGB(colorPreference?.color || colors.white, 0.001),
        ]}
        style={containerRemindersGradient}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={containerRemindersFlatList}
        data={[{ buttonToCreate: true }, 0, 1, 2]}
        contentContainerStyle={{ paddingLeft: 35 }}
        renderItem={({ item }) => {
          if (item?.buttonToCreate) {
            return (
              <TouchableOpacity
                onPress={handleNotification}
                activeOpacity={0.9}
                style={containerButtonCreate}>
                <ButtonCreate />
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={handleNotification}
              style={containerReminder}>
              <View
                style={{
                  width: 125,
                  height: 85,
                  borderRadius: 15,
                  backgroundColor: 'white',
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
