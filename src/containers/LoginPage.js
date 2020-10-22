import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../styles/LoginPageStyle.js';
import LoginAPI from '../api/LoginAPI';
import LoginService from '../services/LoginService';

const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('adminqq');
  const [isEditable, setIsEditable] = useState(true);
  const [isDisabledButton, setIsDisabledButton] = useState(false);

  useEffect(() => {
    LoginService.resetCredentials();
    console.log('Credentials reset done');
  }, []);

  const isEmpty = (value) => setIsDisabledButton(value.length === 0);
  const changeUsername = (value) => {
    setUsername(value);
    isEmpty(value);
  };
  const changePassword = (value) => {
    setPassword(value);
    isEmpty(value);
  };

  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'OK',
          onPress: () => {
            setIsDisabledButton(false);
            setIsEditable(true);
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  const loginUser = async () => {
    setIsDisabledButton(true);
    setIsEditable(false);
    let data = {username, password};
    let response = await LoginAPI.login(data);
    if (response) {
      const creds = await LoginService.getCredentials();
      console.log(`Credentials: ${JSON.stringify(creds)}`);
      setIsDisabledButton(false);
      setIsEditable(true);
      navigation.navigate('Home');
    } else {
      setUsername('');
      setPassword('');
      showAlert('Greška', 'Pogrešan nalog/lozinka.');
    }
  };

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image
          style={style.imageStyle}
          source={require('../assets/sps_logo.png')}
        />
      </View>
      <View style={style.inputContainer}>
        <View style={{...style.row}}>
          <Icon style={style.iconStyle} name="user" />
          <TextInput
            style={style.textInputStyle}
            value={username}
            placeholder="Korisičko ime"
            onChangeText={changeUsername}
            editable={isEditable}
          />
        </View>
        <View style={{...style.row}}>
          <Icon style={style.iconStyle} name="lock" />
          <TextInput
            style={style.textInputStyle}
            value={password}
            placeholder="*****"
            onChangeText={changePassword}
            editable={isEditable}
            secureTextEntry
          />
        </View>
      </View>
      <Icon.Button
        name="sign-in"
        onPress={loginUser}
        style={isDisabledButton ? style.disabledButtonStyle : style.buttonStyle}
        disabled={isDisabledButton}>
        <Text style={style.buttonText}>Prijavi se</Text>
      </Icon.Button>
    </View>
  );
};

export default LoginPage;
