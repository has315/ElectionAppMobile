import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: 250,
    padding: 15,
    backgroundColor: 'black',

},
  text:{
      color:'white',
      textAlign: 'center'
},
})

export default Header