import { ReminderActionProp } from './../../../store/reducers/reminders/actions';
import { IRemindersState } from './../../../store/reducers/reminders';
import { IOnboardingState } from '../../../store/reducers/onboarding';
import { IProfileState } from '../../../store/reducers/profile';
import { CommonActionProp } from '../constants';

export type TActionProps = CommonActionProp | ReminderActionProp;

export type TinitialState = IOnboardingState | IProfileState | IRemindersState;

export const createReducer = (initialState: TinitialState, handler: any) => {
  return (state = initialState, action: TActionProps) => {
    return handler?.hasOwnProperty(action.type)
      ? handler[action.type](state, action)
      : state;
  };
};
