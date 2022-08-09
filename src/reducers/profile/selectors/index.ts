import { IReduxStore } from '../../index';
import { createSelector } from '../../../modules/common/helpers/createSelector';

export const useProfileSelectors = () => {
  const getNicknameSelector = createSelector(
    (state: IReduxStore) => state.profile,
    profile => profile.nickname,
  );

  return {
    getNicknameSelector,
  };
};
