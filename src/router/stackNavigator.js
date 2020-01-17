import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import HomeScreen from '../screens/Home';
import DefinitionScreen from '../screens/Definition';
import TypeScreen from '../screens/Type';
import MateriScreen from '../screens/Materi';
import QuizTestScreen from '../screens/QuizTest';
import QuizScreen from '../screens/Quiz';
import TestScreen from '../screens/Test';
import ProfileScreen from '../screens/Profile';
import AboutUsScreen from '../screens/AboutUs';
import MakingScreen from '../screens/Making';

export const LoginStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'Login'},
);

export const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Definition: {
      screen: DefinitionScreen,
    },
    Type: {
      screen: TypeScreen,
      Making: {
        screen: MakingScreen,
      },
      Materi: {
        screen: MateriScreen,
      },
    },
  },
  {initialRouteParams: 'Home'},
);

export const QuizTestStack = createStackNavigator(
  {
    QuizTest: {
      screen: QuizTestScreen,
      navigationOptions: {
        header: null,
      },
    },
    Quiz: {
      screen: QuizScreen,
    },
    Test: {
      screen: TestScreen,
    },
  },
  {initialRouteParams: 'QuizTest'},
);

export const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
      },
    },
    AboutUs: {
      screen: AboutUsScreen,
    },
  },
  {initialRouteParams: 'Profile'},
);
