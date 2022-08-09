import { IOnboardingState } from '../../../reducers/onboarding';
import { IProfileState } from '../../../reducers/profile';

export interface actionProps {
  type: string;
  payload: any;
}

type IinitialState = IOnboardingState | IProfileState;

export const createReducer = (initialState: IinitialState, handler: any) => {
  return (state = initialState, action: actionProps) => {
    return handler?.hasOwnProperty(action.type)
      ? handler[action.type](state, action)
      : state;
  };
};
