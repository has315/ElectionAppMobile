import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import style from '../styles/HomePageStyle';
import SearchBar from '../components/SearchBar';
import VotesContainer from '../containers/VotesContainer';
import DataContext from '../context/DataContext';
import VotesAPI from '../api/VotesAPI';
import LoginService from '../services/LoginService';

const HomePage = ({navigation}) => {
  const [votes, setVotes] = useState([]);
  const [user, setUser] = useState(null);

  const formatVote = (vote) => {
    // YYYY-MM-DD
    let date = vote.birth_date.split('T')[0];
    let vars = date.split('-');
    // DD.MM.YYYY.
    vote.birth_date = `${vars[2]}.${vars[1]}.${vars[0]}.`;
    return vote;
  };

  const loadData = async () => {
    if (user) {
      return;
    }
    // Get Logged user
    let loggedUser = await LoginService.getLoggedUser();
    // Set request props
    let dir = 'next';
    let config = {
      headers: {authorization: loggedUser.token},
      params: {id: loggedUser.id, start: '0', direction: dir},
    };

    // Fetch votes
    VotesAPI.getVotes({}, config)
      .then((resp) => {
        let response = 'response';
        if (response in resp) {
          setVotes(resp.response.map((v) => formatVote(v)));
        } else {
          console.log(resp);
        }
      })
      .catch((err) => console.error(err));

    // Set user
    setUser(loggedUser);
  };

  useEffect(() => {
    loadData();
  });

  return (
    <View style={style.container}>
      <DataContext.Provider value={{votes, setVotes, user, setUser}}>
        <SearchBar user={user} />
        <VotesContainer />
      </DataContext.Provider>
    </View>
  );
};

export default HomePage;
