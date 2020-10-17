import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';
import Navigator from './src/navigation/Navigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
