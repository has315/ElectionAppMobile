import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';
import LoginService from '../services/LoginService';

const Stack = createStackNavigator();

const screenOptions = {
  headerLeft: ({canGoBack, onPress}) =>
    canGoBack && (
      <Icon
        name="chevron-left"
        onPress={() => {
          onPress();
        }}
        color="#333"
        size={40}
      />
    ),
};

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{title: 'SPS Glasovi'}}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{title: 'Glasovi'}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
