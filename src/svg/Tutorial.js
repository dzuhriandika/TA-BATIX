import React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgTutorial(props) {
  return (
    <Svg width={19} height={21} viewBox="0 0 19 21" fill="none" {...props}>
      <Path
        d="M2.977 20.77c-.53 0-1.04-.21-1.415-.582a1.981 1.981 0 01-.585-1.405V2.882c0-.527.21-1.033.585-1.405A2.006 2.006 0 012.977.894h1v6.957l2.5-1.49 2.5 1.49V.894h6c.53 0 1.039.21 1.414.583.375.372.586.878.586 1.405v7.453a6.518 6.518 0 00-2.5-.497A6.52 6.52 0 009.88 11.73a6.44 6.44 0 00-1.903 4.568c0 1.74.69 3.31 1.81 4.472h-6.81zm11.5-8.944c2.5 0 4.5 1.988 4.5 4.472 0 2.485-2 4.472-4.5 4.472s-4.5-1.987-4.5-4.472c0-2.484 2-4.472 4.5-4.472zm-1.43 1.988v4.969l3.93-2.485-3.93-2.484z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={9.977}
          y1={0.894}
          x2={9.977}
          y2={20.77}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#803DEC" />
          <Stop offset={1} stopColor="#6117DA" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgTutorial;
