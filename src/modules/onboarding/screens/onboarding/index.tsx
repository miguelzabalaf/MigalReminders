import React from 'react';
import { StatusBar, View } from 'react-native';
import { Header } from '../../components/header';
import { onboardingStyles } from '../../styles/screens/onboarding';
export const OnboardingScreen: React.FC = () => {
  return (
    <View style={onboardingStyles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <Header />
    </View>
  );
};
