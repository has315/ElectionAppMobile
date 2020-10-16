import React from 'react';
import {View, Text, FlatList} from 'react-native';
import VoteCard from '../components/VoteCard';
import style from '../styles/VotesContainerStyle';

const VotesContainer = ({votes}) => {
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
