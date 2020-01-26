import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {LoginStack} from './stackNavigator';
import {AppStack} from './tabNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStack,
      App: AppStack,
    },
    {initialRouteName: 'App'},
  ),
);
