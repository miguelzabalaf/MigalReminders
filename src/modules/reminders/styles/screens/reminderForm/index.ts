import { StyleSheet } from 'react-native';
import { isIOS } from '../../../../common/helpers/quickFunctions';
import { colors, spacing, sizes } from '../../../../common/utils/theme';

export const reminderFormStyles = StyleSheet.create({
  reminderFormContent: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: isIOS() ? spacing.s : spacing.l,
  },
  reminderFormContainer: {
    flex: 1,
    paddingHorizontal: spacing.m,
  },
  reminderFormContainerContent: {
    flex: 1,
  },
  reminderFormContainerBotton: {},
  reminderFormContainerDatePicker: {
    borderRadius: sizes.s,
    overflow: 'hidden',
  },
});
