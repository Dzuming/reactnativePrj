/**
 * @format
 */

import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import HomeScreen from './app/screens/home';
import Login from './app/screens/login';
import Register from './app/screens/register';
import Profile from './app/screens/profile';

const Root = createStackNavigator({
	Home: { screen: HomeScreen },
	Login: { screen: Login },
	Register: {screen: Register},
	Profile: {screen: Profile}
	
 });


 const phpLogin = createAppContainer(Root);
 export default phpLogin;   


// AppRegistry.registerComponent('phpLogin', () => phpLogin);

