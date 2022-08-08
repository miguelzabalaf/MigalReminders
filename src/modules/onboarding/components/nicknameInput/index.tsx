import React from 'react';
import { Animated, TextInput, View } from 'react-native';
import { inputNameStyles } from '../../styles/components/inputName';
import { Text } from '../../../common/components/text';
import { colors } from '../../../common/utils/theme';
import { NICKNAME_MAX_LENGHT } from '../../constants';
import { useReboundAnimation } from '../../../common/animations/rebound';
import { activateLayoutAnimation } from '../../../common/animations/layaoutAnimation';

interface NicknameInputProps {
  nickname: string;
  focusOnNicknameInput: boolean;
  onChangeNickname: React.Dispatch<React.SetStateAction<string>>;
  onChangeFocusOnNicknameInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NicknameInput: React.FC<NicknameInputProps> = ({
  nickname,
  focusOnNicknameInput,
  onChangeNickname,
  onChangeFocusOnNicknameInput,
}) => {
  const configScale = {
    scale1: { toValue: 0.975, duration: 100 },
    scale2: { toValue: 1.015, duration: 50 },
    scale3: { toValue: 1, duration: 75 },
  };

  const { scaleValue, handleScale } = useReboundAnimation(configScale);

  return (
    <View style={inputNameStyles.container}>
      <TextInput
        style={inputNameStyles.textInput}
        onChangeText={event => {
          onChangeNickname(event);
          handleScale();
        }}
        onFocus={() => {
          activateLayoutAnimation({
            duration: 500,
            type: 'easeInEaseOut',
            creationProp: 'scaleXY',
          });

          onChangeFocusOnNicknameInput(true);
        }}
        onBlur={() => {
          activateLayoutAnimation({
            duration: 250,
            type: 'easeInEaseOut',
            creationProp: 'scaleXY',
          });

          onChangeFocusOnNicknameInput(false);
        }}
        value={nickname}
        placeholder={'Your nickname...'}
        placeholderTextColor={colors.textMuted}
        maxLength={NICKNAME_MAX_LENGHT}
      />
      {focusOnNicknameInput && (
        <Animated.View
          style={[
            { transform: [{ scale: scaleValue }] },
            inputNameStyles.containerCount,
          ]}>
          <Text
            type="text"
            color={colors.white}
            customStyle={inputNameStyles.containerCountText}>
            {nickname.length}/{NICKNAME_MAX_LENGHT}
          </Text>
        </Animated.View>
      )}
    </View>
  );
};
