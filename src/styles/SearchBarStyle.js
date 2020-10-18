import {StyleSheet} from 'react-native';
import colors from './BaseStyle';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    backgroundColor: colors.primary,
    borderRadius: 15,
    elevation: 10,
    paddingHorizontal: 3,
  },

  textInput: {
    flex: 1,
    fontSize: 18,
  },

  searchIcon: {
    color: colors.secondary,
    fontSize: 20,
  },

  centerContent: {
    justifyContent: 'center',
  },

  border: {
    borderWidth: 4,
    borderColor: colors.accent,
    borderRadius: 5,
  },
});

export default style;
