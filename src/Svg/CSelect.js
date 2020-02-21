import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgAccount = props => (
  <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx="12.5" cy="12.5" r="12.5" fill="white" />
    <Path
      d="M12.852 17.14C11.8627 17.14 10.9667 16.9253 10.164 16.496C9.37067 16.0573 8.74533 15.4553 8.288 14.69C7.84 13.9247 7.616 13.0613 7.616 12.1C7.616 11.1387 7.84467 10.2753 8.302 9.51C8.75933 8.74467 9.38467 8.14733 10.178 7.718C10.9807 7.27933 11.8767 7.06 12.866 7.06C13.6687 7.06 14.4013 7.2 15.064 7.48C15.7267 7.76 16.2867 8.166 16.744 8.698L15.568 9.804C14.8587 9.03867 13.986 8.656 12.95 8.656C12.278 8.656 11.676 8.80533 11.144 9.104C10.612 9.39333 10.1967 9.79933 9.898 10.322C9.59933 10.8447 9.45 11.4373 9.45 12.1C9.45 12.7627 9.59933 13.3553 9.898 13.878C10.1967 14.4007 10.612 14.8113 11.144 15.11C11.676 15.3993 12.278 15.544 12.95 15.544C13.986 15.544 14.8587 15.1567 15.568 14.382L16.744 15.502C16.2867 16.034 15.722 16.44 15.05 16.72C14.3873 17 13.6547 17.14 12.852 17.14Z"
      fill="#FF4057"
    />
  </Svg>
);

export default SvgAccount;
