import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Header from './App/Components/Header'
import ListItem from './App/Components/ListItem'

const App =  () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Kosovo'},
    {id: 2, text: 'Je'},
    {id: 3, text: 'Srbija'},
    {id: 4, text: 'Do'},
    {id: 5, text: 'Tokija'},

  ])

  return (
    <View style={styles.container}>
      <Header title="Bog je Ziv"/>
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} />}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
})

export default App