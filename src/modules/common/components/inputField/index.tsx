import React, { ReactNode } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import { Controller } from 'react-hook-form';
import { inputFieldStyles } from '../../styles/components/inputField';

interface InputFieldProps extends TextInputProps {
  label: string;
  name: string;
  errors: Object;
  icon?: ReactNode;
  control: any;
  onPressIcon?: () => void;
}

export const InputField: React.FC<InputFieldProps> = props => {
  const {
    containerInput,
    iconComponent,
    input,
    inputNoEditable,
    inputContainer,
    inputLabel,
    inputFieldContent,
    // inputErrorMessage,
  } = inputFieldStyles;
  return (
    <View style={inputContainer}>
      <Text style={inputLabel}>{props.label}</Text>
      <View style={inputFieldContent}>
        <Controller
          name={props.name}
          control={props.control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={containerInput}>
              <TextInput
                style={[input, !props.editable && inputNoEditable]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                {...props}
              />
              {props.icon && (
                <TouchableOpacity
                  style={iconComponent}
                  onPress={props.onPressIcon}>
                  {props.icon}
                </TouchableOpacity>
              )}
            </View>
          )}
        />
      </View>
      {/* {errors && errors[name] && (
        <Text style={formStyles.inputErrorMessage}>
          {errors[name]?.message}
        </Text>
      )} */}
    </View>
  );
};
