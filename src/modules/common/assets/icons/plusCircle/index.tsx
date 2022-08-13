import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { colors } from '../../../utils/theme';

export const IconPlusCircle: React.FC<SvgProps> = props => {
  return (
    <Svg
      width={props.width ?? '16'}
      height={props.width ?? '16'}
      viewBox="0 0 16 16"
      fill="none"
      {...props}>
      <Path
        d="M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
        fill={props.color ?? colors.textMuted}
      />
      <Path
        d="M8 4C8.27614 4 8.5 4.22386 8.5 4.5V7.5H11.5C11.7761 7.5 12 7.72386 12 8C12 8.27614 11.7761 8.5 11.5 8.5H8.5V11.5C8.5 11.7761 8.27614 12 8 12C7.72386 12 7.5 11.7761 7.5 11.5V8.5H4.5C4.22386 8.5 4 8.27614 4 8C4 7.72386 4.22386 7.5 4.5 7.5H7.5V4.5C7.5 4.22386 7.72386 4 8 4Z"
        fill={props.color ?? colors.textMuted}
      />
    </Svg>
  );
};
