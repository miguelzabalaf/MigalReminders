import React from 'react';
import { useSelector } from 'react-redux';
import { useOnboardingActions } from '../../../../store/reducers/onboarding/actions';
import { useProfileActions } from '../../../../store/reducers/profile/actions';
import { useProfileSelectors } from '../../../../store/reducers/profile/selectors';
import { activateLayoutAnimation } from '../../../common/animations/layaoutAnimation';
import { useReboundAnimation } from '../../../common/animations/rebound';
import { IColorListItem } from '../../../common/constants/index';
import PushNotification from 'react-native-push-notification';

export const useColor = () => {
  // Selectors
  const { getColorPreferenceSelector } = useProfileSelectors();
  const colorPreference = useSelector(getColorPreferenceSelector);

  // Actions
  const { actSetColorPreference } = useProfileActions();
  const { actSetFirstSessionDate, actChangeOnboardingComplete } =
    useOnboardingActions();

  // States
  const [colorSelected, setColorSelected] =
    React.useState<IColorListItem | null>(colorPreference);
  const [showCompleteIcon, setShowCompleteIcon] = React.useState(false);
  const [positionColor, setPositionColor] = React.useState({
    x: 0,
    y: 0,
  });

  const configScale = {
    scale1: { toValue: 500, duration: 500 },
    scale2: { toValue: 1500, duration: 250 },
    scale3: { toValue: 5000, duration: 100 },
  };

  const createChannelForPushNotifications = () => {
    PushNotification.createChannel(
      {
        channelId: 'migal-channel',
        channelName: 'Migal Channel',
      },
      ev => console.log('Migal Chanle created: ', ev),
    );
  };

  const { scaleValue, handleScale } = useReboundAnimation(configScale, () => {
    setShowCompleteIcon(true);
    createChannelForPushNotifications();
    activateLayoutAnimation({
      duration: 300,
      creationProp: 'scaleXY',
      type: 'easeInEaseOut',
    });
    setTimeout(() => {
      actSetFirstSessionDate(new Date().getTime());
      actChangeOnboardingComplete(true);
    }, 1000);
  });

  const onSaveColorPreference = () => {
    actSetColorPreference(colorSelected);
    handleScale();
  };

  const handleSelectColor = (color: IColorListItem) => {
    colorSelected?.id === color.id
      ? setColorSelected(null)
      : setColorSelected(color);
  };

  return {
    colorSelected,
    onSaveColorPreference,
    handleSelectColor,
    scaleValue,
    showCompleteIcon,
    positionColor,
    setPositionColor,
  };
};
