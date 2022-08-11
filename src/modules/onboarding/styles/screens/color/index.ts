import { StyleSheet } from 'react-native';
import { spacing } from '../../../../common/utils/theme';

export const colorStyles = StyleSheet.create({
  containerComponent: {
    flex: 1,
    position: 'relative',
  },
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
  containerList: {
    flex: 1,
    minWidth: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  list: {
    maxHeight: 200,
    margin: 0,
  },
  containerListItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  contentBottomContinueButton: {
    width: 250,
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: spacing.l,
  },
  containerCheckIcon: {
    position: 'absolute',
    zIndex: 3,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerGlobe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    borderRadius: 10000,
    zIndex: 2,
  },
});
