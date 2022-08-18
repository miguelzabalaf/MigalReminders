import { StyleSheet } from 'react-native';
import { spacing, sizes, fonts, colors } from '../../../utils/theme';

export const alertBoxStyles = StyleSheet.create({
  container: {
    padding: spacing.s + spacing.s,
    borderRadius: sizes.s,
    marginBottom: spacing.m,
    position: 'relative',
    overflow: 'hidden',
  },
  containerLoading: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  containerLoadingBlur: {
    position: 'absolute',
    top: -5,
    right: -5,
    left: -5,
    bottom: -5,
    zIndex: 2,
  },
  containerLoadingActivityIndicator: {
    zIndex: 3,
  },
  containerInfo: {
    flexDirection: 'row',
  },
  containerInfoIcon: {
    paddingHorizontal: spacing.s,
  },
  containerInfoLabel: {
    flex: 1,
  },
  containerInfoLabelStyle: {
    fontFamily: fonts.regular,
    fontSize: sizes.xs,
    marginBottom: spacing.s,
    paddingHorizontal: spacing.s,
  },
  containerOptions: {
    flexDirection: 'row',
  },
  containerOption: {
    margin: spacing.s,
    backgroundColor: colors.whiteLight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.s,
    borderRadius: 5,
  },
  ccontainerOptionLabelStyle: {
    fontSize: sizes.xs,
    fontFamily: fonts.medium,
  },
});
