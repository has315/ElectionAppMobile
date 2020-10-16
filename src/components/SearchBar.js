import React, {useEffect, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import style from '../styles/SearchBarStyle';

const PADDING = 10;

const SearchBar = () => {
  const searchKeys = {
    full_name: 'Ime i Prezime',
    first_name: 'Ime',
    parent_name: 'Ime roditelja',
    last_name: 'Prezime',
  };
  const [searchPhrase, setSearchPhrase] = useState('');
  const [selectedKey, setSelectedKey] = useState(Object.keys(searchKeys)[0]);

  const search = () => {};

  return (
    <View style={style.container}>
      <View style={{padding: PADDING, ...style.centerContent}}>
        <Icon style={style.searchIcon} name="search" size={20} />
        {/* <Picker
          prompt="Filter"
          selectedValue={selectedKey}
          onValueChange={(k, i) => setSelectedKey(k)}>
          {Object.entries(searchKeys).map(([k, v], index) => (
            <Picker.Item key={index} label={v} value={k} />
          ))}
        </Picker> */}
      </View>
      <TextInput
        style={style.textInput}
        value={searchPhrase}
        placeholder="Pretraga"
        onChangeText={(text) => setSearchPhrase(text)}
      />
    </View>
  );
};

export default SearchBar;
