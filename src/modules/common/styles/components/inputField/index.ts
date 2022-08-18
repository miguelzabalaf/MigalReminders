import { StyleSheet } from 'react-native';
import { hexToRGB } from '../../../helpers/quickFunctions';
import { colors, sizes } from '../../../utils/theme';

export const inputFieldStyles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: colors.text,
    fontSize: 14,
    marginBottom: 5,
  },
  inputFieldContent: {
    height: 42,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: hexToRGB(colors.primary, 0.025),
    borderColor: colors.grayLight,
  },
  inputErrorMessage: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  submitContainer: {
    marginTop: 15,
  },
  containerInput: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: sizes.s,
  },
  iconComponent: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  inputNoEditable: {
    color: colors.textMuted,
  },
});
