import { StyleSheet } from 'react-native';
import { spacing } from '../../../../common/utils/theme';
import { isIOS } from '../../../../common/helpers/quickFunctions';

export const helloStyles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: spacing.l,
  },
  contentSubtitle: {},
  contentInput: {
    flex: 1,
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
    top: isIOS() ? -165 : -150,
  },
});
