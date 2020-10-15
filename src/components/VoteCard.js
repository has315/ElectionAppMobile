import React, {useState} from 'react';
import {Text, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const VoteCard = (vote) => {
  const [status, setStatus] = useState(vote.state);

  return Object.entries(vote).map((k, v) => (
    <Text>
      {k}: {v}
    </Text>
  ));
};

export default VoteCard;
