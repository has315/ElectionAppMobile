import React, {useEffect, useState} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import style from '../styles/SearchBarStyle';

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('text');

  const search = () => {};

  return (
    <View style={style.container}>
      <TextInput
        value={searchPhrase}
        placeholder="Search..."
        onChangeText={(text) => setSearchPhrase(text)}
      />
      <Button
        icon={{
          name: 'arrow-right',
          size: 15,
          color: 'white',
        }}
        title="Button with icon object"
      />
    </View>
  );
};

export default SearchBar;
