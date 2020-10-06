import {StyleSheet} from 'react-native';
import Elevations from 'react-native-elevation'

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    borderRadius: 5,
    width: '50%',
    height: 45,
    overflow: 'hidden',

   ...Elevations[12]
  },
})

export default styles