import { StyleSheet } from 'react-native';
import { colors, fonts, sizes, spacing } from '../../../utils/theme';

export const headerStyles = StyleSheet.create({
  container: {
    minHeight: 50,
    flexDirection: 'row',
    paddingHorizontal: spacing.m,
    backgroundColor: colors.white,
  },
  iconRight: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.s,
  },
  iconLeft: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.s,
  },
  children: {
    flex: 1,
    padding: spacing.s,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childrenText: {
    fontFamily: fonts.semiBold,
    fontSize: sizes.s,
    color: colors.title,
  },
});
