import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { colors } from '../../../utils/theme';

export const IconCheck: React.FC<SvgProps> = props => {
  return (
    <Svg
      width={props.width ?? '16'}
      height={props.height ?? '16'}
      viewBox="0 0 16 16"
      fill="none"
      {...props}>
      <Path
        d="M12.7365 3.96967C13.0255 3.67678 13.4942 3.67678 13.7832 3.96967C14.0687 4.25897 14.0722 4.72582 13.7937 5.01947L7.88025 12.0097C7.87456 12.0169 7.86848 12.0238 7.86205 12.0303C7.573 12.3232 7.10437 12.3232 6.81532 12.0303L3.21678 8.38388C2.92774 8.09099 2.92774 7.61612 3.21678 7.32322C3.50583 7.03033 3.97446 7.03033 4.26351 7.32322L7.31638 10.4167L12.7169 3.9921C12.723 3.98424 12.7295 3.97674 12.7365 3.96967Z"
        fill={props.color ?? colors.textMuted}
      />
    </Svg>
  );
};
