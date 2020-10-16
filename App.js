import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';
import Navigator from './src/navigation/Navigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>Above HOME</Text>
        <HomePage />
        <Text>Below HOME</Text>
      </View> */}
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
