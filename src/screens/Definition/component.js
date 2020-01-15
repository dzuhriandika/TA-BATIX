/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import { Container,Text } from 'native-base';
import Style from './styles';

export default class Definition extends Component {
  render() {
    return (
      <Container padder style={Style.container}>
        <Text>Definition Screen</Text>
      </Container>
    );
  }
}
