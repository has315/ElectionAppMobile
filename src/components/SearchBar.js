import React, {useEffect, useReducer, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import style from '../styles/SearchBarStyle';
import VotesAPI from '../api/VotesAPI';

const PADDING = 10;
const user = {
  id: 1,
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiY2l0eSI6bnVsbCwidm90ZV91bml0IjpudWxsLCJ2b3RpbmdfYm94IjpudWxsLCJhY2NvdW50X2xldmVsIjowLCJqdGkiOiIySklKQ01WZ0RPIiwiaWF0IjoxNjAyNzA0MzMxfQ.exAAGJfkQUmRjiLhifC45BURlrolPJy1hJvJQ9-eQZI',
};
const searchKeys = {
  full_name: 'Ime i Prezime',
  first_name: 'Ime',
  parent_name: 'Ime roditelja',
  last_name: 'Prezime',
};

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [selectedKey, setSelectedKey] = useState(Object.keys(searchKeys)[0]);

  const search = () => {
    let config = {
      headers: {authorization: user.token},
      params: {
        id: user.id,
        key: selectedKey,
        value: searchPhrase.trim(),
        start: 0,
        direction: 'next',
      },
    };

    VotesAPI.searchVotes({}, config)
      .then((data) =>
        // TODO: Assign data.response to votes from HomePage
        console.log(data.response.length),
      )
      .catch((err) => console.error(err));
  };

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
        onSubmitEditing={search}
      />
    </View>
  );
};

export default SearchBar;
