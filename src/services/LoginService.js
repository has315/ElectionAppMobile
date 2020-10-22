import PBKDF2 from 'react-native-pbkdf2';
import Config from 'react-native-config';
import Keychain from 'react-native-keychain';

const storeCredentials = async (data) => {
  console.log('Storing data');
  await Keychain.setGenericPassword(data.username, JSON.stringify(data));
  console.log('Data stored');
};

const getCredentials = async () => {
  return await Keychain.getGenericPassword();
};

const getLoggedUser = async () => {
  let creds = await getCredentials();
  let username = creds.username;
  let data = JSON.parse(creds.password);
  return {username, ...data};
};

const resetCredentials = async () => {
  return await Keychain.resetGenericPassword();
};

const hashValue = async (data, saltRounds = 4000) => {
  const salt = `${data.username}${Config.PRESALT}`;
  const value = await PBKDF2.derivationKey(
    data.password,
    salt,
    saltRounds,
    +Config.HASH_LENGTH,
  );
  return value;
};

export default {
  hashValue,
  getCredentials,
  getLoggedUser,
  resetCredentials,
  storeCredentials,
};
