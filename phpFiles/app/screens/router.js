import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import HomeScreen from './home';
import Login from './login';
import Register from './register';
import Profile from './profile';

const Root = createStackNavigator({
	Home: { screen: HomeScreen },
	Login: { screen: Login },
	Register: {screen: Register},
	Profile: {screen: Profile}
	
 });


 const phpLogin = createAppContainer(Root);
 export default phpLogin;   

