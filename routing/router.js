import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AuthLoadingScreen from './AuthLoading';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.


const AppStack = createStackNavigator({ Home: HomeScreen});
const AuthStack = createStackNavigator({ Login: LoginScreen });


export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);