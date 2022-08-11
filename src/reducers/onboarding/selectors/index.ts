import { IReduxStore } from '../../index';
import { createSelector } from '../../../modules/common/helpers/createSelector';

export const useOnboardingSelectors = () => {
  const getOnboardingSelector = createSelector(
    (state: IReduxStore) => state.onboarding,
    onboarding => onboarding,
  );

  return {
    getOnboardingSelector,
  };
};
