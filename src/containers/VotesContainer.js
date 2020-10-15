import React from 'react';
import {Text} from 'react-native';
import VoteCard from '../components/VoteCard';

const VotesContainer = (data) => {
  data.map((vote) => <VoteCard vote={vote} />);
};

export default VotesContainer;
