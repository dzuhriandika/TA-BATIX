import React, {Component} from 'react';
import {AsyncStorage, ToastAndroid, Image} from 'react-native';
import {Button, Text, Form, Item, Input, Container, View} from 'native-base';
import axios from 'axios';
import Style from './styles';
import IMAGES from '../../config/image';

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
    axios
      .post('http://3.92.196.11/public/index.php/api/login', payload)
      .then(async value => {
        await AsyncStorage.setItem('access_token', value.data.access_token);
        ToastAndroid.show('Success', ToastAndroid.SHORT);
        this.props.navigation.navigate('App');
      })
      .catch(err => {
        ToastAndroid.show('Password or Email invalid', ToastAndroid.SHORT);
        console.log(err);
      });
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
        <Button rounded onPress={this.login} style={Style.btn1}>
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
