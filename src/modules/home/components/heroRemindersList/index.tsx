import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import PushNotification from 'react-native-push-notification';
import { useSelector } from 'react-redux';
import { useProfileSelectors } from '../../../../store/reducers/profile/selectors';
import { ButtonCreate } from '../../../common/components/buttonCreate';
import { hexToRGB } from '../../../common/helpers/quickFunctions';
import { colors } from '../../../common/utils/theme';
import { heroRemindersListStyles } from '../../styles/components/heroRemindersList';
import { HeroReminderItem } from '../heroReminderItem';
import { REMINDER_FORM_MODAL } from '../../../common/constants/index';

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

  const { navigate: navigateTo } = useNavigation();

  const handleOpenReminderForm = data => {
    // PushNotification.localNotificationSchedule({
    //   channelId: 'migal-channel',
    //   title: 'Hola',
    //   message: 'Message',
    //   date: new Date(Date.now() + 1000),
    // });
    navigateTo(REMINDER_FORM_MODAL, {
      editMode: true,
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
                onPress={() => handleOpenReminderForm({ editMode: false })}
                activeOpacity={0.75}
                style={containerButtonCreate}>
                <ButtonCreate />
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => handleOpenReminderForm({ editMode: true })}
              style={containerReminder}>
              <HeroReminderItem />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
