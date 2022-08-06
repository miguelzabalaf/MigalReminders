import React from 'react';
import { StatusBar, View } from 'react-native';
import { Content } from '../../components/content';
import { Header } from '../../components/header';
import { onboardingStyles } from '../../styles/screens/onboarding';

export const OnboardingScreen: React.FC = () => {
  return (
    <View style={onboardingStyles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <Header />
      <Content
        title={'Hi there, this is Migal'}
        subTitle={'Your new personal time management app'}
      />
    </View>
  );
};
