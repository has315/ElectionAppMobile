import React, {useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../styles/LoginPageStyle.js';
import LoginAPI from '../api/LoginAPI';

const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (value) => setUsername(value);
  const changePassword = (value) => setPassword(value);

  const loginUser = () => {
    let data = {username: '', password: password};
    console.log('data from data: ' + data);
    //TODO: call LoginService nad process username  & password
    LoginAPI.login(data);
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
          secureTextEntry
        />
      </View>
      <Icon.Button
        name="sign-in"
        onPress={loginUser}
        style={style.buttonCenterContent}>
        <Text style={style.buttonText}>Prijavi se</Text>
      </Icon.Button>
    </View>
  );
};

export default LoginPage;
