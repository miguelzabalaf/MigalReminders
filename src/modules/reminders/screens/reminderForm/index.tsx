import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Button } from '../../../common/components/button';
import { Header } from '../../../common/components/header';
import { InputField } from '../../../common/components/inputField';
import { useReminderForm } from '../../hooks/screens/useReminderForm';
import { reminderFormStyles } from '../../styles/screens/reminderForm';
import { hexToRGB, isIOS } from '../../../common/helpers/quickFunctions';
import { IconCheck } from '../../../common/assets/icons/check';
import { useProfileSelectors } from '../../../../store/reducers/profile/selectors';
import { useSelector } from 'react-redux';
import DatePicker from 'react-native-modern-datepicker';
import { colors, fonts } from '../../../common/utils/theme';
import { Checkbox } from '../../../common/components/checkbox';
import { AlertBox } from '../../../common/components/alertBox';
import { IconInfo } from '../../../common/assets/icons/info';
import { LayoutContainer } from '../../../common/components/layoutContainer';
import { IconArrowLeft } from '../../../common/assets/icons/arrowLeft';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../../navigation/stacks/homeStack';

type ReminderFormProps = NativeStackScreenProps<
  HomeStackParamList,
  'ReminderFormModal'
>;

export const ReminderForm: React.FC<ReminderFormProps> = ({ route }) => {
  const {
    params: { editMode },
  } = route;
  const { getColorPreferenceSelector } = useProfileSelectors();
  const colorPreference = useSelector(getColorPreferenceSelector);
  const { canGoBack, goBack } = useNavigation();
  const {
    control,
    handleSubmit,
    errors,
    onSubmitReminder,
    isValidReminder,
    keyboardShow,
    hideKeyboard,
    setReminderDate,
    minimunDate,
    showNotif,
    haveNotifPermissions,
    handleToggleShowNotification,
    hadleOpenSettings,
  } = useReminderForm();
  const {
    reminderFormContainer,
    reminderFormContainerContent,
    reminderFormContainerBotton,
    reminderFormContent,
    reminderFormContainerDatePicker,
  } = reminderFormStyles;
  return (
    <LayoutContainer>
      <View style={reminderFormContent}>
        <Header
          iconRight={
            keyboardShow && (
              <IconCheck
                color={colorPreference?.color}
                width={25}
                height={25}
              />
            )
          }
          iconLeft={!isIOS() && <IconArrowLeft />}
          onPressIconLeft={() => canGoBack() && goBack()}
          onPressIconRight={hideKeyboard}>
          {editMode === true ? 'Edit reminder' : 'Create reminder'}
        </Header>

        <KeyboardAvoidingView
          behavior={isIOS() ? 'padding' : 'height'}
          style={reminderFormContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={reminderFormContainerContent}>
            <InputField
              label={'Title'}
              name={'titleReminder'}
              control={control}
              errors={errors}
              editable={true}
              placeholder={'Example: My first job interview...'}
              placeholderTextColor={colors.textMuted}
            />
            {haveNotifPermissions || !showNotif ? (
              <Checkbox
                onPressCheck={handleToggleShowNotification}
                selected={showNotif}
                color={colorPreference?.color || colors.primary}
                label={'Show me a notification on the exact day and time'}
              />
            ) : (
              <AlertBox
                icon={<IconInfo color={colors.white} width={30} />}
                color={colors.warning}
                label={
                  'If you want to be notified, please give the app permission to use notifications.'
                }
                option1={'Open Settings'}
                onPressOpt1={hadleOpenSettings}
              />
            )}
            <View style={reminderFormContainerDatePicker}>
              <DatePicker
                options={{
                  backgroundColor: colorPreference?.color,
                  textDefaultColor: hexToRGB(colors.white, 0.65),
                  selectedTextColor: colorPreference?.color,
                  textHeaderColor: colors.white,
                  defaultFont: fonts.regular,
                  headerFont: fonts.semiBold,
                  textFont: fonts.light,
                  mainColor: colors.white,
                  textSecondaryColor: colors.white,
                  borderColor: colors.whiteLight,
                }}
                minimumDate={minimunDate}
                minuteInterval={1}
                onSelectedChange={date => setReminderDate(date)}
              />
            </View>
          </ScrollView>
          {!keyboardShow && (
            <View style={reminderFormContainerBotton}>
              <Button
                backgroundColor={colorPreference?.color}
                contentType="text"
                onPress={handleSubmit(onSubmitReminder)}
                disabled={!isValidReminder}>
                {editMode === true ? 'Edit' : 'Create'}
              </Button>
            </View>
          )}
        </KeyboardAvoidingView>
      </View>
    </LayoutContainer>
  );
};
