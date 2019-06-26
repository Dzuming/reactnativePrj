import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ListScreen from '../screens/List';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};



export const ListStack = createStackNavigator({
  ListScreen: ListScreen,
});

export const Tabs = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});


const RootStack = createStackNavigator({
  Tabs: {
      screen: Tabs,
      navigationOptions: ({ navigation }) => ({
          gesturesEnabled: true,
          tabBarVisible: true,
      })
  },
  ListStack: {
      screen: ListStack,
      navigationOptions: ({ navigation }) => ({
          gesturesEnabled: true,
          tabBarVisible: true,
      })
  },


},
{
//  headerMode: 'none',
  mode: 'modal',
  defaultNavigationOptions: {
   title: 'home ekran',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },

}
);
export default createAppContainer(RootStack);