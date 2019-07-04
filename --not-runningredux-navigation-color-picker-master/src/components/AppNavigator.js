import React from 'react';
import { addNavigationHelpers, createStackNavigator } from 'react-navigation';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import MainPage from './MainPage';
import ChooseColorPage from './ChooseColorPage';

export const AppNavigator = createStackNavigator({
    Main: { screen: MainPage },
    ChooseColor: { 
        screen: ChooseColorPage, 
        navigationOptions: {
            headerLeft: null,
        } 
    }
}, {
    initialRouteName: 'Main',
    mode: 'modal'
});
  
const AppWithNavigationState = ({ dispatch, nav }) => (
 

    <AppNavigator navigation={{
  dispatch,
  state: nav ,

}} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});
  
export default connect(mapStateToProps)(AppWithNavigationState);
