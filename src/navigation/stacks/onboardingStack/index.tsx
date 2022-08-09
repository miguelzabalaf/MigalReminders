import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  COLOR_SCREEN,
  HELLO_SCREEN,
  ONBOARDING_SCREEN,
} from '../../../modules/common/constants';
import { ColorScreen } from '../../../modules/onboarding/screens/color';
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
      <OnboardingStackNavigator.Screen
        name={COLOR_SCREEN}
        component={ColorScreen}
      />
    </OnboardingStackNavigator.Navigator>
  );
};
