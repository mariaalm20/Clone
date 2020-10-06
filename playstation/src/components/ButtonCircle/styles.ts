import { StyleSheet } from 'react-native';
import Elevations from 'react-native-elevation'

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#282A40',

    ...Elevations[12],

    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default styles