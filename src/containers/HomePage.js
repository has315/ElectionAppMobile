import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import style from '../styles/HomePageStyle';
import SearchBar from '../components/SearchBar';
import VotesContainer from '../containers/VotesContainer';
import VotesContext from '../context/VotesContext';
import data from '../utils/data';

const HomePage = ({navigation}) => {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    setVotes(data);
  }, []);

  return (
    <View style={style.container}>
      <VotesContext.Provider value={{votes, setVotes}}>
        <SearchBar />
        <VotesContainer />
      </VotesContext.Provider>
    </View>
  );
};

export default HomePage;
