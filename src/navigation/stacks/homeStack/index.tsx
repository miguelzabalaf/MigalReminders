import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  HOME_SCREEN,
  REMINDER_FORM_MODAL,
} from '../../../modules/common/constants';
import { HomeScreen } from '../../../modules/home/screens/home';
import { ReminderForm } from '../../../modules/reminders/screens/reminderForm';

export type HomeStackParamList = {
  HomeScreen: undefined;
  ReminderFormModal: { editMode: boolean };
};

export const HomeStack: React.FC = () => {
  const HomeStackNavigator = createNativeStackNavigator<HomeStackParamList>();

  return (
    <HomeStackNavigator.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{ headerShown: false }}>
      <HomeStackNavigator.Screen name={HOME_SCREEN} component={HomeScreen} />
      <HomeStackNavigator.Group
        screenOptions={{
          presentation: 'formSheet',
          animation: 'slide_from_bottom',
          autoHideHomeIndicator: true,
        }}>
        <HomeStackNavigator.Screen
          name={REMINDER_FORM_MODAL}
          component={ReminderForm}
          initialParams={{ editMode: false }}
        />
      </HomeStackNavigator.Group>
    </HomeStackNavigator.Navigator>
  );
};
