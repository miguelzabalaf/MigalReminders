import { fonts } from './../../../../common/utils/theme';
import { StyleSheet } from 'react-native';
import { colors, spacing, sizes } from '../../../../common/utils/theme';
import { isIOS } from '../../../../common/helpers/quickFunctions';
import { RFValue } from 'react-native-responsive-fontsize';

interface IHeroStyles {
  color: string;
}

export const heroStyles = ({ color }: IHeroStyles) => {
  return StyleSheet.create({
    container: {
      height: 200,
      backgroundColor: color,
      justifyContent: 'center',
      flexDirection: 'row',
      paddingTop: isIOS() ? spacing.l + spacing.m : spacing.l,
    },
    containerDate: {
      flexDirection: 'column',
      padding: spacing.m,
      justifyContent: 'center',
    },
    containerDateTop: {
      flexDirection: 'row',
    },
    containerDateBottom: {},
    containerDateBottomText: {
      fontSize: RFValue(45),
      color: colors.white,
      fontFamily: fonts.bold,
      opacity: 0.5,
      alignSelf: 'baseline',
      marginTop: -RFValue(25),
    },
    containerDateExtra: {
      marginTop: isIOS() ? -spacing.s : -(spacing.s + spacing.xs),
    },
    containerDateDay: {
      fontSize: RFValue(45),
      color: colors.white,
      lineHeight: RFValue(50),
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
