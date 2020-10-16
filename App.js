import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomePage from './src/containers/HomePage';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Above HOME</Text>
      <HomePage />
      <Text>Below HOME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
