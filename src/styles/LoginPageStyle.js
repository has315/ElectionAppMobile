import {StyleSheet} from 'react-native';
import colors from './BaseStyle';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },

  imageContainer: {
    flexDirection: 'row',
  },

  imageStyle: {
    width: '100%',
    height: undefined,
  },

  iconStyle: {
    fontSize: 20,
    minWidth: 20,
    marginRight: 5,
    color: colors.secondary,
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
