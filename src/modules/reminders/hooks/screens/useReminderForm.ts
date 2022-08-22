import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { openSettings } from 'react-native-permissions';
import * as Yup from 'yup';
import { AppState, Keyboard } from 'react-native';
import moment from 'moment';
import { checkPermissionsNotifications } from '../../../common/helpers/permissions';
import { activateLayoutAnimation } from '../../../common/animations/layaoutAnimation/index';
import { useNavigation } from '@react-navigation/native';

const keyboardShowInitialState = false;

const reminderDateInitialState = '';

const showNotifInitialstate = false;

interface IReminderForm {
  titleReminder: string;
}

export const useReminderForm = () => {
  const { goBack } = useNavigation();

  const [keyboardShow, setKeyboardShow] = useState(keyboardShowInitialState);

  const [reminderDate, setReminderDate] = useState(reminderDateInitialState);

  const [showNotif, setShowNotif] = useState(showNotifInitialstate);

  const [haveNotifPermissions, setHaveNotifPermissions] = useState(true);

  const reminderValidator = Yup.object().shape({
    titleReminder: Yup.string().required('This field is required'),
  });

  const {
    control,
    handleSubmit,
    reset: resetForm,
    formState: { errors, isValid },
  } = useForm<IReminderForm>({
    defaultValues: {
      titleReminder: '',
    },
    resolver: yupResolver(reminderValidator),
    mode: 'all',
    delayError: 500,
  });

  const handleChangeKeyboardShow = (value: boolean) => {
    setKeyboardShow(value);
  };

  const hadleOpenSettings = () => {
    openSettings().catch(() => console.warn('cannot open settings'));
  };

  const checkPermission = async () => {
    const havePermissions = await checkPermissionsNotifications();
    setHaveNotifPermissions(havePermissions);
  };

  const handleToggleShowNotification = () => {
    checkPermission();
    setShowNotif(!showNotif);
  };

  useEffect(() => {
    activateLayoutAnimation({
      duration: 250,
      type: 'easeInEaseOut',
      creationProp: 'opacity',
    });
  }, [haveNotifPermissions, showNotif, keyboardShow]);

  useEffect(() => {
    resetReminderForm();
    checkPermission();
    const showKeyboardSubscription = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        handleChangeKeyboardShow(true);
      },
    );

    const hideKeyboardSubscription = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        handleChangeKeyboardShow(false);
      },
    );

    const appStateSubscription = AppState.addEventListener('change', () => {
      checkPermission();
    });

    return () => {
      showKeyboardSubscription.remove();
      hideKeyboardSubscription.remove();
      appStateSubscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const onSubmitReminder = (data: IReminderForm) => {
    const formData = {
      title: data.titleReminder,
      date: new Date(reminderDate),
      showNotification: showNotif,
      createdAt: new Date().getTime(),
    };
    console.log('formData: ', formData);
    goBack();
  };

  const isValidReminder = isValid && reminderDate;

  const minimunDate = moment(new Date(), 'YYYY-MM-DD').toString().split('T')[0];

  const resetReminderForm = () => {
    setKeyboardShow(keyboardShowInitialState);
    setReminderDate(reminderDateInitialState);
    setShowNotif(showNotifInitialstate);
    resetForm();
  };

  return {
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
    handleToggleShowNotification,
    haveNotifPermissions,
    hadleOpenSettings,
  };
};
