import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { Content } from '../../components/content';
import { Header } from '../../components/header';
import { onboardingStyles } from '../../styles/screens/onboarding';
import { useOnboarding } from '../../hooks/screens/useOnboarding';
import { LayoutContent } from '../../../common/components/layoutContent';

export const OnboardingScreen: React.FC<NavigationProp<{}>> = () => {
  const { goToHelloScreen } = useOnboarding();
  return (
    <View style={onboardingStyles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <Header />
      <LayoutContent>
        <Content
          title={'Hi there, this is Migal'}
          subTitle={'Your new personal time management app'}
          onPressButton={goToHelloScreen}
        />
      </LayoutContent>
    </View>
  );
};
