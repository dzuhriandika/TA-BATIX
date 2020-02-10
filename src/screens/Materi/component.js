/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import Header from '../../components/Header';
import {
  Container,
  Text,
  View,
  Content,
  Image,
  Right,
  Thumbnail,
} from 'native-base';
import Style from './styles';
import IMAGES from '../../config/image';
import {ScrollView, TouchableOpacity} from 'react-native';
import ArrowLeft from '../../Svg/arrowLeft';
import Arrow from '../../Svg/arrow';
import Card from '../../components/CardMateri';

export default class Materi extends Component {
  render() {
    return (
      <View>
        <Header
          title="Materi"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView>
          <View style={Style.container}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Definition')}>
              <Card title="Pengertian Batik" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Type')}>
              <Card title="Jenis-Jenis Batik" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Making')}>
              <Card title="Cara Pembuatan" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Garuda')}>
              <Card title="Batik Garuda - Yogyakarta" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Gentongan')}>
              <Card title="Batik Gentongan - Madura" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Jepara')}>
              <Card title="Batik Jepara - Jepara" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Kawung')}>
              <Card title="Batik Kawung - Jawa Tengah" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Keraton')}>
              <Card title="Batik Keraton - Yogyakarta" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MegaMendung')}>
              <Card title="Batik Mega Mendung - Cirebon" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Parang')}>
              <Card title="Batik Parang - Pulau Jawa" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PringSedapur')}>
              <Card title="Batik Pring Sedapur - Magetan" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Priyangan')}>
              <Card title="Batik Priyangan - Tasikmalaya" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Simbut')}>
              <Card title="Batik Simbut - Banten" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Sogan')}>
              <Card title="Batik Sogan - Solo" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginBottom: 120}}
              onPress={() => this.props.navigation.navigate('TujuhRupa')}>
              <Card title="Batik Tujuh Rupa - Pekalongan" icon2={<Arrow />} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
