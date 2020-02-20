import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {LoginStack, ProfileStack} from './stackNavigator';
import {SplashScreenStack} from './stackNavigator';
import {AppStack} from './tabNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen: SplashScreenStack,
      Login: LoginStack,
      Profil: ProfileStack,
      App: AppStack,
    },
    {initialRouteName: 'SplashScreen'},
  ),
);
