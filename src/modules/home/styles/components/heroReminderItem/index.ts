import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors, spacing, sizes, fonts } from '../../../../common/utils/theme';

export const heroReminderItemStyles = StyleSheet.create({
  container: {
    width: 125,
    height: RFValue(65),
    borderRadius: 15,
    backgroundColor: colors.whiteLight,
    paddingHorizontal: spacing.s + spacing.s,
    paddingVertical: spacing.s + spacing.s,
  },
  textCalendarCustomStyle: {
    fontSize: sizes.xxs,
    fontFamily: fonts.light,
    color: 'rgba(255, 255, 255, 0.75)',
    marginBottom: spacing.xs,
  },
  textDescCustomStyle: {
    fontSize: sizes.xs,
    fontFamily: fonts.medium,
    color: colors.white,
  },
});
