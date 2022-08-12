import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useProfileSelectors } from '../../../../store/reducers/profile/selectors';
import { Button } from '../../../common/components/button';
import { ColorOption } from '../../../common/components/colorOption';
import { Header } from '../../../common/components/header';
import { LayoutContainer } from '../../../common/components/layoutContainer';
import { LayoutContent } from '../../../common/components/layoutContent';
import { Text } from '../../../common/components/text';
import { colors } from '../../../common/utils/theme';
import { actResetStoreData } from '../../../../store/reducers';
import { profileStyles } from '../../styles/screens/profile';

export const ProfileScreen: React.FC = () => {
  const { getProfileSelector } = useProfileSelectors();
  const { nickname, colorPreference } = useSelector(getProfileSelector);
  const dispatch = useDispatch();
  const {
    customstylesHeader,
    containerUserInfo,
    containerUserInfoLabels,
    containerBottom,
  } = profileStyles;
  return (
    <LayoutContainer>
      <Header customStyle={customstylesHeader}>Profile</Header>
      <LayoutContent>
        <View style={containerUserInfo}>
          <ColorOption
            showChildren
            width={85}
            color={colorPreference?.color || colors.primary}>
            <Text type="title" color={colors.white}>
              {nickname[0]}
            </Text>
          </ColorOption>
          <View style={containerUserInfoLabels}>
            <Text type="title">{nickname}</Text>
            <Text type="textMuted" color={colors.textMuted}>
              You dont have task created
            </Text>
          </View>
        </View>
        <View style={containerBottom}>
          <Button
            contentType="text"
            onPress={() => actResetStoreData(dispatch)}>
            Clear data
          </Button>
        </View>
      </LayoutContent>
    </LayoutContainer>
  );
};
