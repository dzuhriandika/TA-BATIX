/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Text, Content, Icon} from 'native-base';
import Header from '../../components/Header';
import Card from '../../components/CardQuiz';
import Style from './styles';
import Arrow from '../../Svg/arrow';
import {TouchableOpacity} from 'react-native';

export default class Quiz extends Component {
  static navigationOptions = {tabbarVisible: true};
  render() {
    return (
      <Container>
        <Header
          iconLeft={<Icon name="arrow-round-back" style={Style.iconLeft} />}
          title="Quiz"
        />
        <Content style={Style.container}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PlayQuiz')}>
            <Card title="Quiz 1" divisi="10 Soal" icon2={<Arrow />} />
          </TouchableOpacity>
          <Card title="Quiz 2" divisi="10 Soal" icon2={<Arrow />} />
        </Content>
      </Container>
    );
  }
}
