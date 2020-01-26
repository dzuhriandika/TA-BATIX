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
import BGarudaScreen from '../screens/BatikGaruda';
import BGentonganScreen from '../screens/BatikGentongan';
import BJeparaScreen from '../screens/BatikJepara';
import BKawungScreen from '../screens/BatikKawung';
import BKeratonScreen from '../screens/BatikKeraton';
import BMegaMendungScreen from '../screens/BatikMegaMendung';
import BParangScreen from '../screens/BatikParang';
import BPringSedapurScreen from '../screens/BatikPringSedapur';
import BPriyanganScreen from '../screens/BatikPriyangan';
import BSimbutScreen from '../screens/BatikSimbut';
import BSoganScreen from '../screens/BatikSogan';
import BTujuhRupaScreen from '../screens/BatikTujuhRupa';

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
      navigationOptions: {
        header: null,
      },
    },
    Type: {
      screen: TypeScreen,
    },
    Making: {
      screen: MakingScreen,
    },
    Garuda: {
      screen: BGarudaScreen,
      navigationOptions: {
        header: null,
      },
    },
    Gentongan: {
      screen: BGentonganScreen,
      navigationOptions: {
        header: null,
      },
    },
    Jepara: {
      screen: BJeparaScreen,
      navigationOptions: {
        header: null,
      },
    },
    Kawung: {
      screen: BKawungScreen,
      navigationOptions: {
        header: null,
      },
    },
    Keraton: {
      screen: BKeratonScreen,
      navigationOptions: {
        header: null,
      },
    },
    MegaMendung: {
      screen: BMegaMendungScreen,
      navigationOptions: {
        header: null,
      },
    },
    Parang: {
      screen: BParangScreen,
      navigationOptions: {
        header: null,
      },
    },
    PringSedapur: {
      screen: BPringSedapurScreen,
      navigationOptions: {
        header: null,
      },
    },
    Priyangan: {
      screen: BPriyanganScreen,
      navigationOptions: {
        header: null,
      },
    },
    Simbut: {
      screen: BSimbutScreen,
      navigationOptions: {
        header: null,
      },
    },
    Sogan: {
      screen: BSoganScreen,
      navigationOptions: {
        header: null,
      },
    },
    TujuhRupa: {
      screen: BTujuhRupaScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'Home'},
);

HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

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

QuizTestStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

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

ProfileStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
