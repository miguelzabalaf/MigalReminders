import { fonts } from './../../../../common/utils/theme';
import { StyleSheet } from 'react-native';
import { colors, spacing, sizes } from '../../../../common/utils/theme';
import { isIOS } from '../../../../common/helpers/quickFunctions';

interface IHeroStyles {
  color: string;
}

export const heroStyles = ({ color }: IHeroStyles) => {
  return StyleSheet.create({
    container: {
      height: 250,
      backgroundColor: color,
      justifyContent: 'center',
      flexDirection: 'row',
      paddingTop: isIOS() ? spacing.l + spacing.m : spacing.l,
      alignItems: 'flex-start',
    },
    containerDate: {
      flexDirection: 'column',
      padding: spacing.m,
      justifyContent: 'center',
      paddingTop: spacing.m + spacing.m,
    },
    containerDateTop: {
      flexDirection: 'row',
    },
    containerDateBottom: {},
    containerDateBottomText: {
      fontSize: 50,
      color: colors.white,
      fontFamily: fonts.bold,
      opacity: 0.5,
      alignSelf: 'baseline',
      marginTop: -spacing.l,
    },
    containerDateExtra: {
      marginTop: isIOS() ? -spacing.s : -(spacing.s + spacing.xs),
    },
    containerDateDay: {
      fontSize: 50,
      color: colors.white,
      lineHeight: 55,
      marginRight: spacing.s,
    },
    containerDateRest: {
      fontSize: sizes.s,
      color: colors.white,
      fontFamily: fonts.light,
      opacity: 0.65,
      lineHeight: isIOS() ? sizes.m : sizes.m + 4,
    },
  });
};
