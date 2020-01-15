/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Text} from 'native-base';
import Style from './styles';

export default class Quiz extends Component {
  static navigationOptions = {tabbarVisible: true};
  render() {
    return (
      <Container padder style={Style.container}>
        <Text>Quiz Screen</Text>
      </Container>
    );
  }
}
