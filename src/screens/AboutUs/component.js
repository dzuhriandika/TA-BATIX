/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Text, Image} from 'native-base';
import Style from './styles';
import IMAGES from '../../config/image';

export default class AboutUs extends Component {
  render() {
    return (
      <Container padder style={Style.container}>
        <Text>about screen</Text>
      </Container>
    );
  }
}
