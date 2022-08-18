import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { colors } from '../../../utils/theme';

export const IconInfo: React.FC<SvgProps> = props => {
  return (
    <Svg
      width={props.width ?? '16'}
      height={props.width ?? '16'}
      viewBox="0 0 16 16"
      fill="none"
      {...props}>
      <Path
        d="M8.9307 6.58789L6.63969 6.875L6.55766 7.25586L7.00883 7.33789C7.3018 7.4082 7.36039 7.51367 7.29594 7.80664L6.55766 11.2754C6.3643 12.1719 6.66312 12.5938 7.36625 12.5938C7.91117 12.5938 8.54398 12.3418 8.83109 11.9961L8.91898 11.5801C8.71977 11.7559 8.4268 11.8262 8.23344 11.8262C7.95805 11.8262 7.85844 11.6328 7.92875 11.293L8.9307 6.58789Z"
        fill={props.color ?? colors.textMuted}
      />
      <Path
        d="M9 4.5C9 5.05228 8.55228 5.5 8 5.5C7.44772 5.5 7 5.05228 7 4.5C7 3.94772 7.44772 3.5 8 3.5C8.55228 3.5 9 3.94772 9 4.5Z"
        fill={props.color ?? colors.textMuted}
      />
    </Svg>
  );
};
