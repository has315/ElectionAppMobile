import React, {useContext, useState} from 'react';
import {View, TextInput} from 'react-native';
import DataContext from '../context/DataContext';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  const {votes, setVotes, user} = useContext(DataContext);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [selectedKey, setSelectedKey] = useState(Object.keys(searchKeys)[0]);

  const formatVote = (vote) => {
    // YYYY-MM-DD
    let date = vote.birth_date.split('T')[0];
    let vars = date.split('-');
    // DD.MM.YYYY.
    vote.birth_date = `${vars[2]}.${vars[1]}.${vars[0]}.`;
    return vote;
  };

  const search = async () => {
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
    let oldVotes = votes;
    setVotes([]);
    VotesAPI.searchVotes({}, config)
      .then((data) => {
        setVotes(data.response.map((v) => formatVote(v)));
      })
      .catch((err) => {
        console.error(err);
        setVotes(oldVotes);
      });
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
