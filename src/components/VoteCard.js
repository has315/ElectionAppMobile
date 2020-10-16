import React, {useEffect, useState} from 'react';
import {View, Text, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../styles/VoteCardStyle';
import colors from '../styles/BaseStyle';

const PADDING = 4;

const VoteCard = ({vote}) => {
  const [status, setStatus] = useState(vote.status);
  const toggleStatus = () => setStatus(!status);

  return (
    <View key={vote.vote_id} style={style.container}>
      <View style={{padding: PADDING, ...style.row}}>
        <Icon style={style.iconStyle} name="user" />
        <Text style={style.textColor}>
          {vote.last_name}&nbsp;({vote.parent_name})&nbsp;{vote.first_name}
        </Text>
      </View>
      <View style={{padding: PADDING, ...style.row}}>
        <Icon style={style.iconStyle} name="birthday-cake" />
        <Text style={style.textColor}>{vote.birth_date}</Text>
      </View>
      <View style={{padding: PADDING, ...style.row}}>
        <Text style={style.statusText}>Izašao&nbsp;</Text>
        <Switch
          trackColor={{
            true: colors.secondary,
            false: '#767577',
          }}
          thumbColor={status ? colors.accent : '#F4F3F4'}
          ios_backgroundColor={'#3E3E3E'}
          onValueChange={toggleStatus}
          value={status}
        />
      </View>
    </View>
  );
};

export default VoteCard;
