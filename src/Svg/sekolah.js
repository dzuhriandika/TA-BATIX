import React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSekolah(props) {
  return (
    <Svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.59277 7.5L10.3428 2.5L19.0928 7.5L10.3428 12.5L1.59277 7.5Z"
        stroke="#29291E"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.71777 9.375V14.375L10.3428 17.5L15.9678 14.375V9.375"
        stroke="#29291E"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.0928 14.375V7.5"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.3428 12.5V17.5"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default SvgSekolah;
