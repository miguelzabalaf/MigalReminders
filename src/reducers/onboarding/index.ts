import { COMMON_RESET_REDUX_STORE_DATA } from '../../modules/common/constants';
import {
  actionProps,
  createReducer,
} from '../../modules/common/helpers/createReducer';
import {
  ONBOARDING_CHANGE_ONBOARDING_COMPLETE,
  ONBOARDING_SET_FIRST_SESSION_DATE,
} from './constants';

interface IonboardingState {
  firstSessionDate: number | null;
  onboardingCompleate: boolean;
}

const onboardingInitialState: IonboardingState = {
  firstSessionDate: null,
  onboardingCompleate: false,
};

const onboardingHandler = {
  [ONBOARDING_SET_FIRST_SESSION_DATE](
    state: IonboardingState,
    action: actionProps,
  ) {
    const firstSessionDate = action.payload;
    return {
      ...state,
      firstSessionDate,
    };
  },
  [ONBOARDING_CHANGE_ONBOARDING_COMPLETE](
    state: IonboardingState,
    action: actionProps,
  ) {
    const onboardingCompleate = action.payload;
    return {
      ...state,
      onboardingCompleate,
    };
  },
  // Reset
  [COMMON_RESET_REDUX_STORE_DATA]() {
    return onboardingInitialState;
  },
};

export const onboardingReducer = createReducer(
  onboardingInitialState,
  onboardingHandler,
);
