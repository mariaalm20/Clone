import {StyleSheet} from 'react-native';
import Elevations from 'react-native-elevation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212439',
  },

  content: {
    padding: 20,
    marginTop: "-170%",
  },

  containerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  contentButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 38,
    color: '#cccc',
    fontWeight: 'bold',
    textShadowColor: '#fff', 
    textShadowRadius: 1, 
  },

  textBorder: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 40,
    color: '#212439',
    fontWeight: 'bold',
     textShadowColor: '#fff', 
     textShadowRadius: 5, 
     textShadowOffset: { 
      width: 1,
      height: 1
     }
  },

  containerText: {
    marginTop: '8%',
    marginBottom: '8%',
  },

  imageBackground: {
    width: '60%',
    height: '90%',
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse'
  },

  linearGradient: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#282A40',

    ...Elevations[12],

    alignItems: 'center',
    justifyContent: 'center',
  
    padding: 10,

    shadowColor: '#202329',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ccc',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },

  containerBottom:{
    width: '100%',
    height: 80,
    padding: "5%",
    borderRadius: 10,
    marginTop: "8%",
    backgroundColor: '#282A40',

    ...Elevations[12],


    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },


  buttonTextBottom: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#ccc',

    margin: 10,
    fontWeight: '600',
    paddingLeft: 20
  },

  group: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 20,
    height: 16,
  },

  iconPlay: {
    width: 44,
    height: 30,
  },

  iconMouse: {
    width: 21,
    height: 34,
  },

  iconSettings: {
    width: 25,
    height: 25,
  },

  iconGame: {
    width: 40,
    height: 21,
  },

  iconShopping: {
    width: 26,
    height: 22,
  },

  iconHome: {
    marginTop: 8,
    marginRight: 16,
    width: 28,
    height: 26,
  },

  contentIcon: {
    borderRightWidth: 1,
    borderRightColor: '#939188',
    height: 50
  },
  
});

export default styles;
