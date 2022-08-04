import React from 'react';
import { Text, View } from 'react-native';
import { headerStyles } from '../../styles/components/header';
import { IconLogo } from '../../assets/icons/logo/index';

export const Header: React.FC = () => {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.containerLeft}>
        <IconLogo width={55} height={42} />
      </View>
      <View style={headerStyles.containerRight}>
        <Text style={headerStyles.containerRightText}>Reminders</Text>
        <Text style={headerStyles.containerRightText}>Tasks</Text>
      </View>
    </View>
  );
};
