import React, { PropsWithChildren } from 'react';
import {
  StyleProp,
  Text as TextComponent,
  TextProps,
  TextStyle,
} from 'react-native';
import { textStyles } from '../../styles/components/text';
import { colors } from '../../utils/theme';

type TextTypeContent = 'title' | 'subTitle' | 'text' | 'textMuted';

interface TextComponentProps extends TextProps {
  type: TextTypeContent;
  color?: string;
  customStyle?: StyleProp<TextStyle>;
}

export const Text: React.FC<PropsWithChildren<TextComponentProps>> = props => {
  const getStylesByType = textStyles[props.type] ?? textStyles.text;
  return (
    <TextComponent
      style={[
        getStylesByType,
        { color: props.color ?? colors.text },
        props.customStyle,
      ]}>
      {props.children}
    </TextComponent>
  );
};
