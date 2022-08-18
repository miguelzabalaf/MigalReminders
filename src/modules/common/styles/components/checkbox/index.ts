import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../../utils/theme';

export const checkboxStyles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.m,
  },
  containerCheck: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.s + spacing.s,
  },
  containerLabel: {
    flex: 1,
  },
  containerCheckContorn: {
    borderWidth: 2,
    width: 25,
    height: 25,
    borderRadius: 5,
    borderColor: colors.grayLight,
    overflow: 'hidden',
  },
  containerCheckboxIcon: {
    borderRadius: 5,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
