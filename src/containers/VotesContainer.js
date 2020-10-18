import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import VoteCard from '../components/VoteCard';
import VotesContext from '../context/VotesContext';
import style from '../styles/VotesContainerStyle';

const VotesContainer = () => {
  const {votes} = useContext(VotesContext);
  const renderVoteCard = ({item}) => {
    return <VoteCard vote={item} />;
  };

  return (
    <FlatList
      style={style.container}
      data={votes}
      renderItem={renderVoteCard}
      keyExtractor={(vote) => vote.vote_id.toString()}
    />
  );
};

export default VotesContainer;
