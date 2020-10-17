import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import style from '../styles/HomePageStyle';
import SearchBar from '../components/SearchBar';
import VotesContainer from '../containers/VotesContainer';
import data from '../utils/data';


const HomePage = ({navigation}) => {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    setVotes(data);
  }, [votes]);

  return (
    <View style={style.container}>
      <SearchBar />
      <VotesContainer votes={votes} />
    </View>
  );
};

export default HomePage;
