import React, {useContext} from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';
import VoteCard from '../components/VoteCard';
import VotesContext from '../context/DataContext';
import style from '../styles/VotesContainerStyle';
import colors from '../styles/BaseStyle';

const VotesContainer = () => {
  const {votes} = useContext(VotesContext);
  const renderVoteCard = ({item}) => {
    return <VoteCard vote={item} />;
  };

  return votes.length > 0 ? (
    <FlatList
      style={style.container}
      data={votes}
      renderItem={renderVoteCard}
      keyExtractor={(vote) => vote.vote_id.toString()}
    />
  ) : (
    <View style={style.container}>
      <ActivityIndicator size="large" color={colors.accent} />
    </View>
  );
};

export default VotesContainer;
