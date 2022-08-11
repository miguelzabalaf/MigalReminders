import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const ExampleScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Example!</Text>
    </View>
  );
};

export const AppStack: React.FC = () => {
  // Stack Navigator
  const AppStackNavigator = createBottomTabNavigator();

  return (
    <AppStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStackNavigator.Screen name="Home" component={ExampleScreen} />
      <AppStackNavigator.Screen name="Settings" component={ExampleScreen} />
    </AppStackNavigator.Navigator>
  );
};
