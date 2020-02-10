import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  titleHead: {
    color: 'black',
  },
  headerWrapper: {
    alignItems: 'center',
    width: '100%',
  },
  headerBG: {
    width: 100 + '%',
    height: 50,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    color: '#fff',
    position: 'absolute',
    alignSelf: 'center',
    top: 13,
    fontSize: 20,
  },
  iconLeft: {
    position: 'absolute',
    left: 20,
    top: 12,
    zIndex: 9999,
  },
  setting: {
    position: 'absolute',
    right: 20,
    top: 14,
  },
});
