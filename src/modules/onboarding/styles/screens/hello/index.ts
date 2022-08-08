import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../../../common/utils/theme';
import { isIOS } from '../../../../common/helpers/quickFunctions';

export const helloStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.m,
    justifyContent: 'space-between',
    marginBottom: spacing.l,
  },
  contentSubtitle: {},
  contentInput: {
    flex: 1,
    marginTop: spacing.l,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBottom: {
    alignItems: 'center',
    position: 'relative',
  },
  contentBottomContinueButton: {
    width: 250,
  },
  contentBottomDoneButton: {
    width: 50,
    position: 'absolute',
    right: spacing.m,
    top: isIOS() ? -75 : -100,
  },
});
