import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgLocked = props => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M15.9259 7.44926V5.37037C15.9259 2.40926 13.2674 0 10 0C6.73261 0 4.07409 2.40926 4.07409 5.37037V7.44926C2.81446 7.6663 1.85187 8.76407 1.85187 10.0852V17.323C1.85187 18.7989 3.05298 20 4.52927 20H15.4708C16.9471 20 18.1482 18.7989 18.1482 17.3226V10.0848C18.1482 8.76407 17.1856 7.6663 15.9259 7.44926ZM4.81483 5.37037C4.81483 2.81741 7.14076 0.740741 10 0.740741C12.8593 0.740741 15.1852 2.81741 15.1852 5.37037V7.40741H4.81483V5.37037ZM17.4074 17.3226C17.4074 18.3904 16.5385 19.2593 15.4708 19.2593H4.52927C3.4615 19.2593 2.59261 18.3904 2.59261 17.3226V10.0848C2.59261 9.01704 3.4615 8.14815 4.52927 8.14815H15.4708C16.5385 8.14815 17.4074 9.01704 17.4074 10.0848V17.3226Z"
      fill="#C4C4C4"
    />
    <Path
      d="M10 10.3704C9.183 10.3704 8.51855 11.0348 8.51855 11.8519V14.0741C8.51855 14.8911 9.183 15.5556 10 15.5556C10.8171 15.5556 11.4815 14.8911 11.4815 14.0741V11.8519C11.4815 11.0348 10.8171 10.3704 10 10.3704ZM10.7408 14.0741C10.7408 14.4826 10.4086 14.8148 10 14.8148C9.59152 14.8148 9.2593 14.4826 9.2593 14.0741V11.8519C9.2593 11.4433 9.59152 11.1111 10 11.1111C10.4086 11.1111 10.7408 11.4433 10.7408 11.8519V14.0741Z"
      fill="#C4C4C4"
    />
  </Svg>
);

export default SvgLocked;
