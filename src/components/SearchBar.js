import React, {useContext, useState} from 'react';
import {View, TextInput} from 'react-native';
import VotesContext from '../context/VotesContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataUtils from '../utils/data';
import style from '../styles/SearchBarStyle';
import VotesAPI from '../api/VotesAPI';

const PADDING = 10;
const searchKeys = {
  full_name: 'Ime i Prezime',
  first_name: 'Ime',
  parent_name: 'Ime roditelja',
  last_name: 'Prezime',
};

const SearchBar = () => {
  const {setVotes} = useContext(VotesContext);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [selectedKey, setSelectedKey] = useState(Object.keys(searchKeys)[0]);

  const search = () => {
    let config = {
      headers: {authorization: DataUtils.user.token},
      params: {
        id: DataUtils.user.id,
        key: selectedKey,
        value: searchPhrase.trim(),
        start: 0,
        direction: 'next',
      },
    };

    VotesAPI.searchVotes({}, config)
      .then((data) => {
        console.log(data.response.length);
        setVotes(data.response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <View style={style.container}>
      <View style={{padding: PADDING, ...style.centerContent}}>
        <Icon style={style.searchIcon} name="search" />
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
