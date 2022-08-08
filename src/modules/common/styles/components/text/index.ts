import { StyleSheet } from 'react-native';
import { colors, fonts, sizes } from '../../../utils/theme';

export const textStyles = StyleSheet.create({
  text: {
    fontSize: sizes.s,
    fontFamily: fonts.regular,
    color: colors.text,
  },
  textMuted: {
    fontSize: sizes.s,
    fontFamily: fonts.regular,
    color: colors.textMuted,
  },
  subTitle: {
    fontSize: sizes.m,
    fontFamily: fonts.semiBold,
    color: colors.title,
  },
  title: {
    fontSize: sizes.l,
    fontFamily: fonts.bold,
    color: colors.title,
  },
});
