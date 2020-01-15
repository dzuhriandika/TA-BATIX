import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Button,
  Text,
  Form,
  Item,
  Input,
  Container,
  View,
  Header,
  Title,
  Left,
  Icon,
  Thumbnail,
  Body,
  Content,
  Right,
} from 'native-base';
import Style from './styles';
import IMAGES from '../../config/image';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header style={Style.header}>
          <Left>
            <Thumbnail
              source={IMAGES.smallAppLogo}
              style={Style.smallAppLogo}
            />
          </Left>
          <Body>
            <Title style={Style.titleHead}> QUIZ & TEST</Title>
          </Body>
        </Header>
        <Content style={Style.container}>
          <View style={Style.logoBox}>
            <Image style={Style.logo} source={IMAGES.testIcon} />
          </View>
          <View style={Style.textBox}>
            <Text style={Style.text}>Apakah Kamu Sudah Siap!!!</Text>
          </View>
          <View style={Style.btnBox}>
            <Button
              rounded
              onPress={() => this.props.navigation.navigate('Quiz')}
              style={Style.btn}>
              <Text>Quiz</Text>
            </Button>
            <Text style={Style.title}>atau</Text>
            <Button
              rounded
              onPress={() => this.props.navigation.navigate('Test')}
              style={Style.btn}>
              <Text style={Style.textBtn}>Test</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
