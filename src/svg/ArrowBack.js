import React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M19 11.5H7.83l4.88-4.88a1.008 1.008 0 00-.323-1.636.996.996 0 00-1.087.216l-6.59 6.59a.996.996 0 000 1.41l6.59 6.59a.997.997 0 001.41-1.41L7.83 13.5H19c.55 0 1-.45 1-1s-.45-1-1-1z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
