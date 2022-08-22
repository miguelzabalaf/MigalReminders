import { colors } from '../utils/theme';

// Types
export const COMMON_RESET_REDUX_STORE_DATA = 'common/resetReduxStoreData';
export type CommonActionProp = {
  type: 'common/resetReduxStoreData';
};

// Stacks
export const ONBOARDING_STACK = 'OnboardingStack';
export const APP_STACK = 'AppStack';
export const HOME_STACK = 'HomeStack';

// Routes
export const ONBOARDING_SCREEN = 'OnboardingScreen';
export const HELLO_SCREEN = 'HelloScreen';
export const COLOR_SCREEN = 'ColorScreen';
export const HOME_SCREEN = 'HomeScreen';
export const PROFILE_SCREEN = 'ProfileScreen';
export const REMINDER_FORM_MODAL = 'ReminderFormModal';

// Sheets
export const REMINDER_FORM_SHEET = 'ReminderFormSheet';

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
