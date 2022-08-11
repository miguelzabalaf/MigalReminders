import { IReduxStore } from '../../index';
import { createSelector } from '../../../modules/common/helpers/createSelector';

export const useProfileSelectors = () => {
  const getProfileSelector = createSelector(
    (state: IReduxStore) => state.profile,
    profile => profile,
  );

  const getNicknameSelector = createSelector(
    (state: IReduxStore) => state.profile,
    profile => profile.nickname,
  );

  const getColorPreferenceSelector = createSelector(
    (state: IReduxStore) => state.profile,
    profile => profile.colorPreference,
  );

  return {
    getProfileSelector,
    getNicknameSelector,
    getColorPreferenceSelector,
  };
};
