import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import style from '../styles/HomePageStyle';
import SearchBar from '../components/SearchBar';
import VotesContainer from '../containers/VotesContainer';
import VotesContext from '../context/VotesContext';
import DataUtils from '../utils/data';
import VotesAPI from '../api/VotesAPI';

const HomePage = ({navigation}) => {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    let dir = 'next';
    let config = {
      headers: {authorization: DataUtils.user.token},
      params: {id: DataUtils.user.id, start: '0', direction: dir},
    };

    VotesAPI.getVotes({}, config)
      .then((resp) => {
        let response = 'response';
        if (response in resp) {
          setVotes(resp.response);
        } else {
          console.log(resp);
        }
      })
      .catch((err) => console.error(err));
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
