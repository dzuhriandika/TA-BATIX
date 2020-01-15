import React, {Component} from 'react';
import {
  Container,
  Text,
  Icon,
  Header,
  Left,
  Body,
  Button,
  Title,
  View,
  Right,
} from 'native-base';
import Style from './styles';

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Header style={Style.header}>
          <Left />
          <Body />
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('AboutUs')}>
              <Title style={Style.titleHead}>about us</Title>
            </Button>
          </Right>
        </Header>
        <Container padder style={Style.container}>
          <Text>Profile Screen</Text>
        </Container>
      </View>
    );
  }
}
