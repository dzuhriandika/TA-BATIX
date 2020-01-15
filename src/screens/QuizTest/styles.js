import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  container: {
    flex: 1,
    padding: 20,
    width: 100 + '%',
  },
  logoBox: {
    alignItems: 'center',
  },
  logo: {
    width: 153,
    height: 157,
    marginTop: 65,
  },
  textBox: {
    alignItems: 'center',
    marginTop: 41,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  btnBox: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 48,
  },
  title: {
    padding: 10,
  },
  btn: {
    backgroundColor: '#FF3E71',
    width: 90,
    justifyContent: 'center',
  },
});
