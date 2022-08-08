import { StyleSheet } from 'react-native';
import { fonts, sizes, spacing, colors } from '../../../../common/utils/theme';

export const inputNameStyles = StyleSheet.create({
  container: {
    height: 70,
    width: 300,
    position: 'relative',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.m,
    backgroundColor: colors.white,
    shadowColor: colors.textMuted,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,

    elevation: 5,
  },
  textInput: {
    zIndex: 1,
    flex: 1,
    width: '100%',
    textAlign: 'center',
    fontFamily: fonts.bold,
    fontSize: sizes.m,
    color: colors.text,
  },
  containerCount: {
    zIndex: 2,
    width: 60,
    height: 35,
    backgroundColor: colors.primary,
    borderRadius: 10,
    position: 'absolute',
    top: -15,
    right: -15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCountText: {
    opacity: 0.75,
    fontFamily: fonts.bold,
  },
});
