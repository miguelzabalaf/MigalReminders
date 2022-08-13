import { StyleSheet } from 'react-native';
import { spacing } from '../../../../common/utils/theme';

export const heroRemindersListStyles = StyleSheet.create({
  containerRemindersFlatList: {
    maxHeight: 85,
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
    paddingVertical: spacing.m,
    justifyContent: 'center',
    position: 'relative',
    paddingTop: spacing.m + spacing.s + spacing.s,
  },
  containerReminder: {
    marginRight: 15,
  },
});
