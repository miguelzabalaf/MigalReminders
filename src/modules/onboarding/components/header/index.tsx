import React from 'react';
import { Text, View } from 'react-native';
import { headerStyles } from '../../styles/components/header';

export const Header: React.FC = () => {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.containerRight}>
        <Text style={headerStyles.containerRightText}>Reminders</Text>
        <Text style={headerStyles.containerRightText}>Tasks</Text>
      </View>
    </View>
  );
};
