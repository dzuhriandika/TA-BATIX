import React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgTest(props) {
  return (
    <Svg width={17} height={22} viewBox="0 0 17 22" fill="none" {...props}>
      <Path
        d="M14.03 2.874h-3.337A2.664 2.664 0 008.023.221a2.664 2.664 0 00-2.669 2.653H2.018a1.996 1.996 0 00-2.002 1.99v14.59c0 1.098.896 1.99 2.002 1.99H14.03a1.996 1.996 0 002.002-1.99V4.864c0-1.099-.897-1.99-2.002-1.99zM4.02 17.796a.996.996 0 110-1.99.996.996 0 110 1.99zm0-3.98a.996.996 0 110-1.989.996.996 0 110 1.99zm0-3.979a.996.996 0 110-1.99.995.995 0 110 1.99zM8.024 1.88a.996.996 0 110 1.99.995.995 0 110-1.99zm5.338 15.254c0 .182-.15.331-.334.331H7.023a.334.334 0 01-.334-.331v-.664c0-.182.15-.331.334-.331h6.005c.184 0 .334.149.334.331v.663zm0-3.98c0 .183-.15.332-.334.332H7.023a.334.334 0 01-.334-.332v-.663c0-.182.15-.331.334-.331h6.005c.184 0 .334.149.334.331v.663zm0-3.979c0 .183-.15.332-.334.332H7.023a.334.334 0 01-.334-.332v-.663c0-.182.15-.331.334-.331h6.005c.184 0 .334.149.334.331v.663z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={8.024}
          y1={0.221}
          x2={8.024}
          y2={21.443}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EF883D" />
          <Stop offset={1} stopColor="#E06C17" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgTest;
