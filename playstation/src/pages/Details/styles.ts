import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212439',
  },

  imageBackground: {
    width: '100%',
    height: '66%',
    marginRight: -100,
  },

  containerTop: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  },

  top: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },

  down: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 30,
  },

  productImage: {
    transform: [{ rotate: '270deg' }],
    width: 400,
    height: 200,
    marginTop: 30,
  },

  title: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },

  subTitle: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 14,
    color: '#fff',
  },

  favorite: {
    marginTop: -90,
  },

  left: {
    marginBottom: 20
  },

  containerDown: {
    padding: 20,
    marginTop: -130,
  },

  titleProduct: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 38,
    color: '#cccc',
    fontWeight: 'bold',
    textShadowColor: '#fff',
    textShadowRadius: 1,
  },

  descriptionProduct: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 16,
    color: '#cccc',
  },

  rowGroupTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  icon: {
    width: 40,
    height: 25,
  },


  containerBottom: {
    width: '100%',
    height: 70,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#282A40',

    shadowColor: '#202329',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,

    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },

  sifrao: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 20,
    color: '#5D9CD5',
  },

  priceBottom: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 30,
    color: '#ccc',
    fontWeight: '300'
  },

  iconShopping: {
    width: 26,
    height: 22,
  },

  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  buttonText: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 20,
    color: '#ccc',
    margin: 10,
    paddingRight: 10,
  },

  contentIcon: {
    borderLeftWidth: 1,
    borderLeftColor: '#939188',
    height: 50
  },

  iconArrowRight: {
    width: 20,
    height: 10,
    marginTop: 20,
    marginLeft: 18
  },

  iconArrowLeft: {
    width: 36,
    height: 20,
  },

  iconHome: {
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    paddingRight: 10,
    marginRight: 30
  }
});

export default styles
