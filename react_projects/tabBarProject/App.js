import React, {Component} from 'react';
//https://reactnativecode.com/create-bottom-tab-navigation-navigator/
import { Image } from 'react-native';

import { createStackNavigator, createBottomTabNavigator, createAppContainer, } from 'react-navigation';

import Home_Activity from './scren/Home_Activity';
import Settings_Activity from './scren/Settings_Activity';
import Details_Activity from './scren/Details_Activity';
import Profile_Activity from './scren/Profile_Activity';
import { Icon } from 'react-native-elements';
const HomeTab = createStackNavigator(
  {
    Home: Home_Activity ,
    Details: Details_Activity ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home Tab',
     
    },
  }
);

const SettingsTab = createStackNavigator(
  {
    Settings: Settings_Activity ,
    Details: Details_Activity ,
    Profile: Profile_Activity ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings Tab',
     
    },
  }
);

const MainApp = createBottomTabNavigator(
  {
  //  Home: HomeTab ,
    'Home': {
      screen: HomeTab,
     headerMode: 'none',
      header: null,
      navigationOptions: {
  
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
      },
      defaultNavigationOptions: {
          title: 'Bookcase ekranı'
      }
  },

    Settings: SettingsTab ,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Icon name="list" type="entypo" size={28} color={tintColor} />

          );
        } else {
          return (
            <Image
              source={ require('./assets/icon.png') }
              style={{ width: 20, height: 20 }} />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);


export default createAppContainer(MainApp);