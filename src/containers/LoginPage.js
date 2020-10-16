import React, {useState} from 'react';
import {View, TextInput, Image, Button, ImageComponent} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../styles/LoginPageStyle.js';

const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (value) => setUsername(value);
  const changePassword = (value) => setPassword(value);

  const login = () => {
    //TODO: call LoginService nad process username  & password
    navigation.navigate('Home');
  };

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image
          style={style.imageStyle}
          source={require('../assets/sps_logo.png')}
        />
      </View>
      <View style={{...style.row, ...style.borderRed}}>
        <Icon style={style.iconStyle} name="user" />
        <TextInput
          value={username}
          placeholder="Korisičko ime"
          onChangeText={changeUsername}
        />
      </View>
      <View style={{...style.row, ...style.borderRed}}>
        <Icon style={style.iconStyle} name="lock" />
        <TextInput
          value={password}
          placeholder="*****"
          onChangeText={changePassword}
        />
      </View>
      <Button title="Prijavi se" onPress={login} />
    </View>
  );
};

export default LoginPage;
