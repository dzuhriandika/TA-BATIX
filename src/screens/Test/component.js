/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Text, Content, Icon} from 'native-base';
import Header from '../../components/Header';
import Card from '../../components/CardQuiz';
import Style from './styles';
import Arrow from '../../Svg/arrow';

export default class Quiz extends Component {
  static navigationOptions = {tabbarVisible: true};
  render() {
    return (
      <Container>
        <Header iconLeft={<Icon name="arrow-round-back" style={Style.iconLeft} />}title="Ujian" />
        <Content style={Style.container}>
        <Card title="Ujian 1" divisi="15 Soal" icon2={<Arrow />}/>
        <Card title="Ujian 2" divisi="15 Soal" icon2={<Arrow />}/>
        </Content>
      </Container>
    );
  }
}
