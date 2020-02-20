import React, {Component} from 'react';
import {ToastAndroid, Image, Alert} from 'react-native';
import {Button, Text, Form, Item, Input, Container, View} from 'native-base';
import axios from 'axios';
import Style from './styles';
import IMAGES from '../../config/image';
import {ENDPOINT} from '../../configs';
import {STORAGE_KEY} from '../../constants';
import storage from '../../utils/storage';

export default class Login extends Component {
  constructor(props) {
    super(props);
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      email: '',
      password: '',
      hidden: true,
    };
    // this._showPass = this._showPass.bind(this);
  }
  _login = async () => {
    const {email, password} = this.state;
    const params = {email, password};
    if (email === '' && password === '') {
      Alert.alert('Isi email & password');
    } else {
      try {
        const result = await ENDPOINT.login(params);
        if (result.code === 200) {
          await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.token);
          console.log(STORAGE_KEY.TOKEN_LOGIN);
          Alert.alert(JSON.stringify(result.code), 'Succses');
          this.props.navigation.navigate('App');
        } else {
          ToastAndroid.show('Failed to Login', ToastAndroid.SHORT);
        }
      } catch (error) {
        ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
      }
    }
  };
  render() {
    const {email, password} = this.state;
    return (
      <Container style={Style.container}>
        <View style={Style.logoBox}>
          <Image style={Style.logo} source={IMAGES.appLogo} />
        </View>
        <Form style={Style.form}>
          <Item rounded>
            <Input
              placeholder="   Email"
              value={email}
              onChangeText={value => this.setState({email: value})}
            />
          </Item>
          <Item rounded style={Style.textBox}>
            <Input
              placeholder="   Password"
              value={password}
              secureTextEntry={true}
              onChangeText={value => this.setState({password: value})}
            />
          </Item>
        </Form>
        <Button rounded onPress={this._login} style={Style.btn1}>
          <Text>Masuk</Text>
        </Button>
        <View style={Style.title2}>
          <Text>Belum punya akun?</Text>
        </View>
        <Button
          bordered
          onPress={() => this.props.navigation.navigate('Register')}
          style={Style.btn2}>
          <Text style={Style.textBtn}>Daftar</Text>
        </Button>
      </Container>
    );
  }
}
