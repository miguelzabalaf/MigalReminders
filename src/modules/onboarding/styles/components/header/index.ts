import { StyleSheet } from 'react-native';
import { spacing, colors, sizes } from '../../../../common/utils/theme';

export const headerStyles = StyleSheet.create({
  container: {
    padding: spacing.s,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containerLeft: {
    padding: spacing.s,
    justifyContent: 'space-between',
    flex: 1,
  },
  containerRight: {
    padding: spacing.s,
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  containerRightText: {
    color: colors.text,
    fontSize: sizes.s,
    fontFamily: 'Poppins-Regular',
    lineHeight: sizes.m,
  },
});
