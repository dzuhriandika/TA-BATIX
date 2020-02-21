import React, {Component} from 'react';
import {Text, View, ToastAndroid, Image, TextInput} from 'react-native';
import {Button} from 'native-base';
import axios from 'axios';
import Style from './styles';
import IMAGES from '../../config/image';
import Email from '../../Svg/Email';
import Password from '../../Svg/Password';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {
  static navigationOptions = {header: null};
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.login = this.login.bind(this);
  }
  login = async () => {
    const {email, password} = this.state;
    const payload = {
      email: email,
      password: password,
    };
    try {
      const fetch = await axios.post('http://100.27.30.4/api/login', payload);
      if (fetch) {
        await AsyncStorage.setItem('token', fetch.data.access_token);
        await AsyncStorage.setItem('email', payload.email);
        await this.props.navigation.navigate('App');
      }
    } catch (error) {
      ToastAndroid.show('Password or Email invalid', ToastAndroid.SHORT);
      console.log(error);
    }

    // .then(async value => {
    //   await AsyncStorage.setItem('access_token', value.data.access_token);
    //   await AsyncStorage.setItem('email', payload.email);
    //   ToastAndroid.show('Success', ToastAndroid.SHORT);
    //   this.props.navigation.navigate('App');
    //   console.log(payload);
    //   console.log(await AsyncStorage.getItem('email'));
    // })
    // .catch(err => {
    //   ToastAndroid.show('Password or Email invalid', ToastAndroid.SHORT);
    //   console.log(err);
    // });
  };
  render() {
    const {email, password} = this.state;
    return (
      <View style={Style.mainScreen}>
        <View style={Style.container}>
          <View style={Style.form}>
            <View style={Style.titleWrapper}>
              <Text style={Style.title}>Masuk</Text>
            </View>
            <View style={Style.labelWrapper}>
              <Text style={Style.label}>Nomor Ponsel / Email</Text>
            </View>
            <View style={Style.inputWrapper}>
              <Email />
              <TextInput
                value={email}
                placeholderTextColor="#C4C4C4"
                placeholder="Email"
                underlineColorAndroid="transparent"
                style={Style.input}
                onChangeText={email => this.setState({email})}
              />
            </View>
            <View style={Style.labelWrapper}>
              <Text style={Style.label}>Pasword</Text>
            </View>
            <View style={Style.inputWrapper}>
              <Password />
              <TextInput
                value={password}
                placeholderTextColor="#C4C4C4"
                placeholder="Password"
                underlineColorAndroid="transparent"
                style={Style.input}
                onChangeText={password => this.setState({password})}
              />
            </View>
            <View style={Style.lupasWrapper}>
              <Text style={Style.lupas}>Lupa Password?</Text>
            </View>
          </View>
          <Button onPress={this.login} style={Style.btn}>
            <Text uppercase={false} style={Style.btnTeks}>
              Masuk
            </Text>
          </Button>
          <Text style={Style.registerTeks}>
            Belum punya akun?
            <Text
              onPress={() => this.props.navigation.navigate('Register')}
              style={Style.registerTeksPress}>
              {' '}
              Daftar Sekarang
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
