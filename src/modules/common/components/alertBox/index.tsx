import { BlurView } from '@react-native-community/blur';
import React, { PropsWithChildren, ReactNode } from 'react';
import {
  ViewProps,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { alertBoxStyles } from '../../styles/components/alertBox';
import { colors } from '../../utils/theme';
import { Text } from '../text';

interface AlertBoxProps extends ViewProps {
  icon?: ReactNode;
  label: string;
  option1?: string | ReactNode;
  option2?: string | ReactNode;
  onPressOpt1?: () => void;
  onPressOpt2?: () => void;
  color?: string;
  loading?: boolean;
}
interface AlertBoxOptionProps {
  onPress?: AlertBoxProps['onPressOpt1'];
}

export const AlertBox: React.FC<AlertBoxProps> = ({
  icon,
  label,
  option1,
  option2,
  onPressOpt1,
  onPressOpt2,
  color,
  loading,
}) => {
  const {
    container,
    containerInfo,
    containerInfoIcon,
    containerInfoLabel,
    containerOptions,
    containerOption,
    containerInfoLabelStyle,
    ccontainerOptionLabelStyle,
    containerLoading,
    containerLoadingBlur,
    containerLoadingActivityIndicator,
  } = alertBoxStyles;

  const AlertBoxOption: React.FC<PropsWithChildren<AlertBoxOptionProps>> = ({
    children,
    onPress,
  }) => {
    return (
      <TouchableOpacity
        style={containerOption}
        activeOpacity={0.75}
        onPress={onPress}>
        {typeof children === 'string' ? (
          <Text
            type="text"
            color={colors.white}
            customStyle={ccontainerOptionLabelStyle}>
            {children}
          </Text>
        ) : (
          { children }
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[container, { backgroundColor: color }]}>
      {loading && (
        <View style={containerLoading}>
          <BlurView
            style={containerLoadingBlur}
            blurType="light"
            blurAmount={0.5}
          />
          <ActivityIndicator style={containerLoadingActivityIndicator} />
        </View>
      )}
      <View style={containerInfo}>
        {icon && <View style={containerInfoIcon}>{icon}</View>}
        <View style={containerInfoLabel}>
          <Text
            type="text"
            customStyle={containerInfoLabelStyle}
            color={colors.white}>
            {label}
          </Text>
        </View>
      </View>
      <View style={containerOptions}>
        {option1 && (
          <AlertBoxOption onPress={onPressOpt1}>{option1}</AlertBoxOption>
        )}
        {option2 && (
          <AlertBoxOption onPress={onPressOpt2}>{option2}</AlertBoxOption>
        )}
      </View>
    </View>
  );
};
