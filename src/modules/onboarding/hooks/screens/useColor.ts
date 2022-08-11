import React from 'react';
import { useSelector } from 'react-redux';
import { useOnboardingActions } from '../../../../reducers/onboarding/actions';
import { useProfileActions } from '../../../../reducers/profile/actions';
import { useProfileSelectors } from '../../../../reducers/profile/selectors';
import { activateLayoutAnimation } from '../../../common/animations/layaoutAnimation';
import { useReboundAnimation } from '../../../common/animations/rebound';
import { IColorListItem } from '../../../common/constants/index';

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

  const configScale = {
    scale1: { toValue: 1600, duration: 300 },
    scale2: { toValue: 1600, duration: 0 },
    scale3: { toValue: 2000, duration: 600 },
  };

  const { scaleValue, handleScale } = useReboundAnimation(configScale, () => {
    setShowCompleteIcon(true);
    activateLayoutAnimation({
      duration: 300,
      creationProp: 'scaleXY',
      type: 'easeInEaseOut',
    });
    setTimeout(() => {
      actSetFirstSessionDate(new Date().getTime());
      actChangeOnboardingComplete(true);
    }, 1500);
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
  };
};
