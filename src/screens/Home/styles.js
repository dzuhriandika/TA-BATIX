import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    width: 100 + '%',
  },
  header: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  smallAppLogo: {
    width: 40,
    height: 40,
  },
  titleHead: {
    color: 'black',
    fontSize: 30,
  },
  placeholder: {
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
  },
  input: {
    width: '90%',
    marginLeft: 12,
    color: 'white',
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
  inputWrapper: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 22,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    flexDirection: 'row',
  },
  thumnail: {
    width: 100 + '%',
    height: 120,
    borderRadius: 8,
  },
  iconContainer: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleIcon: {
    marginTop: 10,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#29291E',
  },
  card: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  iconBox: {
    width: 53,
    height: 53,
    borderRadius: 50,
    backgroundColor: '#FFF0E5',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 15,
    width: 15,
  },
  cardMateri: {
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  thumnailMateri: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: 100 + '%',
    height: 130,
  },
  thumnailWrapper: {
    paddingVertical: 17,
    paddingHorizontal: 16,
  },
  titleMateri: {
    color: '#29291E',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  titleThumnail: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: '#696868',
  },
  mb: {
    marginBottom: 50,
  },
});
