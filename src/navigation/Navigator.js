import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{title: 'Glasovi'}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
