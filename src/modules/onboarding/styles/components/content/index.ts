import { StyleSheet } from 'react-native';
import { colors, fonts, sizes, spacing } from '../../../../common/utils/theme';

export const contentStyles = StyleSheet.create({
  container: {
    flex: 3,
    marginTop: spacing.xxl,
    alignItems: 'center',
  },
  containerTop: {
    alignItems: 'center',
    flex: 2,
  },
  containerBottom: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    width: 250,
  },
  title: {
    fontSize: sizes.l,
    fontFamily: fonts.bold,
    lineHeight: sizes.xxl,
    color: colors.title,
  },
  subTitle: {
    fontSize: sizes.s,
    fontFamily: fonts.regular,
    lineHeight: sizes.m,
    color: colors.text,
    paddingHorizontal: spacing.xl,
    textAlign: 'center',
  },
});
