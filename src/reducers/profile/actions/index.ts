import { useDispatch } from 'react-redux';
import { PROFILE_SET_NICKNAME } from '../constants';

export const useProfileActions = () => {
  const dispatch = useDispatch();

  const actSetNickname = (nickname: string) => {
    dispatch({
      type: PROFILE_SET_NICKNAME,
      payload: nickname,
    });
  };

  return {
    actSetNickname,
  };
};
