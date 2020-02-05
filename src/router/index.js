import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {LoginStack} from './stackNavigator';
import {SplashScreenStack} from './stackNavigator';
import {AppStack} from './tabNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen: SplashScreenStack,
      Login: LoginStack,
      App: AppStack,
    },
    {initialRouteName: 'SplashScreen'},
  ),
);
