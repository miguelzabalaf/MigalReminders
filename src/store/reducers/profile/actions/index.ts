import { useDispatch } from 'react-redux';
import { IColorListItem } from '../../../../modules/common/constants';
import {
  PROFILE_SET_NICKNAME,
  PROFILE_SET_COLOR_PREFERENCE,
} from '../constants';

export const useProfileActions = () => {
  const dispatch = useDispatch();

  const actSetNickname = (nickname: string) => {
    dispatch({
      type: PROFILE_SET_NICKNAME,
      payload: nickname,
    });
  };

  const actSetColorPreference = (colorListItem: IColorListItem | null) => {
    dispatch({
      type: PROFILE_SET_COLOR_PREFERENCE,
      payload: colorListItem,
    });
  };

  return {
    actSetNickname,
    actSetColorPreference,
  };
};
