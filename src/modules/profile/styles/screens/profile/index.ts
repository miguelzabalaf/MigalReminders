import { StyleSheet } from 'react-native';
import { spacing } from '../../../../common/utils/theme';

export const profileStyles = StyleSheet.create({
  customstylesHeader: {
    backgroundColor: 'transparent',
  },
  containerUserInfo: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: spacing.m,
  },
  containerUserInfoLabels: {
    marginTop: spacing.m,
    alignItems: 'center',
  },
  containerBottom: {
    marginBottom: spacing.m,
    paddingHorizontal: spacing.l,
    alignItems: 'center',
  },
  customButtonStyle: {
    backgroundColor: 'transparent',
    padding: spacing.m,
  },
});
