import React from 'react';
import { NICKNAME_MAX_LENGHT, NICKNAME_MIN_LENGHT } from '../../constants';

export const useHello = () => {
  const [nickname, onChangeNickname] = React.useState('');
  const [focusOnNicknameInput, onChangeFocusOnNicknameInput] =
    React.useState(false);
  const onSaveNickname = () => {};
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
