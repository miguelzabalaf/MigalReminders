import { combineReducers } from 'redux';
import {
  IOnboardingState,
  onboardingReducer as onboarding,
} from './onboarding';
import { profileReducer as profile } from './profile';
import { IProfileState } from './profile/index';

export interface IReduxStore {
  onboarding: IOnboardingState;
  profile: IProfileState;
}

export const useReducers = () => {
  return combineReducers({
    onboarding,
    profile,
  });
};
