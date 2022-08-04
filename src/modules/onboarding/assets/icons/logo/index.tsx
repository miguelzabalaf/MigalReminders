import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const IconLogo: React.FC<SvgProps> = props => {
  return (
    <Svg
      width={props.width ?? '244'}
      height={props.height ?? '187'}
      viewBox={'0 0 244 187'}
      fill="none"
      {...props}>
      <Path
        d="M65.9582 14.6577C71.7933 2.1442 86.6678 -3.26968 99.1813 2.56546C111.695 8.4006 117.109 23.2751 111.274 35.7886L47.8808 171.735C42.0457 184.248 27.1712 189.662 14.6577 183.827C2.14419 177.992 -3.26969 163.117 2.56545 150.604L65.9582 14.6577Z"
        fill={props.color ?? '#1D1C1D'}
      />
      <Path
        d="M150.878 14.8539C156.713 2.34043 171.587 -3.07345 184.101 2.76169C196.614 8.59683 202.028 23.4713 196.193 35.9848L132.8 171.931C126.965 184.445 112.091 189.858 99.5772 184.023C87.0637 178.188 81.6498 163.314 87.485 150.8L150.878 14.8539Z"
        fill={props.color ?? '#1D1C1D'}
      />
      <Path
        d="M196.108 100.14C201.943 87.627 216.818 82.2131 229.331 88.0483C241.845 93.8834 247.259 108.758 241.423 121.271L220.292 166.587C214.457 179.1 199.583 184.514 187.069 178.679C174.556 172.844 169.142 157.969 174.977 145.456L196.108 100.14Z"
        fill={props.color ?? '#1D1C1D'}
      />
    </Svg>
  );
};
