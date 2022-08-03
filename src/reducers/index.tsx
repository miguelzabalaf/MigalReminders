import { combineReducers } from 'redux';
import { onboardingReducer as onboarding } from './onboarding';

export const useReducers = () => {
  return combineReducers({
    onboarding,
  });
};
