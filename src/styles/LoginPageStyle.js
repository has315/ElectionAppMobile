import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from './BaseStyle';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.primary,
    padding: 10,
  },

  imageContainer: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 50,
    padding: 10,
  },

  imageStyle: {flex: 1, aspectRatio: 1.5, resizeMode: 'contain'},

  alignSelfCenter: {
    alignSelf: 'center',
  },
  inputContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconStyle: {
    fontSize: 20,
    minWidth: 20,
    marginRight: 5,
    color: colors.secondary,
    alignSelf: 'center',
  },

  textInputStyle: {
    borderBottomWidth: 2,
    borderColor: colors.secondary,
    marginBottom: 10,
    minWidth: 200,
    alignSelf: 'stretch',
    padding: 5,
  },

  buttonText: {
    fontSize: 20,
    color: colors.primary,
    alignSelf: 'center',
  },

  center: {
    justifyContent: 'center',
  },

  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  borderRed: {
    borderWidth: 3,
    borderColor: 'red',
  },

  row: {
    flexDirection: 'row',
  },
});

export default style;
