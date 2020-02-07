import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgArrow = props => (
  <Svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M5.75 4L10.25 8.5L5.75 13"
      stroke="#FF3E71"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default SvgArrow;
