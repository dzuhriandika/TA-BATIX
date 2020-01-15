import React, {Component} from 'react';
import {Image} from 'react-native';
import {Button, Text, Form, Item, Input, Container, View} from 'native-base';
import Style from './styles';
import IMAGES from '../../config/image';

export default class Login extends Component {
  static navigationOptions = {header: null};
  render() {
    return (
      <Container style={Style.container}>
        <View style={Style.logoBox}>
          <Image style={Style.logo} source={IMAGES.appLogo} />
        </View>
        <Form style={Style.form}>
          <Item rounded>
            <Input placeholder="   Email" />
          </Item>
          <Item rounded style={Style.textBox}>
            <Input placeholder="   Password" />
          </Item>
        </Form>
        <Button
          rounded
          onPress={() => this.props.navigation.navigate('App')}
          style={Style.btn1}>
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
