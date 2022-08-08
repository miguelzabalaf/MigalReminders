import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  HELLO_SCREEN,
  ONBOARDING_SCREEN,
} from '../../../modules/common/constants';
import { HelloScreen } from '../../../modules/onboarding/screens/hello';
import { OnboardingScreen } from '../../../modules/onboarding/screens/onboarding';

export const OnboardingStack: React.FC = () => {
  // Stack Navigator
  const OnboardingStackNavigator = createNativeStackNavigator();

  return (
    <OnboardingStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <OnboardingStackNavigator.Screen
        name={ONBOARDING_SCREEN}
        component={OnboardingScreen}
      />
      <OnboardingStackNavigator.Screen
        name={HELLO_SCREEN}
        component={HelloScreen}
      />
    </OnboardingStackNavigator.Navigator>
  );
};
