import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useProfileActions } from '../../../../reducers/profile/actions';
import { useProfileSelectors } from '../../../../reducers/profile/selectors';
import { COLOR_SCREEN } from '../../../common/constants';
import { NICKNAME_MAX_LENGHT, NICKNAME_MIN_LENGHT } from '../../constants';

export const useHello = () => {
  // Selectors
  const { getNicknameSelector } = useProfileSelectors();
  const nicknameInitialState = useSelector(getNicknameSelector);

  // Actions
  const { actSetNickname } = useProfileActions();

  // Hooks
  const { navigate } = useNavigation();
  const [nickname, onChangeNickname] = React.useState(nicknameInitialState);
  const [focusOnNicknameInput, onChangeFocusOnNicknameInput] =
    React.useState(false);
  const onSaveNickname = () => {
    actSetNickname(nickname);
    navigate(COLOR_SCREEN as never);
  };
  const isValidLengthNickname = !(
    nickname.length >= NICKNAME_MIN_LENGHT &&
    nickname.length <= NICKNAME_MAX_LENGHT
  );
  return {
    // Functions
    onSaveNickname,
    // States
    nickname,
    onChangeNickname,
    focusOnNicknameInput,
    onChangeFocusOnNicknameInput,
    // Validations
    isValidLengthNickname,
  };
};
