import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { spacing } from '../../../../common/utils/theme';

export const heroRemindersListStyles = StyleSheet.create({
  containerRemindersFlatList: {
    maxHeight: RFValue(65),
    marginTop: -spacing.s - spacing.s,
  },
  containerButtonCreate: {
    width: 50,
    height: '100%',
    marginRight: 15,
  },
  containerRemindersGradient: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 30,
    zIndex: 1,
  },
  containerReminders: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  containerReminder: {
    marginRight: 15,
  },
});
