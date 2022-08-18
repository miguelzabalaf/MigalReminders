import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Animated,
  FlatList,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useProfileSelectors } from '../../../../store/reducers/profile/selectors';
import { activateLayoutAnimation } from '../../../common/animations/layaoutAnimation';
import { IconArrowLeft } from '../../../common/assets/icons/arrowLeft';
import { IconCheck } from '../../../common/assets/icons/check';
import { Button } from '../../../common/components/button';
import { ColorOption } from '../../../common/components/colorOption';
import { Header } from '../../../common/components/header';
import { LayoutContainer } from '../../../common/components/layoutContainer';
import { LayoutContent } from '../../../common/components/layoutContent';
import { Text } from '../../../common/components/text';
import { colorList } from '../../../common/constants';
import { colors } from '../../../common/utils/theme';
import { useColor } from '../../hooks/screens/useColor';
import { colorStyles } from '../../styles/screens/color';

export const ColorScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const customHeaderStyles: StyleProp<ViewStyle> = {
    backgroundColor: 'transparent',
  };
  const {
    colorSelected,
    handleSelectColor,
    onSaveColorPreference,
    scaleValue,
    showCompleteIcon,
    positionColor,
    setPositionColor,
  } = useColor();
  const { getColorPreferenceSelector } = useProfileSelectors();
  const colorPreference = useSelector(getColorPreferenceSelector);

  return (
    <View style={colorStyles.containerComponent}>
      <LayoutContainer>
        <Header
          iconLeft={<IconArrowLeft />}
          customStyle={customHeaderStyles}
          onPressIconLeft={goBack}
        />
        <LayoutContent>
          <Text type={'subTitle'}>
            Select the color that most appeals to you
          </Text>
          <View style={colorStyles.containerList}>
            <FlatList
              style={colorStyles.list}
              data={colorList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.75}
                  onPress={ev => {
                    setPositionColor({
                      x: ev.nativeEvent.pageX,
                      y: ev.nativeEvent.pageY,
                    });
                    activateLayoutAnimation({
                      duration: 300,
                      type: 'easeInEaseOut',
                      creationProp: 'opacity',
                    });
                    handleSelectColor(item);
                  }}
                  style={colorStyles.containerListItem}>
                  <ColorOption
                    showChildren={colorSelected?.id === item.id}
                    width={85}
                    color={item.color}>
                    <IconCheck width={25} height={25} color={colors.white} />
                  </ColorOption>
                </TouchableOpacity>
              )}
              numColumns={2}
            />
          </View>
          <View style={colorStyles.contentBottomContinueButton}>
            <Button
              disabled={!colorSelected}
              onPress={onSaveColorPreference}
              contentType="text">
              Continue
            </Button>
          </View>
        </LayoutContent>
      </LayoutContainer>
      <Animated.View
        style={[
          {
            transform: [{ scale: scaleValue }],
            backgroundColor: colorPreference?.color,
            top: positionColor.y,
            left: positionColor.x,
          },
          colorStyles.containerGlobe,
        ]}
      />
      {showCompleteIcon && (
        <View style={colorStyles.containerCheckIcon}>
          <IconCheck width={75} height={75} color={colors.white} />
        </View>
      )}
    </View>
  );
};
