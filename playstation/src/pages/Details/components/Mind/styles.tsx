import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mind: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
  },

  rowGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  columnGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  group: {
    flexDirection: 'row',
  },

  groupTop: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  buttonDown: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#282A40',

    shadowColor: '#202329',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },

  contentText: {
    marginLeft: 20,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 16,
    color: '#ccc',
    fontWeight: 'bold',
  },

  subTitle: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 14,
    color: '#ccc',
  },

  rowGroupButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  iconPlay: {
    width: 30,
    height: 20,
  },

  iconMic: {
    width: 20,
    height: 25,
  },

  iconFast: {
    width: 26,
    height: 26,
  },

  border: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#282A40',
    borderColor: '#282A30',
    borderWidth: 1,

    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;
