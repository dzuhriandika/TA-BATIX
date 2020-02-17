import React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgMateri(props) {
  return (
    <Svg width={19} height={20} viewBox="0 0 19 20" fill="none" {...props}>
      <Path
        d="M3.94 16H18.93V2a2 2 0 00-2-2h-13c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H3.94c-.462-.012-1.012-.195-1.012-1 0-.805.55-.988 1.012-1zM5.93 4h9v2h-9V4z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={9.929}
          y1={0}
          x2={9.929}
          y2={20}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EC5C3D" />
          <Stop offset={1} stopColor="#DE3D1A" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgMateri;
