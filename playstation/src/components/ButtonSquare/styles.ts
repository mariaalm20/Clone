import { StyleSheet } from 'react-native';
import Elevations from 'react-native-elevation'

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#282A40',

    ...Elevations[12],

    alignItems: 'center',
    justifyContent: 'center',
  },

})

export default styles
