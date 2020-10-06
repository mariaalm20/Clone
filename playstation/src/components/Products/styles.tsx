import {StyleSheet} from 'react-native';
import Elevations from 'react-native-elevation';

const styles = StyleSheet.create({
  containerProducts: {
    width: 250,
    height: 270,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,

    backgroundColor: '#282A40',

    ...Elevations[12],

    marginTop: 60,
    marginRight: 70,
    padding: 40,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentTitle: {
    alignItems: 'stretch',
    alignSelf: 'flex-start',
  },

  title: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 30,
    color: '#ccc',
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#ccc',
    fontSize: 16,
    marginTop: 8,
  },
});

export default styles;
