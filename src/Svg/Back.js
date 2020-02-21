import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBack = props => (
  <Svg height={20} width={20} viewBox="0 0 512 512" {...props}>
    <Path fill="#000" stroke="#000" d="M491.318 235.318H20.682C9.26 235.318 0 244.578 0 256c0 11.423 9.26 20.682 20.682 20.682h470.636c11.423 0 20.682-9.259 20.682-20.682 0-11.422-9.259-20.682-20.682-20.682z" />
    <Path fill="#000" stroke="#000"  d="M49.932 256L211.795 94.136c8.077-8.077 8.077-21.172 0-29.249-8.077-8.076-21.172-8.076-29.249 0L6.058 241.375c-8.077 8.077-8.077 21.172 0 29.249l176.488 176.488a20.616 20.616 0 0 0 14.625 6.058 20.616 20.616 0 0 0 14.625-6.058c8.077-8.077 8.077-21.172 0-29.249L49.932 256z" />
  </Svg>
);

export default SvgBack;
