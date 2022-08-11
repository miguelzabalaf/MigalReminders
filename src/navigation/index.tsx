import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingStack } from './stacks/onboardingStack';
import { ONBOARDING_STACK, APP_STACK } from '../modules/common/constants/index';
import { useOnboardingSelectors } from '../store/reducers/onboarding/selectors';
import { useSelector } from 'react-redux';
import { AppStack } from './stacks/appStack';

export const Navigation: React.FC = () => {
  const AppStackNavigator = createNativeStackNavigator();
  const { getOnboardingSelector } = useOnboardingSelectors();
  const { onboardingCompleate } = useSelector(getOnboardingSelector);
  return (
    <AppStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {onboardingCompleate ? (
        <AppStackNavigator.Screen name={APP_STACK} component={AppStack} />
      ) : (
        <AppStackNavigator.Screen
          name={ONBOARDING_STACK}
          component={OnboardingStack}
        />
      )}
    </AppStackNavigator.Navigator>
  );
};
