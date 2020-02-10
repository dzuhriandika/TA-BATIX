import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainScreen: {
    backgroundColor: '#F7F7F7',
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    marginVertical: 30,
    position: 'relative',
  },
  profil: {
    alignSelf: 'center',
    width: 120,
    height: 120,
  },
  profilWrapper: {
    marginBottom: 30,
  },
  nameWrapper: {
    marginTop: 20,
    alignSelf: 'center',
  },
  editIcon: {
    position: 'absolute',
    top: 0,
    right: 20,
  },
  name: {
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    fontSize: 18,
  },
  smk: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: '#D0D0D0',
  },
});
