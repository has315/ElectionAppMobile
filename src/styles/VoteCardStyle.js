import {StyleSheet} from 'react-native';
import colors from './BaseStyle';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 5,
    minHeight: 100,
    minWidth: 300,
    padding: 10,
    margin: 3,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  statusText: {
    padding: 3,
    color: colors.textColor,
    fontSize: 18,
  },

  textColor: {
    color: colors.textColor,
  },

  iconStyle: {
    fontSize: 20,
    minWidth: 20,
    textAlign: 'center',
    marginRight: 5,
  },

  row: {flexDirection: 'row'},
});

export default style;
