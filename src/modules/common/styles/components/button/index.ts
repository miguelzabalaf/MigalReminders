import { StyleSheet } from 'react-native';
import { colors, fonts, sizes, spacing } from '../../../utils/theme';

export const buttonStyles = StyleSheet.create({
  container: {},
  containerButton: {
    minHeight: 50,
    minWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 25,
  },
  text: {
    fontFamily: fonts.medium,
    fontSize: sizes.s,
    letterSpacing: 0.5,
    color: colors.white,
    textTransform: 'uppercase',
    alignSelf: 'center',
    paddingHorizontal: spacing.m,
    textAlign: 'center',
  },
});
