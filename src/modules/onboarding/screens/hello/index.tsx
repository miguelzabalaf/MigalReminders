import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
} from 'react-native';
import { IconArrowLeft } from '../../../common/assets/icons/arrowLeft';
import { IconCheck } from '../../../common/assets/icons/check';
import { Button } from '../../../common/components/button';
import { Header } from '../../../common/components/header';
import { Text } from '../../../common/components/text';
import { isIOS } from '../../../common/helpers/quickFunctions';
import { colors } from '../../../common/utils/theme';
import { NicknameInput } from '../../components/nicknameInput';
import { useHello } from '../../hooks/screens/useHello';
import { helloStyles } from '../../styles/screens/hello';

export const HelloScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const {
    // Functions
    onSaveNickname,
    // States
    nickname,
    onChangeNickname,
    focusOnNicknameInput,
    onChangeFocusOnNicknameInput,
    // Validations
    isValidLengthNickname,
  } = useHello();

  const customHeaderStyle = { backgroundColor: 'transparent' };
  return (
    <SafeAreaView style={helloStyles.container}>
      <Header
        iconLeft={<IconArrowLeft />}
        onPressIconLeft={goBack}
        customStyle={customHeaderStyle}
      />
      <KeyboardAvoidingView
        behavior={isIOS() ? 'padding' : 'height'}
        style={helloStyles.content}>
        <View style={helloStyles.contentSubtitle}>
          <Text type="subTitle">
            So nice to meet you! What do your friends call you?
          </Text>
        </View>
        <View style={helloStyles.contentInput}>
          <NicknameInput
            nickname={nickname}
            onChangeNickname={onChangeNickname}
            focusOnNicknameInput={focusOnNicknameInput}
            onChangeFocusOnNicknameInput={onChangeFocusOnNicknameInput}
          />
        </View>
        <View style={helloStyles.contentBottom}>
          {!focusOnNicknameInput && (
            <View style={helloStyles.contentBottomContinueButton}>
              <Button
                disabled={isValidLengthNickname}
                onPress={onSaveNickname}
                contentType="text">
                Continue
              </Button>
            </View>
          )}
          {focusOnNicknameInput && (
            <View style={helloStyles.contentBottomDoneButton}>
              <Button onPress={() => Keyboard.dismiss()} contentType="icon">
                <IconCheck width={24} height={24} color={colors.white} />
              </Button>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
