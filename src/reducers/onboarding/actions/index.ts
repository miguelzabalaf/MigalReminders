import { useDispatch } from 'react-redux';
import {
  ONBOARDING_SET_FIRST_SESSION_DATE,
  ONBOARDING_CHANGE_ONBOARDING_COMPLETE,
} from '../constants';

export const useOnboardingActions = () => {
  const dispatch = useDispatch();

  const actSetFirstSessionDate = (date: number) => {
    dispatch({
      type: ONBOARDING_SET_FIRST_SESSION_DATE,
      payload: date,
    });
  };

  const actChangeOnboardingComplete = (bool: boolean) => {
    dispatch({
      type: ONBOARDING_CHANGE_ONBOARDING_COMPLETE,
      payload: bool,
    });
  };

  return {
    actSetFirstSessionDate,
    actChangeOnboardingComplete,
  };
};
