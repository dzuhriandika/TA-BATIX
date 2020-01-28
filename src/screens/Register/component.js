import React, {Component} from 'react';
import {Image} from 'react-native';
import {Button, Text, Form, Item, Input, Container, View} from 'native-base';
import Style from './styles';

export default class Register extends Component {
  static navigationOptions = {header: null};
  render() {
    return (
      <Container style={Style.container}>
        <View style={Style.logoBox}>
          <Image style={Style.logo} source={require('../../image/logo.png')} />
        </View>
        <Form style={Style.form}>
          <Item rounded>
            <Input placeholder="   Nama" />
          </Item>
          <Item rounded style={Style.textBox}>
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
          <Text>Daftar</Text>
        </Button>
      </Container>
    );
  }
}
