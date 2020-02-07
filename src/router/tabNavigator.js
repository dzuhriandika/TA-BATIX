/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
<<<<<<< HEAD
import {HomeStack, GalleryStack, ProfileStack} from './stackNavigator';
=======
import {
  HomeStack,
  QuizTestStack,
  ProfileStack,
  SplashScreenStack,
} from './stackNavigator';
>>>>>>> 0d581ebce6a7ad8f7333443fdca8be0efd2edd84

export const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" color={tintColor} size={25} />
        ),
      },
    },
<<<<<<< HEAD
    Gallery: {
      screen: GalleryStack,
=======
    SplashScreen: {
      screen: SplashScreenStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" color={tintColor} size={25} />
        ),
      },
    },
    QuizTest: {
      screen: QuizTestStack,
>>>>>>> 0d581ebce6a7ad8f7333443fdca8be0efd2edd84
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-list" color={tintColor} size={25} />
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-person" color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    labeled: true,
    shifting: false,
    tabBarOptions: {
      activeTintColor: '#FF3E71',
      showLabel: true,
      style: {
        backgroundColor: 'white',
      },
    },
  },
);

export default AppStack;
