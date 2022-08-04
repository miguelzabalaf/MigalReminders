import { StyleSheet } from 'react-native';
import { isIOS } from '../../../../common/helpers/quickFunctions';
import { colors, spacing } from '../../../../common/utils/theme';

export const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.m,
    paddingVertical: isIOS() ? spacing.xl : spacing.l,
  },
});
