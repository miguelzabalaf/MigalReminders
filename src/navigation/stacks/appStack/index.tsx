import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { HOME_STACK, PROFILE_SCREEN } from '../../../modules/common/constants';
import { IconHouse } from '../../../modules/common/assets/icons/house';
import { IconPerson } from '../../../modules/common/assets/icons/person';
import { useProfileSelectors } from '../../../store/reducers/profile/selectors';
import { useSelector } from 'react-redux';
import { ProfileScreen } from '../../../modules/profile/screens/profile';
import { HomeStack } from '../homeStack';

export type AppStackParamList = {
  HomeStack: undefined;
  ProfileScreen: undefined;
};

export const AppStack: React.FC = () => {
  // Stack Navigator
  const AppBottomTabNavigator = createBottomTabNavigator<AppStackParamList>();
  const { getColorPreferenceSelector } = useProfileSelectors();
  const colorPreference = useSelector(getColorPreferenceSelector);

  const screenOptions = ({
    route,
  }: {
    route: RouteProp<ParamListBase, string>;
  }): BottomTabNavigationOptions => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: colorPreference?.color,
    tabBarStyle: { elevation: 0 },
    tabBarIcon: ({ focused, color }) => {
      if (route.name === HOME_STACK) {
        return (
          <IconHouse color={color} width={25} height={25} selected={focused} />
        );
      } else if (route.name === PROFILE_SCREEN) {
        return (
          <IconPerson color={color} width={25} height={25} selected={focused} />
        );
      }
    },
  });

  return (
    <AppBottomTabNavigator.Navigator screenOptions={screenOptions}>
      <AppBottomTabNavigator.Screen name={HOME_STACK} component={HomeStack} />
      <AppBottomTabNavigator.Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </AppBottomTabNavigator.Navigator>
  );
};
