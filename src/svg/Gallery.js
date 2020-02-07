import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M22.086 3.4c-.134-.528-.787-.959-1.452-.959H3.366c-.666 0-1.319.43-1.452.959L1.673 4.84h20.653l-.24-1.441zm1.208 2.641H.704a.696.696 0 00-.692.762L1.12 20.806a.924.924 0 00.919.835h19.92a.925.925 0 00.92-.835l1.108-14.003a.694.694 0 00-.693-.762zm-8.369 4.05a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25zM6.6 16.841l2.983-6.857 3.393 5.491 2.908-1.444 1.516 2.81H6.6z"
          fill="#C4C4C4"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 .041h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
