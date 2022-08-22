import { Dispatch } from 'react';
import { AnyAction, combineReducers } from 'redux';
import { COMMON_RESET_REDUX_STORE_DATA } from '../../modules/common/constants';
import {
  IOnboardingState,
  onboardingReducer as onboarding,
} from './onboarding';
import {
  remindersReducer as reminders,
  IRemindersState,
} from './reminders/index';
import { profileReducer as profile } from './profile';
import { IProfileState } from './profile';

export interface IReduxStore {
  onboarding: IOnboardingState;
  profile: IProfileState;
  reminders: IRemindersState;
}

export const actResetStoreData = (dispatch: Dispatch<AnyAction>) => {
  dispatch({
    type: COMMON_RESET_REDUX_STORE_DATA,
  });
};

export const useReducers = () => {
  return combineReducers({
    onboarding,
    profile,
    reminders,
  });
};
