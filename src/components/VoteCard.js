import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../styles/VoteCardStyle';
import colors from '../styles/BaseStyle';
import VotesAPI from '../api/VotesAPI';
import DataUtils from '../utils/data';

const PADDING = 4;
const VoteCard = ({vote}) => {
  const [status, setStatus] = useState(vote.status === 1);
  const toggleStatus = () => {
    let config = {headers: {authorization: DataUtils.user.token}};
    let data = {
      status: !status,
      vote_id: vote.vote_id,
    };

    VotesAPI.updateStatus(data, config).then((resp) => {
      let response = 'response';
      let changedRows = 'changedRows';
      if (response in resp && changedRows in resp.response) {
        if (resp.response[changedRows] === 1) {
          setStatus(!status);
          vote.status = status ? 1 : 0;
        }
      } else {
        console.error(resp.error);
      }
    });
  };

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
          trackColor={{true: colors.secondary, false: '#767577'}}
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
