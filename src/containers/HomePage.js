import React from 'react-native';
import {View} from 'react';
import style from '../styles/HomePageStyle';
import SearchBar from '../components/SearchBar';
import VotesContainer from '../containers/VotesContainer';

const HomePage = () => {
  const votes = [
    {
      id: 0,
      first_name: 'Ime 1',
      last_name: 'Prezime 1',
      status: 0,
      parent_name: 'Roditelj 1',
    },
    {
      id: 1,
      first_name: 'Ime 2',
      last_name: 'Prezime 2',
      status: 0,
      parent_name: 'Roditelj 2',
    },
    {
      id: 2,
      first_name: 'Ime 3',
      last_name: 'Prezime 3',
      status: 0,
      parent_name: 'Roditelj 3',
    },
    {
      id: 3,
      first_name: 'Ime 4',
      last_name: 'Prezime 4',
      status: 0,
      parent_name: 'Roditelj 4',
    },
    {
      id: 4,
      first_name: 'Ime 5',
      last_name: 'Prezime 5',
      status: 0,
      parent_name: 'Roditelj 5',
    },
  ];

  return (
    <View style={style.container}>
      <SearchBar />
      <VotesContainer data={votes} style={style.votesContainer} />
    </View>
  );
};

export default HomePage;
