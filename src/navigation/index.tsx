import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingStack } from './stacks/onboardingStack';
import { ONBOARDING_STACK } from '../modules/common/constants/index';

export const Navigation: React.FC = () => {
  const AppStackNavigator = createNativeStackNavigator();
  return (
    <AppStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStackNavigator.Screen
        name={ONBOARDING_STACK}
        component={OnboardingStack}
      />
    </AppStackNavigator.Navigator>
  );
};
