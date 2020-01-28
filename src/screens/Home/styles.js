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
  thumnail: {
    width: 100 + '%',
    height: 120,
    borderRadius: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleIcon: {
    fontSize: 14,
  },
  card: {
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  iconBox: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  icon: {
    color: '#FF3E71',
  },
  cardMateri: {
    borderRadius: 5,
    marginBottom: 10,
  },
  thumnailMateri: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: 100 + '%',
    height: 75,
  },
  titleMateri: {
    fontSize: 16,
    padding: 10,
  },
  mb: {
    marginBottom: 50,
  },
});
