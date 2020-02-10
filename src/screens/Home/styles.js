import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
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
  thumnail: {
    width: 100 + '%',
    height: 120,
    borderRadius: 8,
  },
  iconContainer: {
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleIcon: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
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
    backgroundColor: 'white',
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
    marginTop: 20,
    backgroundColor: 'white',
  },
  thumnailMateri: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: 100 + '%',
    height: 130,
  },
  titleMateri: {
    fontSize: 18,
    padding: 10,
    fontFamily: 'Nunito-SemiBold',
  },
  titleThumnail: {
    fontSize: 14,
    paddingLeft: 10,
    paddingBottom: 10,
    fontFamily: 'Nunito-Regular',
  },
  mb: {
    marginBottom: 50,
  },
});
