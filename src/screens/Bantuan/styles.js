import {StyleSheet} from 'react-native';
import {whileStatement} from '@babel/types';

export default StyleSheet.create({
  mainScreen: {
    backgroundColor: '#F7F7F7',
    flex: 1,
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 30,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: 0,
  },
  content: {
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    color: '#696868',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    marginLeft: 25,
  },
  email: {
    position: 'absolute',
    right: 0,
    color: '#696868',
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
});
