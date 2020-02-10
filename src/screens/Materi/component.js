/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Text,
  Icon,
  Left,
  Body,
  Button,
  Title,
  View,
  Content,
  Image,
  Right,
  Thumbnail,
  CardItem,
  Item,
  Input,
} from 'native-base';
import Style from './styles';
import IMAGES from '../../config/image';
import {ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import ArrowBack from '../../svg/ArrowBack';
import ArrowNext from '../../svg/ArrowNext';
import Header from '../../components/Header';
import Card from '../../components/CardMateri';

export default class Materi extends Component {
  render() {
    return (
      <View style={Style.container}>
        <Header iconLeft={<Icon name="arrow-round-back" style={Style.iconLeft} />}title="Materi" />
        <View padder>
          <ScrollView>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Definition')}>
              <Card title="Apa Itu Batik ?"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Type')}>
              <Card title="Jenis-Jenis Batik"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Making')}>
                <Card title="Cara Pembuatan Batik"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Garuda')}>
                <Card title="Batik Garuda"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Gentongan')}>
              <Card title="Batik Gentongan"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Jepara')}>
                <Card title="Batik Jepara"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Kawung')}>
              <Card title="Batik Kawung"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Keraton')}>
              <Card title="Batik Keraton"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MegaMendung')}>
              <Card title="Batik Mega Mendung"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Parang')}>
              <Card title="Batik Parang"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PringSedapur')}>
              <Card title="Batik Pring Sedapur"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Priyangan')}>
              <Card title="Batik Priyangan"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Simbut')}>
              <Card title="Batik Simbut"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Sogan')}>
              <Card title="Batik Sogan"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TujuhRupa')}>
              <Card title="Batik Tujuh Rupa"icon2={<ArrowNext />} />
            </TouchableOpacity>
            <Text />
            <Text />
          </ScrollView>
        </View>
      </View>
    );
  }
}
