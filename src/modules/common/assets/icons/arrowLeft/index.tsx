import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { colors } from '../../../utils/theme';

export const IconArrowLeft: React.FC<SvgProps> = props => {
  return (
    <Svg
      width={props.width ?? '24'}
      height={props.height ?? '24'}
      viewBox="0 0 16 16"
      fill="none"
      {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 8C15 7.72386 14.7761 7.5 14.5 7.5L2.70711 7.5L5.85355 4.35355C6.04882 4.15829 6.04882 3.84171 5.85355 3.64645C5.65829 3.45118 5.34171 3.45118 5.14645 3.64645L1.14645 7.64645C0.951184 7.84171 0.951184 8.15829 1.14645 8.35355L5.14645 12.3536C5.34171 12.5488 5.65829 12.5488 5.85355 12.3536C6.04882 12.1583 6.04882 11.8417 5.85355 11.6464L2.70711 8.5H14.5C14.7761 8.5 15 8.27614 15 8Z"
        fill={props.color ?? colors.textMuted}
      />
    </Svg>
  );
};
