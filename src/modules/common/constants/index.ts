import { colors } from '../utils/theme';

// Types
export const COMMON_RESET_REDUX_STORE_DATA = 'common/resetReduxStoreData';

// Stacks
export const ONBOARDING_STACK = 'onboardingStack';
export const APP_STACK = 'appStack';

// Routes
export const ONBOARDING_SCREEN = 'OnboardingScreen';
export const HELLO_SCREEN = 'HelloScreen';
export const COLOR_SCREEN = 'ColorScreen';

// Data
export interface IColorListItem {
  id: string;
  color: string;
}
export const colorList: IColorListItem[] = [
  { id: 'C1', color: colors.color1 },
  { id: 'C2', color: colors.color2 },
  { id: 'C3', color: colors.color3 },
  { id: 'C4', color: colors.color4 },
  { id: 'C5', color: colors.color5 },
  { id: 'C6', color: colors.color6 },
];
